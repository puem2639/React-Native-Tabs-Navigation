import React from "react";
import { View, Text, StyleSheet, Dimensions, Image,FlatList,Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProduceCorn = () => {
  return (
    <View style={styles.CardContainer}>
      <Image
        style={styles.imageStyle}
        source={require("../AllPlant/img/corn.jpg")}
      />
      <View style={styles.infoStyle}>
        <Text style={styles.titleStyle}>Corn</Text>
        <Text style={styles.titleStyle2}>ข้าวโพด</Text>
      </View>
    </View>
  );
}
export default ProduceCorn;
const deviceWidth = Math.round(Dimensions.get("window").width);
const radius = 20;
const styles = StyleSheet.create({
  CardContainer: {
    width: deviceWidth - 25,
    backgroundColor: "#e8cd7d9e",
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
