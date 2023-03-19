import { View,text } from "react-native-web";
import React from "react";

const Header = (props) =>{
    return(
        <View style={{marginLeft:15}}>
        <Text style={{fontWeight:'bold', fontSize:22}}>
            {props.name}
        </Text>
        </View>
    )
}
export default Header