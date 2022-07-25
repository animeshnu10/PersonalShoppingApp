import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";



const Signin=()=>{
    
    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
       const userDocRef= await  createUserDocumentFromAuth(user);
        //console.log(response);
    }
return(
    <div>
    <h1>Sign-in Page</h1>
    <button onClick={logGoogleUser}>
        Sign in with Google Popup
    </button>
    </div>
);
}

export default Signin; 