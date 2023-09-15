import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard
} from "react-native";
import Header from "./Header";
import { useUpdateBankDetailsMutation } from "../services/signUpApi";
import CustomButton from "./CustomButton";

const EditBankdetails = ({ route }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [IFSCCode, setIFSCCode] = useState("");
  const [bankName, setBankName] = useState("");
  const [nameInAccount, setNameInAccount] = useState("");

  const [accountNumberError, setAccountNumberError] = useState("");
  const [IFSCCodeError, setIFSCCodeError] = useState("");
  const [bankNameError, setBankNameError] = useState("");
  const [nameInAccountError, setNameInAccountError] = useState("");
  const [showButton, setShowButton] = useState(true);
   const{id}=route.params;
   const [UpdateBankDetail] = useUpdateBankDetailsMutation();

  const clearTextInput = () => {
    setAccountNumber("");
    setIFSCCode("");
    setBankName("");
    setNameInAccount("");
  };
  const handleSubmit = async () => {
    if (!accountNumber) {
      setAccountNumberError("Account number is required !");
    } else {
      setAccountNumberError("");
    }
    if (!bankName) {
      setBankNameError("Please enter your bank name");
    } else {
      setBankNameError("");
    }
    if (!IFSCCode) {
      setIFSCCodeError("Please enter IFSCCode");
    } else {
      setIFSCCodeError("");
    }
    if (!nameInAccount) {
      setNameInAccountError("Name is required !");
    } else {
      setNameInAccountError("");
    }
    if (nameInAccount && IFSCCode && accountNumber && bankName) {
    const formData = { accountNumber, IFSCCode, bankName, nameInAccount, id };
    const res = await UpdateBankDetail(formData);
    alert("Bank details updated successfully");
    console.log(res);
    clearTextInput();
    }
  };
  
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
      <Header
        title={" Update Bank Details"}
        icon={require("../assets/back.png")}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
      />
       {accountNumberError && (
        <View style={styles.errorContainer}>
          <Text style={{ color: "red" }}>
            {accountNumberError}
          </Text>
          </View>
        )}
      <TextInput
        style={styles.textInput}
        placeholder="Bank Name"
        value={bankName}
        onChangeText={setBankName}
      />
          {bankNameError && (
            <View style={styles.errorContainer}>
          <Text style={{ color: "red" }}>
            {bankNameError}
          </Text>
          </View>
        ) }
      <TextInput
        style={styles.textInput}
        placeholder="IFSC Code"
        value={IFSCCode}
        onChangeText={setIFSCCode}
      />
        {IFSCCodeError && (
          <View style={styles.errorContainer}>
          <Text style={{ color: "red"}}>
            {IFSCCodeError}
          </Text>
          </View>
        ) }
      <TextInput
        style={styles.textInput}
        placeholder="Name on account"
        value={nameInAccount}
        onChangeText={setNameInAccount}
      />
        {nameInAccountError && (
          <View style={styles.errorContainer}>
          <Text style={{ color: "red" }}>
            {nameInAccountError}
          </Text>
          </View>
        ) }
      {/* <TouchableOpacity
        onPress={handleSubmit}
        style={{
          position:'absolute',
          bottom:20,
          marginLeft: 20,
          backgroundColor: "#284F49",
          height: 50,
          width: "90%",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
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
        showButton &&  <CustomButton  text={"Save & Update"} onPress={handleSubmit} />
      }
      
    </View>
    </View>
  );
};

export default EditBankdetails;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
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
  errorContainer: {
    marginLeft:20,
    height: 20,
  },
});
