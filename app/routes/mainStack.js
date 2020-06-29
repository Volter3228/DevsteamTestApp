import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ImagesList from '../screens/ImagesList';
import ImageFullScreen from '../screens/ImageFullScreen';

const Stack = createStackNavigator();
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ImagesList} />
        <Stack.Screen name="Full Screen Photo" component={ImageFullScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
