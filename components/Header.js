import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
const Header = ({title,icon}) => {
const navigation=useNavigation();
    return (
      <View style={styles.header}>
        
                <TouchableOpacity style={styles.backBtn} onPress={()=>navigation.goBack()}>
                 <Image  source={icon} style={styles.back}/>
                </TouchableOpacity>
          
         <Text style={[styles.title,{marginLeft: 20 }]}>{title}</Text>
      </View>
    );
}



export default Header;

const styles=StyleSheet.create({
    header:{
        height:70,
        width:'100%',
        flexDirection:'row',
        backgroundColor:'#fff',
        elevation:0.1,
        alignItems:'center',
        paddingLeft:20,
        
        // marginTop:10,
        paddingTop:15,
    },back:{
        width:20,
        height:20,
        marginTop:2,
    },
    title:{
        fontSize:18,
        fontWeight:'600',
    }
})