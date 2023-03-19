import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,ScrollView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "../screens/AllPlant/Navigation";
import ProduceCorn from "./Produce/ProduceCorn";
import ProduceRice from "./Produce/ProduceRice";
import ProduceManioc from "./Produce/ProduceManioc";
import ProduceRoselle from "./Produce/ProduceRoselle";

// export default function Plant() {
//   return (
//     <SafeAreaView >
// 		<ScrollView>
//      <View>
//      <Image
//           source={require("../src/accets/bg.jpg")}
//           style={{ width: 400, height: 200,flex: 0}}
//           //resizeMode="contain"
//         />
//     </View> 
	
// 	<ProduceCorn/>
// 	<ProduceRice/>
// 	<ProduceManioc/>
// 	<ProduceRoselle/>
// 	</ScrollView>
//   </SafeAreaView>
//  );
// }
export default function NavigationPlant() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header:{
		backgroundColor:'green',
		flexDirection:'row',
		alignItems:'center',
		paddingRight: 10,
		paddingLeft: 10,
		borderBottomWidth: 2,
		borderBottomColor: '#fff',
		marginTop: 40,
			marginLeft: 0,
			marginRight:0
	  },
	container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'Whie',
    //marginHorizontal: 20,
  },
});