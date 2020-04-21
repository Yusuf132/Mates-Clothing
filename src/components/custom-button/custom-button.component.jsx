import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({type,children,isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn? 'google-sign-in': ''} custom-button`} 
        type={type} {...otherProps}>
    {children}
    </button>
)

export default CustomButton;