import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as UI from './style';
import { KeyboardAvoidingView } from 'react-native';


const BottomPassword = ({ visible }) => {

    return !visible ? false : (
        <UI.Container>
            <KeyboardAvoidingView style={{
                flex:1,
                bottom:240
            }}  behavior="padding">
            <UI.Container>
                    <UI.LabelInput>Senha de 8 digitos</UI.LabelInput>
                    <UI.InputContainer>
                        <UI.Input keyboardType="numeric" secureTextEntry autoFocus />
                        <UI.InputIcon>
                            <Icon name="lock" size={25} />
                        </UI.InputIcon>
                    </UI.InputContainer>
                    <UI.Button>
                        <UI.ButtonTitle>entrar</UI.ButtonTitle>
                    </UI.Button>
            </UI.Container>
                </KeyboardAvoidingView>

        </UI.Container>

    )
}


export default BottomPassword;