import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import PhoneInput from "react-native-phone-number-input";
import KeyboardAvoidWrapper from "../components/KeyboardAvoidWrapper";
import { useRegisterUserMutation } from "../services/signUpApi";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const [registerUser] = useRegisterUserMutation();

  const clearTextInput = () => {
    setName("");
    setMobileNumber("");
  };
  const handleSubmit = async () => {
    const pattern = /^[a-zA-Z]+$/;
    const valid = pattern.test(name);
   if (!name) {
      setNameError("Please enter your name");
    } else if (!valid) {
      setNameError("Invalid name. Only characters are allowed.");
    } 
    else if (name.length < 3) {
      setNameError("Name should have at least 3 characters");
    } else {
      setNameError("");
    }

    if (!mobileNumber) {
      setMobileNumberError("Please enter your mobile number");
    } else if (mobileNumber.length !== 10) {
      setMobileNumberError("Mobile number should have 10 digits");
    } else {
      setMobileNumberError("");
    }
    if (
      name &&
      name.length >= 3 &&
      mobileNumber &&
      mobileNumber.length === 10
    ) {
      const formData = { name, mobileNumber };
      const res = await registerUser(formData);
      console.log(res);
      clearTextInput();
      navigation.navigate("Otp", { mobileNumber: mobileNumber });
    }
  };

  return (
    // <KeyboardAvoidWrapper>  </KeyboardAvoidWrapper>
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ marginTop: 40 }}>
        <Image
          source={require("../assets/start-page/login.png")}
          style={{
            width: windowWidth,
            height: 250,
            // backgroundColor:'yellow',
          }}
        />
        <View
          style={{
            marginLeft: 20,
            marginTop: 15,
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
            Create Account
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
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 10,
              width: "90%",
              height: 50,
              marginLeft: 20,
              marginRight: 20,
              borderColor: "#dcdcdc",
              fontSize: 16,
              padding: 12,
            }}
            value={name}
            onChangeText={setName}
            placeholder="Enter Your Name"
          />
          {nameError ? (
            <Text style={{ color: "red", marginLeft: 20 }}>{nameError}</Text>
          ) : null}
          <PhoneInput
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
            keyboardType="number-pad"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />
          {mobileNumberError ? (
            <Text style={{ color: "red", marginLeft: 20 }}>
              {mobileNumberError}
            </Text>
          ) : null}
        </View>
      </View>
      <TouchableOpacity
        // onPress={handleSubmit}
        onPress={() => {
          navigation.navigate("Otp");
        }}
      >
        <View
          style={{
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 10,
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
            Get OTP
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.hr} />
        <Text
          style={{
            alignItems: "center",
            fontSize: 14,
            color: "gray",
            marginTop: 5,
          }}
        >
          OR Sign in with
        </Text>
        <View style={styles.hr} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: 40, height: 40, marginRight: 20 }}
          source={require("../assets/start-page/google.png")}
        />

        <Image
          style={{ width: 40, height: 40 }}
          source={require("../assets/start-page/Facebook.png")}
        />
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
    width: "30%",
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
    marginTop: 20,
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
});
export default SignUp;
