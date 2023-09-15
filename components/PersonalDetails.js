import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addPersonalDetails } from "../actions/register/register";
import * as ImagePicker from "expo-image-picker";
import Header from "./Header";
import { usePersonalDetailsMutation } from "../services/signUpApi";
// import { setMobileNumber } from "../features/mobileSlice";
const PersonalDetails = () => {
  const userData = useSelector((state) => state.user);
  const [personalImage, setPersonalImage] = useState("");
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(userData.mobileNumber);
 console.log(userData)
  




 const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    setPersonalImage(result.assets[0].uri);
  }
};

   const [ personalDetails ] =usePersonalDetailsMutation();
  // const clearTextInput =()=>{
  //   setName('')
  //   setEmail('')
  // }
  // const handleSubmit = async ()=>{
  //   const formData={name, email}
  //   const res= await personalDetails(formData)
  //   console.log(res)
  //   clearTextInput()
  // }

  const clearTextInput =()=>{
    setName("");
    setEmail("");
    setPersonalImage("");
  }
    const handleSubmit = async () => {
      try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("personalImage", {
          uri: personalImage,
          type: "image/jpeg",
          name: "image.jpg",
        });
      const res=  await personalDetails(formData);
      console.log(res);
      clearTextInput();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <View style={styles.container}>
      <Header title={"Personal Details"} icon={require("../assets/back.png")} />
      <View style={{ width: "100%" }}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Mobile"
          keyboardType="number-pad"
          value={number}
          // onChangeText={setNumber}
          editable={false}
        />

<View
          style={{
            marginTop: 10,
            marginLeft: 20,
            borderRadius: 20,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              width: 150,
              height: 150,
              borderWidth: 1,
              borderStyle: "dashed",
              borderColor: "gray",
              borderRadius: 20,
              marginBottom: 10,
            }}
          >
            {!personalImage && (
              <>
                <Image
                  source={require("../assets/newsnaglist/upload.png")}
                  style={{
                    width: 20,
                    height: 20,
                    opacity: 0.7,
                    alignSelf: "center",
                    marginTop: 50,
                  }}
                />
                <Text style={[styles.textStyle, { textAlign: "center" }]}>
                  Upload Image
                </Text>
              </>
            )}
            {personalImage && (
              <Image
                source={{ uri: personalImage }}
                style={{ width: 147, height: 147, borderRadius: 20 }}
              />
            )}
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={pickImage}
          >
            <View
              style={{
                backgroundColor: "#284F49",
                height: 50,
                width: 150,
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
                Upload Image
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
        onPress={handleSubmit}
        >
          <View
            style={{
              marginLeft: 20,
              marginTop: 200,
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
              Save & Update
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "#dcdcdc",
    fontSize: 16,
    padding: 12,
    marginTop: 10,
  },
});
