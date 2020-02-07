import React from 'react';
import * as UI from './style'
const Button = ({ children, title, onPress, primary, style = {}}) => {
    return (
        <UI.Button onPress={onPress}
            style={{...style} }
        >
            <UI.ButtonText>
                {children}
                {title}
            </UI.ButtonText>
        </UI.Button>
    )
}

export default Button;