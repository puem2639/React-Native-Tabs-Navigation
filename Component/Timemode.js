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
  TextInput,
} from "react-native";

const Timemode = () => {
    const [number, onChangeNumber] = React.useState(null);
    const [number2, onChangeNumber2] = React.useState(null);
    const [number3, onChangeNumber3] = React.useState(null);
    const handleClick = async () => {
      const configurationObject = {
        url: "https://0715-2001-44c8-42c9-798e-4c78-b1de-7e3c-6887.ap.ngrok.io/setting/time1",
        method: "PUT",
        data: { number},
      };
      axios(configurationObject)
        .then((response) => {
          if (response.status === 200) {
            alert(` You have updated: ${JSON.stringify(response.data)}`);
            setIsLoading(false);
            onChangeNumber("");
          } else {
            throw new Error("An error has occurred");
          }
        })
        .catch((error) => {
          //Alert.alert("ตั้งค่าการฉีดพ่นสำเสร็จ");
          //alert("An error has occurred");
          setIsLoading(false);
        });
        const configurationObject1 = {
          url: "https://0715-2001-44c8-42c9-798e-4c78-b1de-7e3c-6887.ap.ngrok.io/setting/time2",
          method: "PUT",
          data: {number2 },
        };
        axios(configurationObject1)
          .then((response) => {
            if (response.status === 200) {
              alert(` You have updated: ${JSON.stringify(response.data)}`);
              setIsLoading(false);
              onChangeNumber2("");
            } else {
              throw new Error("An error has occurred");
            }
          })
          .catch((error) => {
            //Alert.alert("ตั้งค่าการฉีดพ่นสำเสร็จ");
            //alert("An error has occurred");
            setIsLoading(false);
          });
      // axios.put('https://f585-202-80-249-178.ap.ngrok.io/setting/time1', { number_:number,number_02:number2,number_03:number2 })
      //     .then(response => console.log(response.data));
      const configurationObject2 = {
        url: "https://0715-2001-44c8-42c9-798e-4c78-b1de-7e3c-6887.ap.ngrok.io/setting/time3",
        method: "PUT",
        data: {number3 },
      };
      axios(configurationObject2)
        .then((response) => {
          if (response.status === 200) {
            alert(` You have updated: ${JSON.stringify(response.data)}`);
            setIsLoading(false);
            onChangeNumber3("");
          } else {
            throw new Error("An error has occurred");
          }
        })
        .catch((error) => {
          //Alert.alert("ตั้งค่าการฉีดพ่นสำเสร็จ");
          //alert("An error has occurred");
          setIsLoading(false);
        });
        Alert.alert("ตั้งค่าการฉีดพ่นสำเสร็จ");
        }
  return (
    <View style={styles.CardContainer}>
      <View style={styles.items}>
        <Image
          source={require("../src/accets/timemode.png")}
          style={{
            width: 100,
            height: 100,
            marginTop: 45,
          }}
          resizeMode="contain"
        />
        <View style={[styles.box, styles.boxContent]}>
          <View>
            <View style={styles.container_1}>
                <Text>Time 1 : </Text>
                <TextInput
                
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Time 1"
                    keyboardType="numeric"
                    
                />
                </View>
                <View style={styles.container_1}>
                <Text>Time 2 : </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber2}
                    value={number2}
                    placeholder="Time 2"
                    keyboardType="numeric"
                />
                </View>
                <View style={styles.container_1}>
                <Text>Relay   : </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber3}
                    value={number3}
                    placeholder="Relay   "
                    keyboardType="numeric"
                />
                </View>
            <View style={styles.items_1}>
                <Button title="Confirm" color="green" onPress={handleClick}/>
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
    backgroundColor: "#5F9EA0",
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
  input: {
    height: 35,
    margin: -2,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    // fontSize:12,
    // width:280,
    // paddingHorizontal:12
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
    backgroundColor: "white",
    borderRadius: radius,
    paddingRight: 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
    height: 170,
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
    marginHorizontal:20,
    borderRadius:12,
  },
  items_1: {
    width: 150,
    marginBottom: 10,
    paddingLeft: 25,
    margin: 5,
  },
});

export default Timemode;