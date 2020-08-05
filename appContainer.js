import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthLoading from './Screens/authLoading';
import Login from './Screens/login';
import Posts from './Screens/posts';
import Settings from './Screens/settings';
import AddPost from './Screens/addPost';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PostsStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Posts"
        component={Posts}
        options={{
          title: 'All Posts',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('AddPost')}
              title="Add Post"
            />
          ),
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
}

function NotificationsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notifications"
        component={Posts}
        options={{
          title: 'Notifications',
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Posts') {
            iconName = `${
              Platform.OS === 'ios' ? 'ios' : 'md'
            }-home`;
          } else if (route.name === 'Notifications') {
            iconName = `${
              Platform.OS === 'ios' ? 'ios' : 'md'
            }-notifications`;
          } else if (route.name === 'Settings') {
            iconName = `${
              Platform.OS === 'ios' ? 'ios' : 'md'
            }-settings`;
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'orange',
        inactiveTintColor: '#556',
      }}
    >
      <Tab.Screen name="Posts" component={PostsStack} />
      <Tab.Screen
        name="Notifications"
        component={NotificationsStack}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthLoading"
          component={AuthLoading}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddPost"
          component={AddPost}
          options={{
            title: 'Add Post',
            headerTitleStyle: { alignSelf: 'center' },
            headerLeft: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
