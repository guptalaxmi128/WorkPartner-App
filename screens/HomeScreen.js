import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { getToken } from "../services/AsyncStorageService";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../features/authSlice";
import { useAddWorkingHourMutation, useGetWorkingHourQuery } from "../services/signUpApi";
const HomeScreen = ({ navigation}) => {
const [startDate,setStartDate]=useState('');
const [endDate,setEndDate]=useState('');
  const dispatch = useDispatch();
  const [userToken, setUserToken] = useState();
 
  useEffect(() => {
    (async () => {
      const token = await getToken(); // Getting token from Storage
      setUserToken(token); // Store token in local state
      dispatch(setToken({ token: token }));
    })();
  });

  const {data}=useGetWorkingHourQuery();

 
  function formatDate(dateStr) {
    const date = new Date(dateStr);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const month = monthsOfYear[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  
  const formattedDate = `${dayOfWeek}, ${month} ${year}`;
return formattedDate;
  // console.log(formattedDate)
  }
 
  useEffect(() => {
    if (data && data.length > 0) {
      const formattedStartDate = formatDate(data[0].startingDate);
      const formattedEndDate = formatDate(data[0].endingDate);
      setStartDate(formattedStartDate);
      setEndDate(formattedEndDate);
    }
  }, [data]);
 
  // const myToken= useSelector(state=>state.auth)
  // console.log(myToken);
  return (
    // <SafeAreaView style={{flex:1,justifyContent:'center',
    // alignItems:'center',backgroundColor:'#fff'}}>
    <View style={styles.container}>
      <View style={{ backgroundColor: "#ffd7b5", width: "100%", height: 100 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
              Good Morning, Partner !
            </Text>
            <Text style={{ fontSize: 16, fontFamily: "Poppins" }}>
              Let's help you finish your workday
            </Text>
          </View>
          <Image
            style={{ width: 45, height: 45, margin: 20 }}
            source={require("../assets/home/sun.png")}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          height: 60,
          backgroundColor: "#fff",
          elevation: 2,
          marginTop: 15,
        }}
      >
        <View style={{ padding: 10, marginLeft:8 }}>
          <Text style={{ fontSize: 14, fontFamily: "Poppins",width:150,textAlign:'center' }}>
            {/* Sat, March 23 */}
            {startDate ? startDate : "Select working hours"}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins",
              color: "green",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Working
          </Text>
        </View>
        <View style={{ padding: 10, marginLeft: 5 }}>
          <Text style={{ fontSize: 14, fontFamily: "Poppins",width:150,textAlign:'center' }}>
            {/* Sat, March 23 */}
           {endDate ? endDate : "Select working hours"}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins",
              color: "green",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Working
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Working hours")}>
          <Image
            style={{ width: 30, height: 30, marginRight: 30, marginTop: 10 }}
            source={require("../assets/home/calender.png")}
          />
        </TouchableOpacity>
      </View>
      {/* first */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          height: 60,
          backgroundColor: "#fff",
          elevation: 2,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#dfe5e4",
            color: "#284F49",
            margin: 10,
            fontSize: 24,
            textAlign: "center",
            borderRadius: 3,
            paddingTop: 3,
          }}
        >
          3
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 18,
            marginRight: 250,
            marginTop: 15,
          }}
        >
          New Jobs
        </Text>
      </View>
      {/* second */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          height: 60,
          backgroundColor: "#fff",
          elevation: 2,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#dfe5e4",
            color: "#284F49",
            margin: 10,
            fontSize: 24,
            textAlign: "center",
            borderRadius: 3,
            paddingTop: 3,
          }}
        >
          3
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 18,
            marginRight: 250,
            marginTop: 15,
          }}
        >
          New Jobs
        </Text>
      </View>
      {/* third */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          height: 60,
          backgroundColor: "#fff",
          elevation: 2,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#dfe5e4",
            color: "#284F49",
            margin: 10,
            fontSize: 24,
            textAlign: "center",
            borderRadius: 3,
            paddingTop: 3,
          }}
        >
          3
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 18,
            marginRight: 250,
            marginTop: 15,
          }}
        >
          New Jobs
        </Text>
      </View>
      {/* <Text>{userToken}</Text> */}
    </View>
    // </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe5e4",
    alignItems: "center",
    marginTop: 30,
  },
});
