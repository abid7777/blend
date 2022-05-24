import PropTypes from 'prop-types';
import React, {
  createContext, useEffect, useContext, useMemo, useState,
} from 'react';

import { fetchUser } from '../../services/user';
import localDB from '../../utils/localDB';

const INITIAL_STATE = Object.freeze({ user: null, error: null, isLoading: false });
const UserContext = createContext();

function UserProvider({ children }) {
  const [state, setState] = useState(INITIAL_STATE);
  const signIn = async () => {
    if (state.user) { return; }

    setState((prevState) => ({ ...prevState, isLoading: true }));

    try {
      const user = await fetchUser();

      await localDB.set('user', user).commit();
      setState((prevState) => ({
        ...prevState, user, isLoading: false, error: null,
      }));
    } catch (e) {
      setState((prevState) => ({ ...prevState, error: e.message, isLoading: false }));
    }
  };
  const signOut = async () => {
    setState((prevState) => ({ ...prevState, isLoading: true }));

    try {
      await localDB.omit('user').commit();
      setState(INITIAL_STATE);
    } catch (e) {
      setState((prevState) => ({ ...prevState, error: e, isLoading: false }));
    }
  };
  const value = useMemo(() => ({ ...state, signIn, signOut }), [state]);

  useEffect(() => setState((prevState) => ({ ...prevState, user: localDB.get('user') })), []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('"useUser" must be used within "UserProvider" context.');
  }

  return context;
}

export { UserProvider, useUser };

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
