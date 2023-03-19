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
} from "react-native";
import Wes from "../Component/Wind";
import Wa from "../Component/Water";


export default function Profile() {
  return (
    <SafeAreaView>
    <View >
        <Image
          source={require("../src/accets/bg.jpg")}
          style={{ width: 400, height: 200,flex: 0}}
          //resizeMode="contain"
        />
        {/* <Image
          source={require("../src/accets/spay.png")}
          style={{ width: 250, height: 70 }}
          resizeMode="contain"
        /> */}
      </View>
    <Wes/>
    <Wa/>
  </SafeAreaView>
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
	  }
});
