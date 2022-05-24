import React from 'react';

import { useUser } from '../contexts/userContext';
import Button from '../atoms/Button';

function SignInForm() {
  const { user, signIn } = useUser();

  return (
    <Button onClick={signIn}>
      Sign In,
      {' '}
      {user?.name}
    </Button>
  );
}

export default SignInForm;
