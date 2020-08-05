import React from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import styled from 'styled-components';

const AuthLoadingWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const AuthLoadingText = styled(Text)`
  font-size: 20px;
  color: black;
`;

function AuthLoading({ navigation }) {
  React.useEffect(() => {
    AsyncStorage.getItem('token').then((value) => {
      navigation.navigate(value ? 'Main' : 'Login');
      // navigation.navigate(value ? 'Main' : 'Main');
    });
  }, [navigation]);

  return (
    <AuthLoadingWrapper>
      <AuthLoadingText>Loading...</AuthLoadingText>
    </AuthLoadingWrapper>
  );
}

export default AuthLoading;
