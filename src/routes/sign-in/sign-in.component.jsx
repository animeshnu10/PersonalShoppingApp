import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";

import { auth,createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.components";
import Button from "../../components/button/button.component";



const Signin=()=>{

    // useEffect(()=>{
    //     const redirect=async()=>{
    //     const response=await getRedirectResult(auth);
    //     //console.log(response);
    //     if(response){
            
    //         const userDocRef=await createUserDocumentFromAuth(response.user);
    //     }
       
    //     }
    //     redirect();
    // },[]);
    const logGoogleUser=async()=>{
       const {user}=await signInWithGooglePopup();
       const userDocRef= await  createUserDocumentFromAuth(user);
        //console.log(response);
    }

   
return(
    <div>
    <h1>Sign-in Page</h1> 
    <Button buttonType="google"onClick={logGoogleUser}>Sign in with Google Popup</Button>
    {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google redirect</button> */}
    <SignUpForm/>
    </div>
);
}

export default Signin; 