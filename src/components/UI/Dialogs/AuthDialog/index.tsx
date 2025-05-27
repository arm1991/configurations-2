import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, registration } from '@/store/thunks/authThunks';
import { AuthDialogContext } from '@/contexts/AuthDialogContext';
import { CookiesContext } from '@/contexts/CookiesContext';

import Signin from '@/components/forms/Signin';
import Signup from '@/components/forms/Signup';

import { type FormFieldsLogin, type FormFieldsRegistration } from '@/interfaces/form';
import { type AppDispatch } from '@/store/types';

import DialogWrapper from '../DialogWrapper';

function AuthDialog() {
  const dispatch = useDispatch<AppDispatch>();
  const [isSignIn, setIsSignIn] = useState(true);
  const authDialogContext = useContext(AuthDialogContext);
  const cookies = useContext(CookiesContext);
  const isCookiesAllowed = cookies.getState();

  const toggleIsSignIn = () => {
    setIsSignIn((prev) => !prev);
  };

  const handleRegistrationClick = ({ email, password, fullname }: FormFieldsRegistration) => {
    dispatch(registration({ email, password, fullname, isCookiesAllowed }));
    authDialogContext.toggleIsOpen();
  };

  const handleLoginClick = ({ email, password }: FormFieldsLogin) => {
    dispatch(login({ email, password, isCookiesAllowed }));
    authDialogContext.toggleIsOpen();
  };

  return (
    <DialogWrapper showDialog={authDialogContext.isOpen} onClose={authDialogContext.toggleIsOpen}>
      {isSignIn ? (
        <Signin toggleIsSignIn={toggleIsSignIn} handleSubmit={handleLoginClick} />
      ) : (
        <Signup toggleIsSignIn={toggleIsSignIn} handleSubmit={handleRegistrationClick} />
      )}
    </DialogWrapper>
  );
}

export default AuthDialog;
