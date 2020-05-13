import React, {useState} from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

const  SignUp = () => {
    const [userCredentials, setCredentials] = useState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
    });
    const handleChange = (event) => {
        const {name, value} =  event.target;
        setCredentials({...userCredentials, [name]: value})
    };
    const {displayName, email, password, confirmPassword} = userCredentials;
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            if(password !== confirmPassword) {
                alert("Password mismatch please type again");
                return;
            } else {
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user, {displayName});
                setCredentials({
                    displayName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                })
    
            }

        } catch(err) {
            console.error(err);
        }
        
    };
  
    return(
        <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput type='text' label='Display Name' name='displayName' value={displayName} handleChange={handleChange} required/>
        <FormInput type='email' label='Email' name='email' value={email} handleChange={handleChange} required/>
        <FormInput type='password' label='Password' name='password' value={password} handleChange={handleChange} required/>
        <FormInput type='password' label='Confirm Password' name='confirmPassword' value={confirmPassword} handleChange={handleChange} required/>
        <div className='buttons'>
            <CustomButton type='submit'>Sign Up</CustomButton>
        </div>
        </form>
        </div>
    )
}

export default SignUp;
   