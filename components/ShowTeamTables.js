import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Modal,
  ScrollView,
} from "react-native";
import Header from "./Header";
import { useRoute } from '@react-navigation/native';
import { setTeamArray } from "../features/teamSlice";
import { useDispatch ,useSelector } from "react-redux";
const ShowTeamTables = () => {
    const route = useRoute();
  const { userData } = route.params;
  const myArray=userData.teams;
  console.log("userData",myArray)
    return (<View style={{backgroundColor:'#fff',flex:1}}>
      <Header title={"Show Teams"} icon={require("../assets/back.png")} />
      <ScrollView>
      {
        myArray.map((item,index)=>{
            return(
                <View
          style={{
            height: 80,
            width: "90%",
            borderRadius: 10,
            backgroundColor: "rgba(40, 79, 73, 0.2)",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                fontWeight: 400,
                marginLeft: 20,
                marginTop:5
              }}
            >
            {/* {userData.teams[0].teamName} */}
            {/* Team  Name    */}
            {item.teamName}
              {/* {teamName} */}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                width: 130,
                borderRadius: 8,
                backgroundColor: "#FF8700",
                color: "#fff",
                marginRight: 20,
                textAlign: "center",
                height: 20,
                marginTop: 8,
              }}
            >
              Team Member : 05
            </Text>
          </View>
          <View style={{ marginTop: 3 }}>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                fontWeight: 400,
                marginLeft: 20,
                width: 200,
              }}
            >
              Created on: 12 March 2023
            </Text>
          </View>
        </View>
            
            )
      
        })
      }
  
     </ScrollView>
    </View>)
}



export default ShowTeamTables;