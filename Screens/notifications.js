import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const NotificationsBody = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const NotificationsText = styled(Text)`
  font-size: 20px;
  color: black;
`;

function Notifications() {
  return (
    <NotificationsBody>
      <NotificationsText>Loading...</NotificationsText>
    </NotificationsBody>
  );
}

export default Notifications;
