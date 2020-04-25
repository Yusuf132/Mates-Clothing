import React from 'react';
import './checkout.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {selectCartTotal} from '../../redux/cart/cart.selectors.js';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'


const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>PRODUCT</span>
            </div>
            <div className='header-block'>
                <span>DESCRIPTION</span>
            </div>
            <div className='header-block'>
                <span>QANTITY</span>
            </div>
            <div className='header-block'>
                <span>PRICE</span>
            </div>
            <div className='header-block'>
                <span>REMOVE</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
            ))
        }
        <div className='total'>
            <span>
                TOTAL: ${total}
            </span>
        </div>

    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);