import "./authentication.styles.scss";


//import { getRedirectResult } from "firebase/auth";


import SignUpForm from "../../components/sign-up-form/sign-up-form.components";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";



const Authentication=()=>{

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
    
   
return(
    <div className="authentication-container">
        <SignInForm/>
    {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google redirect</button> */}
    <SignUpForm/>
    </div>
);
}

export default Authentication;