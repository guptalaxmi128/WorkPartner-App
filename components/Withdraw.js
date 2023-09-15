import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import Header from "./Header";

const Withdraw = () => {
  return (
    <View style={styles.container}>
      <Header title={"Withdraw Money"} icon={require("../assets/back.png")} />

      <TextInput style={styles.textInput} placeholder="Enter Amount" />
      <Text
        style={{
          width: "90%",
          height: 30,
          fontFamily: "Poppins",
          fontWeight: 400,
          color: "#8e8e8e",
          fontSize: 12,
        }}
      >
        Your withdraw amount will be settle in your bank account that you
        provided{" "}
      </Text>
      <TouchableOpacity
        style={{
          // marginLeft: 20,
          marginTop: 20,
          marginBottom: 20,
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
            Proceed
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          width: "90%",
          height: 70,
          backgroundColor: "rgba(226, 149, 71, 0.1)",
          borderRadius: 10,
          flexDirection:'row',
          padding:10
        }}
      >
      <View style={{width:7,height:7,borderRadius:5,backgroundColor:"#E68314",marginTop:3}}/> 
        <Text style={{width:"90%",color:'#E68314',fontFamily:'Poppins',fontSize:10,fontWeight:400,textAlign:'justify',marginLeft:5}}>
          Your withdraw amount will be settle in your bank account that you
          provided Your withdraw amount will be settle in your bank account that
          you provided
        </Text>
      </View>
    </View>
  );
};

export default Withdraw;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    height: 50,
    margin: 20,
    // marginLeft: 20,
    // marginRight: 20,
    borderColor: "#dcdcdc",
    fontSize: 16,
    padding: 12,
    // marginTop: 10,
    fontFamily: "Poppins",
  },
});
