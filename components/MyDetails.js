import React,{useState,useEffect} from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
  } from "react-native";
import Header from './Header';
import { useGetBankDetailsQuery, useGetCreateTeamQuery } from '../services/signUpApi';


const MyDetails = ({navigation}) => {

  const { data ,isSuccess,isError }=useGetCreateTeamQuery();
  // console.log("CreateTeam",isError)
  const [userData,setUserData]=useState([])
  // console.log("Data",data)
  useEffect(() => {
    if (isSuccess) {
      setUserData(data);
    }
  }, [isSuccess, data]);



  // const myData=userData.teams;
  // const date=userData.createdAt
  // console.log("team" ,userData.teams);
  // console.log(myData)
  // console.log(date)
  
    return (
        <View style={styles.container}>
        <Header  title={' My Details'} icon={require('../assets/back.png')}/>
     <TouchableOpacity onPress={()=>navigation.navigate('PersonalDetails')}>
        <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 12,
          }}
        >
          <Text style={styles.text}>Personal Details</Text>
          <Image
            source={require("../assets/snag-icon/arrow-right.png")}
            style={styles.img}
          />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('KYC')}>
      {/* second */}
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 12,
          }}
        >
       
          <Text style={styles.text}>KYC</Text>
          <Image
            source={require("../assets/snag-icon/arrow-right.png")}
            style={styles.img}
          />
        </View>
      
      </View>
      </TouchableOpacity>
      {/* Third */}
      <TouchableOpacity onPress={()=>navigation.navigate('WorkType',
      {userData:userData}
      )}>
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 12,
          }}
        >
          <Text style={styles.text}>Work Type</Text>
          <Image
            source={require("../assets/snag-icon/arrow-right.png")}
            style={styles.img}
          />
        </View>
      </View>
      </TouchableOpacity>
      {/* Four */}
      <TouchableOpacity onPress={()=>navigation.navigate('Organization')}>
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 12,
          }}
        >
          <Text style={styles.text}>Organization</Text>
          <Image
            source={require("../assets/snag-icon/arrow-right.png")}
            style={styles.img}
          />
        </View>
      </View>
      </TouchableOpacity>
      {/* five */}
      <TouchableOpacity onPress={()=>navigation.navigate('BankDetails')}>
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 12,
          }}
        >
          <Text style={styles.text}>Bank Details</Text>
          <Image
            source={require("../assets/snag-icon/arrow-right.png")}
            style={styles.img}
          />
        </View>
      </View>
      </TouchableOpacity>
        </View>
    );
}



export default MyDetails;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    img: {
        width: 15,
        height: 15,
        marginRight: 10,
        marginTop: 3,
      },
      textContainer: {
        width: 360,
        height: 50,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "#fff",
        marginTop: 14,
      },
      text: {
        fontSize: 14,
        fontFamily: "Poppins",
        fontWeight: "300",
        marginLeft: 10,
        textAlign:'center',
      },
});