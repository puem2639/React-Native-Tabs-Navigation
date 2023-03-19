import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Corn from '../AllPlant/Corn'
import DetailCorn from '../AllPlant/DetailCorn'
import DetailManioc from '../AllPlant/DetailManioc'
import DetailRice from '../AllPlant/DetailRice'
import DetailRoselle from '../AllPlant/DetailRoselle'
import Plant from '../Plant'


const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      {/* <Stack.Screen name="ProduceCorn" component={ProduceCorn} /> */}
      {/* <Stack.Screen name="Corn" component={Corn} /> */}
      <Stack.Screen name="Plant" component={Plant} />
      <Stack.Screen name="DetailCorn" component={DetailCorn} />
      <Stack.Screen name="DetailManioc" component={DetailManioc} />
      <Stack.Screen name="DetailRice" component={DetailRice} />
      <Stack.Screen name="DetailRoselle" component={DetailRoselle} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;