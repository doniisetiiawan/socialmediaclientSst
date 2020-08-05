import React from 'react';
import { Platform, View } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import TextInput from '../TextInput/textInput';
import Button from '../Button/button';

const CommentFormWrapper = styled(View)`
  width: 100%;
  background-color: #ccc;
  padding: 2%;
  display: flex;
  height: 90px;
  flex-direction: row;
  justify-content: space-between;
`;

function CommentForm() {
  const [comment, setComment] = React.useState('');

  return (
    <CommentFormWrapper>
      <TextInput
        width={75}
        marginBottom={0}
        onChangeText={setComment}
        placeholder="Your comment"
        value={comment}
      />
      <Button
        width={20}
        padding={10}
        title={(
          <Ionicons
            name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-send`}
            size={42}
            color="white"
          />
        )}
      />
    </CommentFormWrapper>
  );
}

export default CommentForm;
