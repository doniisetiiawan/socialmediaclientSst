import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styled from 'styled-components';

const PostsWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const PostsList = styled(FlatList)`
  width: 100%;
`;

const PostsText = styled(Text)`
  font-size: 20px;
  color: black;
`;

function Posts() {
  return (
    <PostsWrapper>
      <PostsText>Loading...</PostsText>
    </PostsWrapper>
  );
}

export default Posts;
