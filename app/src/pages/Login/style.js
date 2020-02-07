import styled from 'styled-components/native';

export const Container =  styled.View`
    ${'' /* flex:1; */}
    height:100%;
    background-color:#00549d;
    position: relative;
    z-index:0;
`;

export const Header = styled.View`
    
    width:100%;
    height:80px;
    padding:20px 15px;
    flex-direction:row;
    position: relative;
    justify-content: space-between;
    
`;

export const IconButton = styled.Text`

    justify-content:center;
    align-items:center;
    color:white;
`;

export const IconLogo = styled.Image`
    background-color:#ffee02;
    width:38px;
    height:38px;
`;

export const Content = styled.View`
    justify-content:center;
    align-items:center;
    flex:1;
    position: relative;
`;

export const ProfileImage = styled.Image`
    width: 127px;
    height:126px;
`;

export const ContainerProfileImg = styled.View`
    width: 130px;
    height:130px;
    border-width:2px;
    border-color: #ffee02;
    background-color:#ffee02;
    
`

export const ProfileName = styled.Text`
    padding-top:10px;
    padding-bottom:10px;
    font-size:22px;
    color:#fff;
`

export const ProfileAccountContainer = styled.View`
    justify-content:center;
    width:200px;
    flex-direction:row;
`;

export const ProfileAgency = styled.Text`
    color:#fff;
    padding:0 8px;
`

export const ProfileAccount = styled.Text`
    color:#fff;
    
`
export const ProfileOther = styled.Text`
    color: #fff;
    font-size:18px;
    padding:10px;
`

export const Footer = styled.View`
    width:100%;
    min-height:80px;
    height:80px;
    justify-content:space-between;
    flex-direction:row;
    background-color:#004882;
`

export const BottomButton = styled.TouchableOpacity`
    background-color: #004f86;
    justify-content:center;
    align-items:center;
    height:80px;
    margin:0 2px 0 0;
    width:auto;
    flex:1;
    position: relative;
    

`
export const BottomButtonIcon = styled.Text`
    color:#ffee02;
`
export const BottomButtonText = styled.Text`
    color:#fff;
`;