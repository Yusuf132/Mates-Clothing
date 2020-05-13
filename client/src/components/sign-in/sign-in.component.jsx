import React, {useState} from 'react';
import {connect} from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { auth} from '../../firebase/firebase.utils';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

const SignIn = ({signInWithEmail, signInWithGoogle}) => {
    const [userCredentials, setCredentials] = useState({
                email:'',
                password: ''
    });
    const {email, password} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        signInWithEmail(email,password);
    }
    const handleChange = event => {
        const {name, value} = event.target;
        setCredentials({...userCredentials, [name]:value});
    }
        return(
            <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type='email' label='Email' name='email' value={email} handleChange={handleChange} required/>
                <FormInput type='password' label='Password' name='password' value={password} handleChange={handleChange} required/>
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>Sign in With Google</CustomButton>
                </div>
            </form>

            </div>
        )

}
const mapsDispatchToProps = dispatch => ({
    signInWithGoogle: () => dispatch(googleSignInStart()),
    signInWithEmail: (email, password) => dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapsDispatchToProps)(SignIn);