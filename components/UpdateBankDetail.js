import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  ActivityIndicator,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import Header from "./Header";
import { useDeleteBankDetailsMutation } from "../services/signUpApi";

const UpdateBankDetail = ({ route, navigation }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const { data } = route.params;
  //   console.log(data);

  const [id, setId] = useState(data.id);

  const [deleteBankDetails] = useDeleteBankDetailsMutation();

  //   console.log(id);

  const handlePress = () => {
    setShowPopUp(!showPopUp);
  };

  const closeMenu = () => {
    setShowPopUp(false);
  };
  const handleDelete = (id) => {
    Alert.alert(
      "Confirmation",
      `Are you sure you want to delete Bank Details ?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => deleteBankDetails(id),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
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
                <Text style={[styles.textStyle, { width: 160 }]}>
                  Name on Account :
                </Text>
                <Text style={[styles.textStyle, { width: 150 }]}>
                  {data.nameInAccount}
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
                      onPress={() =>
                        navigation.navigate("EditBankdetails", { id })
                      }
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/worktype/edit.png")}
                          style={[styles.icon, { margin: 10 }]}
                        />
                        <Text style={styles.option}>Edit</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDelete(id)}>
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
              <Text style={[styles.textStyle, { width: 120 }]}>
                {" "}
                Bank Name :
              </Text>
              <Text style={[styles.textStyle, { width: 150 }]}>
                {data.bankName}
              </Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={[styles.textStyle, { width: 150 }]}>
                Account Number :
              </Text>
              <Text style={[styles.textStyle, { width: 180 }]}>
                {data.accountNumber}
              </Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={[styles.textStyle, { width: 100 }]}>
                IFSC Code :
              </Text>
              <Text style={[styles.textStyle, { width: 180 }]}>
                {data.IFSCCode}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default UpdateBankDetail;
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
  menucontainer: {
    position: "relative",
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
    right: -20,
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
