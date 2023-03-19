import React from "react";
import { View, Text, StyleSheet, Dimensions, Image,FlatList } from "react-native";

const ProduceRice = () => {
  return (
    <View style={styles.CardContainer}>
      <Image
        style={styles.imageStyle}
        source={require("../AllPlant/img/rice.jpg")}
      />
      <View style={styles.infoStyle}>
        <Text style={styles.titleStyle}>Rice</Text>
        <Text style={styles.titleStyle2}>ข้าว</Text>
      </View>
    </View>
  );
  
  

};
const deviceWidth = Math.round(Dimensions.get("window").width);
const radius = 20;
const styles = StyleSheet.create({
  CardContainer: {
    width: deviceWidth - 25,
    backgroundColor: "#c2994e9e",
    //opacity: 0.7,
    height: 150,
    borderRadius: radius,
    marginLeft: 12,
    marginTop: 10,

    shadowColor: "#ffffff00",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 95,
    width: deviceWidth - 25,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "800",
  },
  titleStyle2: {
    fontSize: 15,
    fontWeight: "500",
  },
  categoryStyle: {
    fontWeight: "200",
  },
  infoStyle:{
    marginHorizontal:10,
    marginVertical: 5 ,
  },
});

export default ProduceRice;
