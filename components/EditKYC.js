import React, { useState ,useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {  useUpdateKYCMutation } from "../services/signUpApi";
import Header from "./Header";
import CustomButton from "./CustomButton";

const KYC = ({route}) => {
  const [aadharImage, setAadharImage] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [religion, setReligion] = useState("");
  const { id}=route.params;

  // for error message
  const [aadharImageError, setAadharImageError] = useState("");
  const [presentAddressError, setPresentAddressError] = useState("");
  const [permanentAddressError, setPermanentAddressError] = useState("");
  const [aadharNumberError, setAadharNumberError] = useState("");
  const [showButton, setShowButton] = useState(true);
 const [ updateDetails ] =useUpdateKYCMutation();
 const clearTextInput =()=>{
  setPresentAddress("");
  setPermanentAddress("");
  setAadharNumber("");
  setReligion("");
  setAadharImage("");
}
  const handleSubmit = async () => {
    if (!permanentAddress) {
      setPermanentAddressError("Please enter your address");
    } else {
      setPermanentAddressError("");
    }
    if (!presentAddress) {
      setPresentAddressError("Please enter your address");
    } else {
      setPresentAddressError("");
    }
    if (!aadharNumber) {
      setAadharNumberError("Aadhar number is required !");
    } else {
      setAadharNumberError("");
    }
    if (!aadharImage) {
      setAadharImageError("Aadhar Image is required !");
    } else {
      setAadharImageError("");
    }
    if (permanentAddress && presentAddress && aadharImage && aadharNumber) {
    try {
      const formData = new FormData();
          formData.append("id",id);
      formData.append("presentAddress", presentAddress);
      formData.append("permanentAddress", permanentAddress);
      formData.append("aadharNumber", aadharNumber);
      formData.append("religion", religion);
      formData.append("aadharImage", {
        uri: aadharImage,
        type: "image/jpeg",
        name: "image.jpg",
      });
  
    const res=  await updateDetails(formData);
    alert("KYC details updated successfully !")
    console.log(res);
    clearTextInput();

    } catch (error) {
      console.log(error);
    }
  }
  };

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
      setAadharImage(result.assets[0].uri);
    }
  };
  // console.log(aadharImage);

       //button is shown above the keyboard to avoid this behaviour
       useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
          "keyboardDidShow",
          () => {
            setShowButton(false);
          }
        );
    
        const keyboardDidHideListener = Keyboard.addListener(
          "keyboardDidHide",
          () => {
            setShowButton(true);
          }
        );
    
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
      }, []);
  return (
    <View style={styles.container}>
    <View style={styles.content}>
   <Header title={"Update KYC Details"} icon={require("../assets/back.png")} />
      {/* <View style={{ width: "100%" }}> */}
        <TextInput
          style={styles.textInput}
          placeholder="Present Address"
          value={presentAddress}
          onChangeText={setPresentAddress}
        />
         {presentAddressError && (
          <View style={styles.errorContainer}>
          <Text style={{ color: "red" }}>
            {presentAddressError}
          </Text>
          </View>
        ) }
        <TextInput
          style={styles.textInput}
          placeholder="Permanent Address"
          value={permanentAddress}
          onChangeText={setPermanentAddress}
        />
           {permanentAddressError &&(
          <View style={styles.errorContainer}>
          <Text style={{ color: "red" }}>
            {permanentAddressError}
          </Text>
          </View>
        )}
        <TextInput
          style={styles.textInput}
          placeholder="Aadhar Number"
          value={aadharNumber}
          onChangeText={setAadharNumber}
        />
          {aadharNumberError && (
          <View style={styles.errorContainer}>
          <Text style={{ color: "red"}}>
            {aadharNumberError}
          </Text>
          </View>
        )}
        <TextInput
          style={styles.textInput}
          placeholder="Religion"
          value={religion}
          onChangeText={setReligion}
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
              // marginBottom: 10,
            }}
          >
            {!aadharImage && (
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
            {aadharImage && (
              <Image
                source={{ uri: aadharImage }}
                style={{ width: 147, height: 147, borderRadius: 20 }}
              />
            )}
          </View>
          {aadharImageError && (
            <View style={{marginLeft:12,height:20}}>
            <Text style={{ color: "red" }}>
              {aadharImageError}
            </Text>
            </View>
          )}
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
                marginTop:10
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
        {/* <TouchableOpacity onPress={handleSubmit}>
          <View
            style={{
              marginLeft: 20,
              marginTop: 130,
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
        </TouchableOpacity> */}
        {
          showButton && <CustomButton onPress={handleSubmit} text={"Save & Update"} />
        }
      {/* </View> */}
    </View>
    </View>
  );
};

export default KYC;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-end'
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    //   width:'100%',
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
    fontFamily: "Poppins",
  },
  btnStyle: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 50,
    width: "90%",
    borderWidth: 1,
    borderColor: "#dcdcdc",
    marginTop: 10,
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 12,
  },
  textStyle: {
    fontSize: 16,
    color: "#dcdcdc",
    fontFamily: "Poppins",
  },
  errorContainer: {
    marginLeft:20,
    height: 20,
  },
});
