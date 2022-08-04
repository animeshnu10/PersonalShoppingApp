import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import { useState } from "react";
import {createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";

const defaultFormFields={
    email:'',
    password:''
}
const SignInForm=()=>{

    const[formFields,setFormFields]=useState(defaultFormFields);
    const{email,password}=formFields;
    
    const resetFormFields=()=>{
        setFormFields(defaultFormFields);
    }
const onHandleChange=(event)=>{
    console.log(event.target);
    const{name,value}=event.target;//destructure
    setFormFields({...formFields,[name]:value});
};

const handleSubmit=async(event)=>{
    event.preventDefault();

try{
    const response=await signInAuthUserWithEmailAndPassword(email,password);
    console.log(response);
    resetFormFields();
}
catch(error){
    switch(error.code){
        case "auth/wrong-password":
             alert("Incorrect Password");
             break;
        case "auth/user-not-found": 
            alert("Email not registered");
            break;
            default: console.log(error);
    }
}
}

const logGoogleUser=async()=>{
    const {user}=await signInWithGooglePopup();
    const userDocRef= await  createUserDocumentFromAuth(user);
     //console.log(response);
 }

    return(
        <div className="sign-in-container">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

    <form onSubmit={handleSubmit}>
    <FormInput label="Email" type="text" name="email" onChange={onHandleChange} value={email} required/>

    <FormInput label="Password" type="password" name="password" onChange={onHandleChange} value={password} required/>
    <div className="buttons-container">
    <Button type="submit">Sign in</Button>
    <Button type="button" buttonType="google"onClick={logGoogleUser}>Google sign in</Button>
    </div>
    </form>
    
    </div>
    
    );
}

export default SignInForm;