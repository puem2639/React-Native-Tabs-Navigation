import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons'; 
import Status from './screens/Status';
import Home from './screens/Home';
import Plant from './screens/NavigationPlant';
import Notification from './screens/Notification';

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center'  
  },  
});  

const TabNavigator = createMaterialBottomTabNavigator(  
  {  
      Home: { screen: Home,  
        
          navigationOptions:{  
              tabBarLabel:'Home',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                  </View>),  
          }  
      },  
    //   Profile: { screen: Status,  
    //       navigationOptions:{  
    //           tabBarLabel:'Status',  
    //           tabBarIcon: ({ tintColor }) => (  
    //               <View>  
    //                   <Icon style={[{color: tintColor}]} size={25} name={'menu'}/>  
    //               </View>),  
    //           activeColor:   '#f0edf6',  
    //           inactiveColor: '#226557',  
    //           barStyle: { backgroundColor: 'black' },  
    //       }  
    //   },  
      Image: { screen: Plant,  
          navigationOptions:{  
              tabBarLabel:'Plant',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'menu'}/>  
                  </View>),  
              activeColor:   '#f0edf6',  
              inactiveColor: '#226557',  
              barStyle: { backgroundColor: 'black' },  
          }  
      },  
      Cart: {  
          screen: Notification,  
          navigationOptions:{  
              tabBarLabel:'Notification',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'notifications'}/>  
                  </View>),  
          }  
      },  
  },  
  {  
    initialRouteName: "Home",  
    activeColor:   '#f0edf6',  
    inactiveColor: '#226557',  
    barStyle: { backgroundColor: 'black' },  
  },  
);  

export default createAppContainer(TabNavigator)