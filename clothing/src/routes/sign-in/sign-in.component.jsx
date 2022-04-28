import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const { userDocRef} = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in is working.</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popups</button>
    </div>
  );
};

export default SignIn;
