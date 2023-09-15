import React, { useEffect, useState} from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Avatar } from "react-native-elements";
import Header from "../components/Header";
import { removeToken } from "../services/AsyncStorageService";
import { useGetDetailsQuery } from "../services/signUpApi";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../features/userSlice";
const Profile = ({ navigation }) => {
  const handleLogout= async()=>{ //little bit incomplete
    await removeToken('token')
    navigation.navigate("Sign Up")
    console.log("token is remove!")
  }
  const dispatch = useDispatch();
  const {data, isSuccess } = useGetDetailsQuery();
 const [userData,setUserData]=useState({})
  // console.log("Data",data)
  useEffect(() => {
    if (isSuccess) {
      setUserData(data);
    }
  }, [isSuccess, data]);
  console.log("Profile" ,userData.name);
  //Store User data in redux store
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setUserInfo({ name: userData.name, mobileNumber: userData.mobileNumber,
          email:userData.email
         })
      );
    }
  });
  return (
    <View style={styles.container}>
      <Header title={"My Profile"} icon={require("../assets/back.png")} />
      <View style={{ margin: 20, flexDirection: "row" }}>
        <Avatar
          rounded
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          }}
          size={75}
        />
        <View style={{ marginLeft: 20, marginTop: 15 }}>
          <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
            {/* Andrea Hirata */}
            {userData.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins",
              color: "gray",
              marginTop: 3,
            }}
          >
            {/* hirata@gmail.com */}
            {userData.email}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor:'pink'
            height: 45,
            padding: 10,
          }}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("../assets/profile-icon/shopping-bag.png")}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 200,
              marginRight: 195,
              fontFamily: "Poppins",
              // backgroundColor:'yellow'
            }}
          >
            Wallet
          </Text>
          <Image
            style={{ width: 20, height: 20, marginRight: 20 }}
            source={require("../assets/profile-icon/arrow-right.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor:'pink'
            height: 45,
            padding: 10,
          }}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("../assets/profile-icon/shopping-bag.png")}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 200,
              marginRight: 195,
              fontFamily: "Poppins",
              // backgroundColor:'yellow'
            }}
          >
            Orders
          </Text>
          <Image
            style={{ width: 20, height: 20, marginRight: 20 }}
            source={require("../assets/profile-icon/arrow-right.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity onPress={() => navigation.navigate("MyDetails")}>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor:'pink'
            height: 45,
            padding: 10,
          }}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("../assets/profile-icon/note.png")}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 200,
              marginRight: 170,
              fontFamily: "Poppins",
              // backgroundColor:'yellow'
            }}
          >
            My Details
          </Text>
          <Image
            style={{ width: 20, height: 20, marginRight: 20 }}
            source={require("../assets/profile-icon/arrow-right.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity onPress={() => navigation.navigate("Working hours")}>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor:'pink'
            height: 45,
            padding: 10,
          }}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("../assets/profile-icon/location.png")}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 200,
              // marginRight:117,
              marginRight: 140,
              fontFamily: "Poppins",
              // backgroundColor:'yellow'
            }}
          >
            Working Hours
          </Text>
          <Image
            style={{ width: 20, height: 20, marginRight: 20 }}
            source={require("../assets/profile-icon/arrow-right.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor:'pink'
            height: 45,
            padding: 10,
          }}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("../assets/profile-icon/notification.png")}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 200,
              marginRight: 150,
              fontFamily: "Poppins",
              // backgroundColor:'yellow'
            }}
          >
            Notifications
          </Text>
          <Image
            style={{ width: 20, height: 20, marginRight: 20 }}
            source={require("../assets/profile-icon/arrow-right.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity
      //  onPress={ () => navigation.navigate('MyOrders')}
      >
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor:'pink'
            height: 45,
            padding: 10,
          }}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 20 }}
            source={require("../assets/profile-icon/notification.png")}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 200,
              marginRight: 187,
              fontFamily: "Poppins",
              // backgroundColor:'yellow'
            }}
          >
            Contact
          </Text>
          <Image
            style={{ width: 20, height: 20, marginRight: 20 }}
            source={require("../assets/profile-icon/arrow-right.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.hr} />
      <TouchableOpacity
      onPress={handleLogout}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              margin: 30,
              //   borderWidth: 1,
              //   borderColor:"#dcdcdc",
              backgroundColor: "#dcdcdc",
              height: 50,
              width: "75%",
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 20, height: 20, marginLeft: 20 }}
              source={require("../assets/profile-icon/logout.png")}
            />
            <Text
              style={{
                // fontFamily: "Poppins",
                fontSize: 16,
                fontWeight: "bold",
                color: "#284F49",
                marginRight: 120,
              }}
            >
              Logout
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    // padding:16,
  },
  hr: {
    position: "relative",
    width: "100%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    opacity: 0.1,
    // marginLeft: 15,
    // marginRight: 20,
    marginTop: 5,
    // marginBottom: 10,
  },
});

export default Profile;
