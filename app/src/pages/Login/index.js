import React, { useState } from 'react';
import * as UI from './style';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Logo from '~/assets/logo.png'
import ProfileImg from '~/assets/profile.jpg'
import Button from '~/components/Button/index';
import BottomPassword from '~/components/BottomPassword/index';

const Login = () => {
  const [ passwordVisible, setPasswordVisible ] = useState(false) 

  return (
    <UI.Container>
      <UI.Header>
        <UI.IconButton>
          <Icon name="qrcode" size={30}/>
        </UI.IconButton>
        <UI.IconLogo source={Logo}/>
      
        <UI.IconButton>
          <Icon name="th-large" size={30}/>
        </UI.IconButton>
      </UI.Header>
      <UI.Content>
        <UI.ContainerProfileImg>
          <UI.ProfileImage source={ProfileImg} />
        </UI.ContainerProfileImg>
        <UI.ProfileName>Aylon Muramatsu</UI.ProfileName>
        <UI.ProfileAccountContainer>
          <UI.ProfileAgency>Ag. 0000-1  ●</UI.ProfileAgency>
          <UI.ProfileAccount>Cc. 00000-0</UI.ProfileAccount>
        </UI.ProfileAccountContainer>
        <Button title="ENTRAR" style={{ marginTop:40 }} onPress={
          () => {
            setPasswordVisible(true)
          }
        }/>
        <UI.ProfileOther>
          Outra conta
        </UI.ProfileOther>

      </UI.Content>
      <UI.Footer>
        <UI.BottomButton>
          <UI.BottomButtonIcon>
            <Icon name="envelope" size={20}/>
          </UI.BottomButtonIcon>

          <UI.BottomButtonText>
            Mensagens
          </UI.BottomButtonText>
        </UI.BottomButton>
        <UI.BottomButton>
          <UI.BottomButtonIcon>
            <Icon name="lock" size={20}/>
          </UI.BottomButtonIcon>
          <UI.BottomButtonText>
            Senhas
          </UI.BottomButtonText>
        </UI.BottomButton>
        <UI.BottomButton>
            <UI.BottomButtonIcon>
              <Icon2 name="fingerprint" size={20}/>
            </UI.BottomButtonIcon>
            <UI.BottomButtonText>
              Digital
            </UI.BottomButtonText>
          </UI.BottomButton>
        <UI.BottomButton>
          <UI.BottomButtonIcon>
            <Icon name="plus" size={20}/>
          </UI.BottomButtonIcon>
          <UI.BottomButtonText>
            Contas
          </UI.BottomButtonText>
        </UI.BottomButton>
      </UI.Footer>
      <BottomPassword visible={passwordVisible} />

    </UI.Container>
  )
}

export default Login;
