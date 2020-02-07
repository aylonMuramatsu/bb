import styled from 'styled-components/native';

export const Container = styled.View`
    width:100%;
    height: 150px;
    background-color:#fff;
    position:absolute;
    bottom:0;
    z-index:5;
`

export const Button = styled.TouchableOpacity`
    width:100%;
    height:60px;
    background-color: #ffee02;
    justify-content:center;
    align-items:center;
`

export const ButtonTitle = styled.Text`
    text-transform: uppercase;
    color: #00549e;
    font-weight:bold;
    font-size:18px;


`


export const InputContainer = styled.View`
    
    width:100%;
    justify-content:space-between;
    flex-direction:row;
`

export const LabelInput = styled.Text`
    padding:15px;
    font-size:16px;
    color: #9f9f9f;
`

export const Input = styled.TextInput`
    padding:0 15px;
    flex:1;
    height:45px;

`

export const InputIcon = styled.Text`
    padding:0 15px;
    top:-5px;
`

