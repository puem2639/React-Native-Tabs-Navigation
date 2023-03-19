import React from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  Alert,
} from "react-native";

const Louis = () => {


  const onPressButton1 = () => {
    axios
      .post(
        "https://57dd-2001-44c8-43a7-22dc-6d57-f84e-b590-57d.ap.ngrok.io/setting/level1",

        {
          pumplevel: "level1",
          level: "1",
        }
      )
      .then(function (response) {
        //console.log(JSON.stringify(response.data))
        // handle success
        //console.log(response);
        //alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        //console.log(error);
        // handle error
        alert(error.message);
      });
    Alert.alert("คุณเลือกความแรงระดับ 1");
  };
  return (
    <View style={styles.CardContainer}>
      <View style={styles.items}>
        <Image
          source={require("../src/accets/Nozzle.png")}
          style={{
            width: 100,
            height: 100,
            marginTop: 15,
          }}
          resizeMode="contain"
        />
        <View style={[styles.box, styles.boxContent]}>
          <View>
            <View style={styles.container_1}>
              <View style={styles.items_1}>
              <Text style={styles.text1}>
                ระดับ 1
              </Text>
                <Button title="1" color="green" onPress={onPressButton1} />
              </View>
              <View style={styles.items_1}>
              <Text style={styles.text1}>
                ระดับ 2
              </Text>
                <Button
                  title="2"
                  color="#ecc850"
                  onPress={() => {
                    axios
                      .post(
                        "https://57dd-2001-44c8-43a7-22dc-6d57-f84e-b590-57d.ap.ngrok.io/setting/level2",

                        {
                          pumplevel: "level2",
                          level: "2",
                        }
                      )
                      .then(function (response) {
                        //console.log(JSON.stringify(response.data))
                        // handle success
                        //console.log(response);
                        //alert(JSON.stringify(response.data));
                      })
                      .catch(function (error) {
                        //console.log(error);
                        // handle error
                        alert(error.message);
                      });
                    Alert.alert("คุณเลือกความแรงระดับ 2");
                  }}
                />
              </View>
              <View style={styles.items_1}>
              <Text style={styles.text1}>
                ระดับ 3
              </Text>
                <Button
                  title="3"
                  color="#cb343d"
                  onPress={() => {
                    axios
                      .post(
                        "https://57dd-2001-44c8-43a7-22dc-6d57-f84e-b590-57d.ap.ngrok.io/setting/level3",

                        {
                          pumplevel: "level3",
                          level: "3",
                        }
                      )
                      .then(function (response) {
                        //console.log(JSON.stringify(response.data))
                        // handle success
                        //console.log(response);
                        //alert(JSON.stringify(response.data));
                      })
                      .catch(function (error) {
                        //console.log(error);
                        // handle error
                        alert(error.message);
                      });
                    Alert.alert("คุณเลือกความแรงระดับ 3");
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const deviceWidth = Math.round(Dimensions.get("window").width);
const radius = 20;
const styles = StyleSheet.create({
  CardContainer: {
    width: deviceWidth - 25,
    backgroundColor: "#ecd2ad69",
    height: 110,
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
    height: 130,
    width: deviceWidth - 25,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "800",
  },
  categoryStyle: {
    fontWeight: "200",
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  //styles ของ อีกอัน
  container: {
    flex: 1,
    marginTop: 50,
    padding: 10,
  },
  text1: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: "700",
  },
  items: {
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
    backgroundColor: "#ffffff75",
    borderRadius: radius,
    paddingRight: 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  //sty ของปุ่ม
  container_1: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  items_1: {
    width: 65,
    marginBottom: 10,
    paddingLeft: 10,
    marginLeft: 5,
  },
});

export default Louis;