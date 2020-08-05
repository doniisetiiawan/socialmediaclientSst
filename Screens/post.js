import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  FlatList,
} from 'react-native';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../constants';
import PostContent from '../Components/Post/postContent';
import PostCount from '../postCount';
import CommentForm from '../Components/Comment/commentForm';
import Comment from '../Components/Comment/comment';

const PostWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const PostBody = styled(ScrollView)`
  width: 100%;
  flex: 1;
`;

const PostText = styled(Text)`
  font-size: 20px;
  color: black;
`;

function Post({ route }) {
  const { userName } = route.params;
  const { loading, data } = useQuery(GET_POST, {
    variables: { userName },
  });

  return (
    <PostWrapper>
      <PostBody>
        {loading || !data.post ? (
          <PostText>Loading...</PostText>
        ) : (
          <>
            <PostContent item={data.post} />
            <PostCount
              stars={data.post.stars}
              marginBottom={2}
            />
            <FlatList
              data={data.post.comments}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => item && (
              <Comment
                userName={item.userName}
                text={item.text}
              />
              )}
            />
            <CommentForm userName={userName} />
          </>
        )}
      </PostBody>
    </PostWrapper>
  );
}

export default Post;
