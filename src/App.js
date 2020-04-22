import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
      this.setState({currentUser:user});
      console.log(user);
    })
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route  exact path='/' component= {HomePage}/>
        <Route  exact path='/shop' component= {Shop}/>
        <Route  exact path='/signin' component= {SignInSignUpPage}/>
      </Switch>
      </div>
    );
  }
  
}

export default App;
