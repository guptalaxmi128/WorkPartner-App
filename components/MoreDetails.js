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
import { useNavigation } from '@react-navigation/native';
const MoreDetails = () => {
  const navigation=useNavigation();
    return (
        <View style={styles.container}>
               <Header title={"More Details"} icon={require("../assets/back.png")} />
               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <TouchableOpacity  onPress={ () => navigation.navigate('MoreDetailsSnaglist')}>
          <View
            style={{
              width: 170,
              height: 120,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "gray",
              marginTop: 10,
              borderStyle: "dashed",
              backgroundColor: "#dfe5e4",
            }}>
                <Text style={styles.textStyle}>Snaglist</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={ () => navigation.navigate('UpdateStatus')}>
            <View
            style={{
              width: 170,
              height: 120,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "gray",
              marginTop: 10,
              borderStyle: "dashed",
              backgroundColor: "#dfe5e4",
              marginLeft:10
            }}>
                <Text style={styles.textStyle}>Update Status</Text>
            </View>
            </TouchableOpacity>
            </View>
        </View>
    );
}



export default MoreDetails;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    textStyle:{
      textAlign:'center',fontSize:16,color:"#8e8e8e",marginTop:40
    }
});