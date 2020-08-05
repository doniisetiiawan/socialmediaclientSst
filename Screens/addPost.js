import React from 'react';
import styled from 'styled-components';
import {
  Dimensions, Image, Text, TouchableOpacity, View,
} from 'react-native';
import Button from '../Components/Button/button';

const AddPostWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 60px;
`;

const AddPostText = styled(Text)`
  font-size: 20px;
  color: black;
`;

const UploadImage = styled(TouchableOpacity)`
  width: ${Dimensions.get('window').width * 0.98};
  height: ${Dimensions.get('window').width * 0.98};
  margin: ${Dimensions.get('window').width * 0.01}px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function AddPost({ navigation }) {
  const [imageUrl, setImageUrl] = React.useState(false);

  const getPermissionAsync = async () => {
    alert(
      "Sorry, you need camera roll permissions! Go to 'Settings > Expo' to enable these.",
    );
  };

  return (
    <AddPostWrapper>
      <UploadImage onPress={() => getPermissionAsync()}>
        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <AddPostText>Upload image</AddPostText>
        )}
      </UploadImage>

      {imageUrl && <Button title="Submit" />}

      <Button
        onPress={() => navigation.navigate('Main')}
        title="Cancel"
      />
    </AddPostWrapper>
  );
}

export default AddPost;
