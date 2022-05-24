import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/SignIn';

import { UserProvider } from './contexts/userContext';

import './styles/global.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="profile">
            <Route path=":id" element={<Profile />} />
          </Route>
          <Route path="/sign-in" exact element={<Signin />} />
          <Route element={<Home />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
