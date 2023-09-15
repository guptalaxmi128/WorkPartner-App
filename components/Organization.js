import React, { useState ,useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Keyboard
} from "react-native";
import { useGetOrganizationQuery, useOrganizationMutation } from "../services/signUpApi";
import { getToken } from "../services/AsyncStorageService";
import MyDetailsHeader from "./MyDetailsHeader";
import CustomButton from "./CustomButton";

const type = [
  {
    id: 1,
    type: "Work Partner",
  },
  {
    id: 2,
    type: "Survey Partner",
  },
];

const Organization = ({navigation}) => {
  const [workLocationPincode, setWorkLocationPincode] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [firmName, setFirmName] = useState("");
  // for Type select section
  const [partnerType, setPartnerType] = useState(" Select Partner Type");
  const [isClicked, setIsClicked] = useState(false);
  const [dataType, setDataType] = useState(type);

  const [workLocationPincodeError, setWorkLocationPincodeError] = useState("");
  const [workLocationError, setWorkLocationError] = useState("");
  const [firmNameError, setFirmNameError] = useState("");
  const [showButton, setShowButton] = useState(true);

  const [userToken,setUserToken]=useState();
  useEffect (()=>{
    (async()=>{
     const token = await getToken() // Getting token from Storage
     setUserToken(token) // Store token in local state
      })()
  })
//  console.log(userToken)
  const [ organization ] =useOrganizationMutation();
//  console.log(organization)
  const clearTextInput = () => {
    setWorkLocationPincode("");
    setWorkLocation("");
    setFirmName("");
    setPartnerType("Partner Type");
  };
  const handleSubmit = async () => {
    if(!workLocation){
      setWorkLocationError("Please enter your work location")
    }else {
      setWorkLocationError(" ")
    }
    if(!workLocationPincode){
      setWorkLocationPincodeError("Please enter your work location pincode")
    }else {
      setWorkLocationPincodeError(" ")
    }
    if(!firmName){
      setFirmNameError("Please enter firm name")
    }else {
      setFirmNameError(" ")
    }
   if(workLocation && workLocationPincode && firmName && partnerType !== 'Select Partner Type'){
    const formData = {
      workLocationPincode,
      workLocation,
      firmName,
      partnerType,
    };
    const res = await organization(formData);
    alert("Organization details added successfully !")
    console.log(res);
    clearTextInput();
   }
  };

  const {data}=useGetOrganizationQuery();
  // console.log(data)
  const onOrganizationPress =()=>{
    if(data){
      navigation.navigate("UpdateOrganization",
      {data}
      )
    }
  }

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
      <MyDetailsHeader title={"Organization"} icon={require("../assets/back.png")} buttontext={"Show Details"} onPress={onOrganizationPress} />
        {/* For partner Type */}
        <TouchableOpacity
          style={styles.dropDownSelector}
          onPress={() => {
            setIsClicked(!isClicked);
          }}
        >
          <Text style={styles.text}>{partnerType}</Text>
          {isClicked ? (
            <Image
              source={require("../assets/profile-icon/arrow-down.png")}
              style={styles.icon}
            />
          ) : (
            <Image
              source={require("../assets/profile-icon/arrow-up.png")}
              style={styles.icon}
            />
          )}
        </TouchableOpacity>
        {isClicked ? (
          <View style={styles.dropDownArea}>
            <FlatList
              data={dataType}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={styles.typeItems}
                    onPress={() => {
                      setPartnerType(item.type);
                      setIsClicked(false);
                    }}
                  >
                    <Text style={styles.text}>{item.type}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
        <TextInput
          style={styles.textInput}
          placeholder="Work Location Pincode"
          value={workLocationPincode}
          onChangeText={setWorkLocationPincode}
        />
          {workLocationPincodeError && (
            <View style={styles.errorContainer}>
          <Text style={{ color: "red" }}>
            {workLocationPincodeError}
          </Text>
          </View>
        )}
        <TextInput
          style={styles.textInput}
          placeholder="Work Location"
          value={workLocation}
          onChangeText={setWorkLocation}
        />
          {workLocationError && (
            <View style={styles.errorContainer} >
          <Text style={{ color: "red" }}>
            {workLocationError}
          </Text>
          </View>
        )}
        <TextInput
          style={styles.textInput}
          placeholder="Firm Name"
          value={firmName}
          onChangeText={setFirmName}
        />
          {firmNameError && (
            <View style={styles.errorContainer}>
          <Text style={{ color: "red"}}>
            {firmNameError}
          </Text>
          </View>
        ) }
        {/* <TouchableOpacity onPress={handleSubmit}   style={{
              marginLeft: 20,
              marginTop: 365,
              backgroundColor: "#284F49",
              height: 50,
              width: "90%",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}>
          <View
          
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
          showButton && <CustomButton text={"Save & Update"} onPress={handleSubmit} />
        }
      </View>
    </View>
  );
};

export default Organization;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
  },
  dropDownSelector: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
    marginTop:10
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: "#8e8e8e",
  },
  dropDownArea: {
    width: "90%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
    alignSelf: "center",
    marginTop: 10,
  },
  typeItems: {
    width: "85%",
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center",
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
  errorContainer: {
    marginLeft:20,
    height: 20,
  },
});
