import React from 'react';
import {connect} from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { auth} from '../../firebase/firebase.utils';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        const {signInWithEmail} = this.props;

        signInWithEmail(email,password);
        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({email:'',password:''});
        // } catch(error) {
        //     console.error(error);
        // }
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    }
    render() {
        const {signInWithGoogle} = this.props;
        return(
            <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput type='email' label='Email' name='email' value={this.state.email} handleChange={this.handleChange} required/>
                <FormInput type='password' label='Password' name='password' value={this.state.password} handleChange={this.handleChange} required/>
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>Sign in With Google</CustomButton>
                </div>
            </form>

            </div>
        )
    }

}
const mapsDispatchToProps = dispatch => ({
    signInWithGoogle: () => dispatch(googleSignInStart()),
    signInWithEmail: (email, password) => dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapsDispatchToProps)(SignIn);