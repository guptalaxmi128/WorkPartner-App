import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
const SnaglistHeader = ({title,icon}) => {
const navigation=useNavigation();
    return (
      <View style={styles.header}>
        
                <TouchableOpacity style={styles.backBtn} onPress={()=>navigation.goBack()}>
                 <Image  source={icon} style={styles.back}/>
                </TouchableOpacity>
          
         <Text style={[styles.title,{marginLeft: 20 }]}>{title}</Text>
         <TouchableOpacity onPress={()=>navigation.navigate('BtnSnaglist')}>
         <View style={styles.btnContainer}><Text style={styles.btnSnaglist} >New Snaglist</Text></View>
         </TouchableOpacity>
      </View>
    );
}



export default SnaglistHeader;

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
    },
    btnContainer:{
        width:110,
        height:30,
        borderRadius:10,
        backgroundColor:'#284F49',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:100,
        marginTop:10,
    },
    btnSnaglist:{
        fontSize:16,
        fontWeight:'600',
        color:'#fff',
    }

})