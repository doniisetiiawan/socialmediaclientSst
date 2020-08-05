import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import PostContent from './postContent';
import PostCount from '../../postCount';

const PostItemWrapper = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #ccc;
  margin-bottom: 2%;
`;

function PostItem({ item, navigation }) {
  return (
    <PostItemWrapper
      onPress={() => navigation.navigate('Post', {
        userName: item.userName,
      })}
    >
      <PostContent item={item} />
      <PostCount
        stars={item.totalStars}
        comments={item.totalComments}
      />
    </PostItemWrapper>
  );
}

PostItem.defaultProps = {
  navigation: false,
};

export default PostItem;
