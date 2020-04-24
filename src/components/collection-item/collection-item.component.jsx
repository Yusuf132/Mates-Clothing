import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions'
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';


const CollectionItem =({item, addItem}) => {
    const {imageUrl, name, price} = item;
    return(
        <div className='collection-item'>
            <div className='image'
            style ={
                {
                    backgroundImage: `url(${imageUrl})`
                }
            } 
            />
            <CustomButton onClick = {()=> addItem(item)}
            inverted className='custom-button'> Add to Cart</CustomButton>
            <div className='collection-footer'>
                <div className='name'>
                {name}
                </div>
                <div className='price'>
                {price}
                </div>
            </div>
        </div>
    )

}
const mapDispatchProps = disptach => ({
    addItem:(item) => disptach(addItem(item))
})
export default connect(null, mapDispatchProps)(CollectionItem);