import React, {useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {checkUserSession} from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors'
import CheckoutPage from './pages/checkout/checkout.component';

const App = ({checkUserSession, currentUser}) => {
  
  useEffect(()=> {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
    <Header />
    <Switch>
      <Route  exact path='/' component= {HomePage}/>
      <Route   path='/shop' component= {Shop}/>
      <Route exact path ='/checkout' component = {CheckoutPage}/>
      <Route  exact path='/signin' render={()=> currentUser?(<Redirect to='/'/>):(<SignInSignUpPage/>)}/>
    </Switch>
    </div>
  );
  
}
const mapsToStateProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchProps = dispatch => (
  {
    checkUserSession: user => dispatch(checkUserSession(user))
  }
)

export default connect(mapsToStateProps, mapDispatchProps)(App);
