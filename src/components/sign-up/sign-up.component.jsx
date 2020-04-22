import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state= {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        };
    }
    handleChange = (event) => {
        const {name, value} =  event.target;
        this.setState({[name]: value})
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        try {
            if(password !== confirmPassword) {
                alert("Password mismatch please type again");
                return;
            } else {
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user, {displayName});
                this.setState({
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
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput type='text' label='Display Name' name='displayName' value={displayName} handleChange={this.handleChange} required/>
            <FormInput type='email' label='Email' name='email' value={email} handleChange={this.handleChange} required/>
            <FormInput type='password' label='Password' name='password' value={password} handleChange={this.handleChange} required/>
            <FormInput type='password' label='Confirm Password' name='confirmPassword' value={confirmPassword} handleChange={this.handleChange} required/>
            <div className='buttons'>
                <CustomButton type='submit'>Sign Up</CustomButton>
            </div>
            </form>
            </div>
        )
    }
}

export default SignUp;
   