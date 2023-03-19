import React ,{useState}from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  Alert,
  SafeAreaView,
  RefreshControl,
  ScrollView
} from "react-native";
import {
  getDatabase,
  ref,
  set,
  update,
  onValue,
  remove,
  child,
  get,
  database,
} from "firebase/database";
import { db } from "./config";
const wait =(timeout) => {
  return new Promise (resolve => setTimeout(resolve,timeout));
}

const Wind = () => {
  const dbRef = ref(getDatabase());
  const database = getDatabase();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [test1, setTest1] = useState("");

  get(child(dbRef, `WindSpeed/${username}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        var test = snapshot.val();
        console.log(test["windSpeed"]);
        setTest1(test["windSpeed"]);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
    
    function readData() {
      const starCountRef = ref(db, "users/" + username);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setEmail(data.email);
      });
    }
    const [refreshing,setRefreshing] =useState(false);
const onRefresh = () => {
  setRefreshing(true);
  wait(2000).then(()=>
  setRefreshing(false));
}
  var Windspeed = 10.56;
  return (
    <SafeAreaView>
    <ScrollView 
    refreshControl={
      <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
        />
    }
    >
      <View style={styles.CardContainer}>
      <View style={styles.items}>
        <Image
          source={require("../src/accets/wind.png")}
          style={{ 
            width: 100, 
            height: 100,
            marginTop: 15, }}
          resizeMode="contain"
        />
        <View style={[styles.box, styles.boxContent]}>
          <View>
            <View style={styles.container_1}>
            <Text style = {[styles.titleStyle]}>{test1}</Text>
            <Text style = {[styles.titleStyle]}> km/h</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>

    </SafeAreaView>
    
  
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
    fontSize: 30,
    fontWeight: "700",
    textAlign: 'center',
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
    backgroundColor: "#ffffff75",
    borderRadius: radius,
    paddingRight: 20,
    marginRight: 10,
    marginLeft:10,
    marginTop: 20,
    marginBottom:20,
  },
  text:{
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
    marginLeft:5
  },
});

export default Wind;