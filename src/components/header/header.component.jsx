import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo-images/original.svg';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to= '/shop' className='option'>SHOP</Link>
            <Link to= '/contact' className='option'>CONTACT</Link>
            {
                currentUser?
                (<div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>):
                (<Link to= '/signin' className='option'>SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {
            hidden? null: <CartDropdown/>
        }
        

    </div>
);
const mapsToStateProps =({user:{currentUser},cart: {hidden}}) => ({
    currentUser,
    hidden
});
export default connect(mapsToStateProps)(Header);