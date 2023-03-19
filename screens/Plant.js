import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,ScrollView,ImageBackground } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "../screens/AllPlant/Navigation";
import ProduceCorn from "./Produce/ProduceCorn";
import ProduceRice from "./Produce/ProduceRice";
import ProduceManioc from "./Produce/ProduceManioc";
import ProduceRoselle from "./Produce/ProduceRoselle";
import { TouchableOpacity } from "react-native-gesture-handler";
const image = { uri: 'https://i.pinimg.com/564x/d1/31/97/d1319701c1d2a64a5e0d9a74f67150e4.jpg' };

const Plant = (props) => {
  return (
    <SafeAreaView >
		<ImageBackground source={image} resizeMode="cover" style={styles.image}>
	<ScrollView>
    <View style={{alignItems: "center"}}>
     <Image
          source={require("../src/accets/bg2.png")}
          style={{ width: 400, height: 200,flex: 0}}
          //resizeMode="contain"
        />
    </View>	
	<TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("DetailCorn")}
		>
		<ProduceCorn/>
	</TouchableOpacity>
	<TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("DetailRice")}
		>
		
		<ProduceRice/>
	</TouchableOpacity>
	<TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("DetailManioc")}
		>
		
		<ProduceManioc/>
	</TouchableOpacity>
	<TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("DetailRoselle")}
		>
		
		<ProduceRoselle/>
	</TouchableOpacity>
	</ScrollView>
	
	</ImageBackground>
	
  </SafeAreaView>
 );
}
export default Plant;
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
  container2: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#5F9EA0",
  },

});