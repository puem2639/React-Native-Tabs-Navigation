import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Mode1 from './Mode1';
import Mode2 from './Mode2';


const Stack = createStackNavigatorMode();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigatorMode = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Mode1" component={Mode1} />
      <Stack.Screen name="Mode2" component={Mode2} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigatorMode;