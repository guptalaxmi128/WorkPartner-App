import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import KeyboardAvoidWrapper from "../components/KeyboardAvoidWrapper";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import { useRoute } from '@react-navigation/native';
import { useVerifyOtpMutation } from "../services/signUpApi";
import { storeToken } from "../services/AsyncStorageService";

const OtpScreen = ({navigation}) => {

  const [otp1, setOtp1] = useState({1:'',2:'',3:'',4:'',5:'',6:''});
  const route = useRoute();
  // const { mobileNumber } = route.params;
  const otp = Object.keys(otp1).map(key => otp1[key]).join('');
 

  const [ verifyOtp ] =useVerifyOtpMutation();
 

  const handleSubmit = async () =>{
    const formData={mobileNumber,otp}
    const res= await verifyOtp(formData)
    await storeToken(res.data.authToken) //Store token in storage
    console.log(res)
    navigation.navigate("TabNavigator")
  }
  
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();

  return (
    <KeyboardAvoidWrapper>
    <View style={{ marginTop: 30 }}>
    
      <Image
        source={require("../assets/start-page/signup.png")}
        style={{
          width: windowWidth,
          height: 300,
        }}
      />
      <View
        style={{
          marginLeft: 20,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Poppins",
            fontWeight: "bold",
            color: "#284F49",
          }}
        >
          Enter OTP
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: 200,
            marginTop: 3,
          }}
        >
          6 digits OTP sent to entered mobile number 
          {/* {mobileNumber} */}
        </Text>
      </View>
      
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 30 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={(text)=>{
              setOtp1({...otp1,1:text})
              text && secondInput.current.focus()
            }}
          />
         
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={(text)=>{
              setOtp1({...otp1,2:text})
              text ? thirdInput.current.focus() : firstInput.current.focus()
            }}
          />
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={(text)=>{
              setOtp1({...otp1,3:text})
              text ? fourthInput.current.focus() : secondInput.current.focus()
            }}
          />
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={(text)=>{
              setOtp1({...otp1,4:text})
              text  ? fifthInput.current.focus() : thirdInput.current.focus()
            }}
          />
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            ref={fifthInput}
            onChangeText={(text)=>{
              setOtp1({...otp1,5:text})
              text ? sixthInput.current.focus() : fourthInput.current.focus()
            }}
          />
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            ref={sixthInput}
            onChangeText={(text)=>{
              setOtp1({...otp1,6:text})
              !text && fifthInput.current.focus() 
            }}
          />
        </View>
      </View>
      
      <TouchableOpacity
      //  onPress={handleSubmit}
      onPress={()=>{navigation.navigate("TabNavigator")} }
      >
        <View
          style={{
            // marginTop: 10,
            // marginLeft: 20,
            // marginRight: 20,
            // marginBottom:10,
            margin: 20,
            backgroundColor: "#284F49",
            height: 50,
            width: "90%",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Login
          </Text>
        </View>
      </TouchableOpacity>
      
    </View>
    </KeyboardAvoidWrapper>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 45,
    height: 45,
    borderWidth: 0.5,
    borderColor: "gray",
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OtpScreen;
