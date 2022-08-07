import "./sign-up-form.styles.scss";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignUpForm=()=>{

    const[formFields,setFormFields]=useState(defaultFormFields);
    const{displayName,email,password,confirmPassword}=formFields;
    //console.log(formFields);
    

    const resetFormFields=()=>{
        setFormFields(defaultFormFields);
    }
    const onHandleChange=(event)=>{
        console.log(event.target);
        const {name,value}=event.target;


        setFormFields({ ...formFields, [name]: value });//imp
    }
const handleSubmit=async(event)=>{
    event.preventDefault();
    if(password!==confirmPassword)
    {
        alert("Passwords not matching");
        return;
    }
    
    try{
       const {user}= await createAuthUserWithEmailAndPassword(email,password);
    

    await createUserDocumentFromAuth(user,{displayName})
        console.log(displayName);
        resetFormFields();
    }catch(error){
        if(error.code==='auth/email-already-in-use')
        {
            alert("Cannot creater user,Email already in use");
        }
        else if(error.code==='auth/weak-password')
        {
            alert("Password should be at least 6 characters ")
        }
        console.log(error);
        
    }
    
}
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
            
            <FormInput label="Display Name" type="text" name="displayName"onChange={onHandleChange} value={displayName}required/>

            <FormInput label="Email" type="email" name="email" onChange={onHandleChange} value={email} required/>

            <FormInput label="Password" type="password" name="password" onChange={onHandleChange} value={password} required/>

        
            <FormInput label="Confirm Password" type="password" name="confirmPassword" onChange={onHandleChange} value={confirmPassword} required/>

            <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;