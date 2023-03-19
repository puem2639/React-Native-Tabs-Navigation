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
  ScrollView,
  ImageBackground,
  
} from "react-native";
import Mode1 from "../Component/Mode1";
import Mode2 from "../Component/Mode2";
import Timemode from "../Component/Timemode";
import Wes from "../Component/Wind";
import Wa from "../Component/Water";

const image = { uri: 'https://i.pinimg.com/564x/d1/31/97/d1319701c1d2a64a5e0d9a74f67150e4.jpg' };

export default function Home() {
  return (
    //
    <SafeAreaView >
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
      <View >
      <Text style={styles.btnText}>Status</Text>
      </View>
      <Wes/>
      <Wa/>
      <View >
      <Text style={styles.btnText}>Setting</Text>
      </View>
      <Mode1/>
      <Text style={styles.btnText2}></Text>
      <Text style={styles.btnText2}></Text>
      <Text style={styles.btnText2}></Text>
      {/* <Mode2/> */}
      
      </ImageBackground>
    </SafeAreaView>
  );
}
const deviceWidth = Math.round(Dimensions.get("window").width);
const radius = 20;
const styles = StyleSheet.create({
  CardContainer: {
    width: deviceWidth - 25,
    backgroundColor: "#a29bfe",
    height: 200,
    borderRadius: radius,
    marginLeft: 12,
    marginTop: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  container2: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#77be96",
  },
  header: {
    //backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    marginTop: 40,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 10,
  },
  items: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 100,
    paddingLeft: 100,
    paddingTop: 100,
  },
  container: {
    flex: 1,
    marginTop: 50,
    padding: 10,
  },
  items1: {
    flexDirection: "row",
    marginBottom: 15,
    paddingLeft: 10,
  },
  box: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  boxImg: {
    width: 80,
    height: 80,
    backgroundColor: "black",
    marginRight: 10,
  },
  boxContent: {
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  image: {
    flex: 0,
    justifyContent: 'center',
  },
  btnText: {
    //color: 'white',
    fontSize: 25,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#ffffff30',
  },
  btnText2: {
    //color: 'white',
    fontSize: 25,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

