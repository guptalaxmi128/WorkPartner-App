import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Button,
    FlatList,
  } from "react-native";
  import Header from './Header';
const MoreSnaglist = () => {
    return (
        <View style={styles.container}>
          <Header title={"Snaglist"} icon={require("../assets/back.png")} />
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View
            style={styles.viewStyle}>
             <Image
              source={require("../assets/moresnaglist/snaglist.png")}
              style={{height:30,width:30}}
            />
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Text style={styles.textStyle}>Snaglist</Text>
            <Text style={{width:40,height:40,borderRadius:30,backgroundColor:'#dfe5e4',textAlign:'center',color:'#284F49',fontSize:24,paddingTop:3}}>3</Text>
            </View>
               
                <Text style={{fontSize:9,fontFamily:'Poppins',width:150,marginTop:5}}>Last Update on : 12 March 2023 </Text>
            </View>
            <View
            style={[styles.viewStyle,{marginLeft:10}]}>
             <Image
              source={require("../assets/moresnaglist/status.png")}
              style={{width:30,height:30}}
            />
                 <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Text style={styles.textStyle}>Daily Status</Text>
            <Text style={{width:40,height:40,borderRadius:30,backgroundColor:'#dfe5e4',textAlign:'center',color:'#284F49',fontSize:24,paddingTop:3}}>3</Text>
            </View>
            <Text style={{fontSize:9,fontFamily:'Poppins',width:150,marginTop:5}}>Last Update on : 12 March 2023 </Text>
            </View>
          </View>
         
          
         
        </View>
    );
}


export default MoreSnaglist;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    viewStyle:{
        width: 175,
        height: 130,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "#ebecf0",
        padding:15
    },
    textStyle: {
        fontSize: 16,
        color: "#284F49",
        fontFamily: "Poppins",
        marginTop:20
      },
});