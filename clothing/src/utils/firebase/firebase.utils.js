import {
    initializeApp
} from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZRSPA1RD6hjH3ThQ3U_rT32z5rH0Mp1Q",
    authDomain: "crwn-clothing-db-2bfcc.firebaseapp.com",
    projectId: "crwn-clothing-db-2bfcc",
    storageBucket: "crwn-clothing-db-2bfcc.appspot.com",
    messagingSenderId: "1034424385686",
    appId: "1:1034424385686:web:214faace27d46332dfc2b7"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userDocRef;
}
