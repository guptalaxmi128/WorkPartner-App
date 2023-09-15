import React, {useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  TouchableWithoutFeedback
} from "react-native";
import Header from "./Header";
import { useDeleteKYCMutation } from "../services/signUpApi";

const UpdateKYC = ({ route ,navigation }) => {
    const [showPopUp, setShowPopUp] = useState(false);
  const { data } = route.params;
  console.log(data)
  // const[aadharImage,setAadharImage]=useState(data.aadharImage)
 const [id,setId]=useState(data.id);
  const handlePress = () => {
    setShowPopUp(!showPopUp);
  };

  const closeMenu = () => {
    setShowPopUp(false);
  };
   const aadharImage=data.aadharImage;
   console.log(aadharImage)
  const [deleteKYC]=useDeleteKYCMutation();
  const handleDelete = (id) => {
    Alert.alert(
      "Confirmation",
      `Are you sure you want to delete KYC Details ?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => deleteKYC(id),
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <TouchableWithoutFeedback onPress={closeMenu}>
    <View style={styles.container}>
      <Header title={"Show Details"} icon={require("../assets/back.png")} />
      <View
        style={{
          width: "90%",
          height: 180,
          elevation: 3,
          borderRadius: 8,
          backgroundColor: "#fff",
          margin: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: 300,
              height: 30,
              marginLeft: 5,
            }}
          >
            <Text style={[styles.textStyle, { width: 150 }]}>
              Present Address :
            </Text>
            <Text style={[styles.textStyle, { width: 180 }]}>
              {data.presentAddress}
            </Text>
          </View>
          <View style={styles.menucontainer}>
          <TouchableOpacity onPress={handlePress}>
          <Image
            source={require("../assets/mydetail/more.png")}
            style={{
              width: 25,
              height: 25,
            }}
          />
          </TouchableOpacity>
           {showPopUp && (
                <View style={styles.popUp}>
                  <TouchableOpacity 
                onPress={()=>navigation.navigate("EditKYC",{id})}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={require("../assets/worktype/edit.png")}
                        style={[styles.icon, { margin: 10 }]}
                      />
                      <Text style={styles.option}>Edit</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  onPress={() => handleDelete(id)}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={require("../assets/mydetail/trash.png")}
                        style={[styles.icon, { margin: 10 }]}
                      />
                      <Text style={[styles.option, { color: "red" }]}>
                        Delete
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              </View>
        </View>
        <View style={styles.viewStyle}>
          <Text style={[styles.textStyle, { width: 175 }]}>
            {" "}
            Permanent Address :
          </Text>
          <Text style={[styles.textStyle, { width: 200 }]}>
            {data.permanentAddress}
          </Text>
        </View>
        <View style={styles.viewStyle}>
          <Text style={[styles.textStyle, { width: 150 }]}>
            Aadhar Number :
          </Text>
          <Text style={[styles.textStyle, { width: 150 }]}>
            {data.aadharNumber}
          </Text>
        </View>
        <View style={styles.viewStyle}>
          <Text style={[styles.textStyle, { width: 80 }]}>Religion :</Text>
          <Text style={[styles.textStyle, { width: 180 }]}>
            {data.religion}
          </Text>
        </View>
       
        {/* <View
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
            <Image
                source={{ uri: data.aadharImage }}
                style={{ width: 147, height: 147, borderRadius: 20 }}
              /> 
            
          </View>
          </View> */}
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default UpdateKYC;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  viewStyle: {
    flexDirection: "row",
    width: 300,
    height: 30,
    marginTop: 5,
    marginLeft: 15,
  },
  textStyle: {
    height: 30,
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: 400,
  },
  menucontainer:{
position:'relative'
  },
  icon: {
    width: 20,
    height: 20,
  },
  popUp: {
    width: 120,
    height: 100,
    position: "absolute",
    top: 10,
    // left: -15,
    right:-20,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5,
    zIndex: 1,
    elevation: 3,
  },
  option: {
    padding: 10,
    fontFamily: "Poppins",
    fontSize: 14,
  },
});
