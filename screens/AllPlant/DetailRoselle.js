import React from "react";
import { StyleSheet, Image, Text, View,Alert } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";

const DetailRoselle = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
          <Feather name="chevron-left" color="#FFF" size={25} />
        </TouchableOpacity>
      </View>
      <Image source={require("../AllPlant/img/roselle2.png")} style={styles.img} />
      <View style={styles.cont3}>
        <Text style={styles.title}>Roselle (กระเจี๊ยบแดง)</Text>
        <Text style={styles.subtitle}>ข้อมูล : กระเจี๊ยบเป็นพืชไวแสงที่สามารถปลูกได้ทั่วไป ชอบอากาศร้อนหรือค่อนข้างร้อน ทนต่อความแห้งแล้ง และไม่ชอบน้ำขัง เป็นพืชเศรษฐกิจชนิดหนึ่งที่เกษตรกรนิยมนำมาปลูกในนาข้าวภายหลังการเก็บเกี่ยวข้าว</Text>
        <Text style={styles.text}>
        ข้อมูลความสูง : 1 - 2 เมตร
        </Text>
        <Text style={styles.text}>
        ความสูงที่แนะนำ : 1.8 เมตร
        </Text>
        <Text style={styles.text}>
        ความแรงที่แนะนำ : ความแรงระดับ 1
        </Text>
        <View style={styles.cont1}>
        <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              axios
                .post(
                  "https://57dd-2001-44c8-43a7-22dc-6d57-f84e-b590-57d.ap.ngrok.io/setting/levelroselle",

                  {
                    pumplevel: "levelroselle",
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
              Alert.alert("คุณเลือกความแรงการฉีดพ่น กระเจี๊ยบแดง");
            }}
          >
            <Text style={styles.btnText}>SetLevel</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.navigate("Plant")}
          >
            <Text style={styles.btnText}>Back</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default DetailRoselle;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecd0ab",
  },
  title: {
    fontSize: 25,
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    color: "#474747",
    //textAlign:'left',
    marginTop: 5,
  },
  text: {
    fontSize: 17,
    paddingRight: 50,
    lineHeight: 25,
    //marginTop: 10,
  },
  btn: {
    backgroundColor: "#E2443B",
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 30,
    
  },
  btnText: {
    fontSize: 20,
    color: "#FFF",
  },
  cont1: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
    justifyContent: "center",
  },
  c3: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: "#529CC0",
  },
  c2: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: "#529C47",
    marginHorizontal:10
  },
  c1: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: "#E2443B",
  },
  selected: {
    borderColor: "#E2443B",
    height: 30,
    width: 30,
    borderRadius: 24,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  cont2: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  img: {
    height: "45%",
    width: "50%",
  },
  cont3: {
    flex: 1,
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 40,
    paddingHorizontal: 20,
  },
});
