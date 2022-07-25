import {initializeApp} from 'firebase/app';
import {getAuth,
    signInWithRedirect,
signInWithPopup,
GoogleAuthProvider
} from 'firebase/auth';

import{getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBWIvwNNlq-ZCAB1YWn8oSwtFLsprbl_34",
    authDomain: "crwn-clothing-db-34bed.firebaseapp.com",
    projectId: "crwn-clothing-db-34bed",
    storageBucket: "crwn-clothing-db-34bed.appspot.com",
    messagingSenderId: "874814844396",
    appId: "1:874814844396:web:74808b7c5e6238442a24c9"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider=new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt:"select_account"
  });

  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

  export const db=getFirestore();

  export const createUserDocumentFromAuth=async(userAuth)=>{
    const userDocRef=doc(db,'users',userAuth.uid);

    console.log(userDocRef);
    const userSnapshot=await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists())
    {
        const{displayName,email}=userAuth;
        const createdAt=new Date();

        try{
            await setDoc(userDocRef,{displayName,email,createdAt});
        }catch(error){
            console.log('error creating the user',error.message);
        }
    }

    return userDocRef;
  };

