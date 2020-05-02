import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo-images/original.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.styles';

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
                (<OptionDiv  onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>):
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