import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/images/logo-images/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({hidden}) => (
    <div className='cart-icon'
        onClick={
            hidden
        }>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchProps = dispatch =>({
    hidden:()=> dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchProps)(CartIcon);