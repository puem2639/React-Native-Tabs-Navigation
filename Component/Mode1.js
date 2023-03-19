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
import Les from "../Component/Pump";
import Les2 from "../Component/WaterLevel";

export default function Mode1() {
    const onPressButton1 = async ()  => {
      Alert.alert("You clicked Button 1");
      try {
        const response = await axios.get(
          'https://f57a-2001-fb1-108-9ce5-bd7b-4098-2edc-1a7c.ap.ngrok.io/',
        );
        alert(JSON.stringify(response.data));
      } catch (error) {
        // handle error
        alert(error.message);
      }
    };
    return (
      //
      <SafeAreaView>
        <Les2 />
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
    header: {
      backgroundColor: "green",
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
  });
  