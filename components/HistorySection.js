import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
  } from "react-native";
import Header from './Header';


const HistorySection = () => {
   
    return (
        <View style={styles.container}>
         <Header title={"History"} icon={require("../assets/back.png")} />
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <View
            style={styles.viewStyle}
          >
            <Text style={{fontFamily:'Poppins',fontSize:16,textAlign:'center',color:'#8e8e8e',marginTop:40}}>Image</Text>
          </View>
          <View
            style={[styles.viewStyle,{marginLeft:10}]}
          >
             <Text style={{fontFamily:'Poppins',fontSize:16,textAlign:'center',color:'#8e8e8e',marginTop:40}}>Video</Text>
          </View>
         </View>
         <TouchableOpacity
          style={{
            // marginLeft: 20,
            marginTop: 470,
            // marginBottom: 30,
            backgroundColor: "#284F49",
            height: 50,
            width: "90%",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Update
            </Text>
          </View>
        </TouchableOpacity>

        </View>
    );
}



export default HistorySection;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    viewStyle:{
        width: 175,
        height: 120,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "gray",
        marginTop: 10,
        backgroundColor: "#dfe5e4",
    }
});