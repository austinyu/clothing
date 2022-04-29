import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const { userDocRef } = await createUserDocumentFromAuth(user);
  };
  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log({ user });
  };

  return (
    <div>
      <h1>Sign in is working.</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popups</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
