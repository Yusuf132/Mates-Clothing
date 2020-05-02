import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo-images/original.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer >
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer >
            <OptionLink to= '/shop' >SHOP</OptionLink>
            <OptionLink to= '/contact' >CONTACT</OptionLink>
            {
                currentUser?
                (<OptionLink as='div' onClick={()=> auth.signOut()}>SIGN OUT</OptionLink>):
                (<OptionLink to= '/signin' >SIGN IN</OptionLink>)
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden? null: <CartDropdown/>
        }
        

    </HeaderContainer>
);
const mapsToStateProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden
});
export default connect(mapsToStateProps)(Header);