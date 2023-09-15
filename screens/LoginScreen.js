import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import PhoneInput from "react-native-phone-number-input";
import { useLoginMutation } from "../services/signUpApi";
const LoginScreen = ({ navigation }) => {
  //   const [text, setText] = useState("");
  //   const [passwordVisible, setPasswordVisible] = useState(true);

  // const[phoneNumber,setPhoneNumber]=React.useState('');
  // const getPhoneNumber=()=>{
  //  Alert.alert(phoneNumber);
  // }

  const clearTextInput = () => {
    setMobileNumber("");
  };
  const handleSubmit = async () => {
    if (!mobileNumber) {
      setMobileNumberError("Please enter your mobile number");
    } else if (mobileNumber.length !== 10) {
      setMobileNumberError("Mobile number should have 10 digits");
    } else {
      setMobileNumberError("");
    }
    if (mobileNumber && mobileNumber.length === 10) {
      const formData = { mobileNumber };
      const res = await login(formData);
      console.log(res);
      clearTextInput();
      navigation.navigate("Otp", { mobileNumber: mobileNumber });
    }
  };
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const [login] = useLoginMutation();

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginTop: 30 }}>
        <Image
          source={require("../assets/start-page/signup.png")}
          style={{
            width: windowWidth,
            height: 300,
          }}
        />
        <View
          style={{
            // justifyContent: "center",
            // alignItems: "center",
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
            Welcome back
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: 200,
            }}
          >
            Login to your work partner account
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <PhoneInput
            // defaultValue={phoneNumber}
            defaultCode="IN"
            layout="second"
            // withShadow
            // autoFocus
            containerStyle={styles.phoneNumberView}
            textContainerStyle={{
              paddingVertical: 0,
              backgroundColor: "#fff",
              color: "gray",
            }}
            // onChangeFormattedText={text=>setPhoneNumber(text)}
            keyboardType="number-pad"
            //new code comment
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />
          {mobileNumberError ? (
            <Text style={{ color: "red", marginLeft: 20 }}>
              {mobileNumberError}
            </Text>
          ) : null}
          <TouchableOpacity
          onPress=  {()=>navigation.navigate('Otp')}
            // onPress={handleSubmit}
          >
            <View
              style={{
                // margin:20,
                marginTop: 20,
                marginLeft: 20,
                marginRight: 20,

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
                  // fontFamily: "Poppins",
                  fontSize: 18,
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Get OTP
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontWeight: 100,
                fontSize: 16,
              }}
            >
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
              <View>
                <Text
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 100,
                    color: "#284F49",
                    fontSize: 16,
                    marginLeft: 5,
                  }}
                >
                  Sign up here
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  hr: {
    position: "relative",
    // top: 1,
    width: "40%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    opacity: 0.3,
    marginLeft: 15,
    marginRight: 20,
    marginBottom: 10,
  },

  phoneNumberView: {
    alignItems: "center",
    width: 350,
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
});

export default LoginScreen;
