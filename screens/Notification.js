import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Switch,
  Dimensions,
  ImageBackground,
} from "react-native";
import Wes from "../Component/Wind";

const image = { uri: 'https://i.pinimg.com/564x/d1/31/97/d1319701c1d2a64a5e0d9a74f67150e4.jpg' };
export default function AddToCard() {
  return (
    <SafeAreaView >
      <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={{alignItems: "center"}}>
    <Image
          source={require("../src/accets/bg2.png")}
          style={{ width: 400, height: 200,flex: 0}}
          //resizeMode="contain"
        />
        {/* <Image
          source={require("../src/accets/spay.png")}
          style={{ width: 250, height: 70 }}
          resizeMode="contain"
        /> */}
      </View>
      </ImageBackground>
  </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
		//backgroundColor:'green',
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
      flex: 0,
    },
    image: {
      flex: 0,
      justifyContent: 'center',
    },
    
});
