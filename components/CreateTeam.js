import React, { useState,useEffect } from "react";
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
  Alert
} from "react-native";
import Header from "./Header";
import { useAddMemberMutation, useDeleteTeamMemberMutation  } from "../services/signUpApi";

const CreateTeam = ({route}) => {
  const [modal, setModal] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [member, setMember] = useState(false);

  const { teamData , teamId } = route.params;
  console.log("CreateTeam",teamData.teamName)
  console.log("teamId",teamId)
  console.log("partners",teamData.partners);
  const memberDetail=teamData.partners;
 
  const [ addMember] =useAddMemberMutation();
  const clearTextInput =()=>{
    setName('')
    setMobileNumber('')
  }
  const handleSubmit = async ()=>{
    const formData={name,mobileNumber,id:teamId}
    const res= await addMember(formData)
    console.log(res)
    setMember(true)
    clearTextInput()
  }

  const [deleteTeamMember]=useDeleteTeamMemberMutation();
  const handleDelete = (id) => {
    Alert.alert(
      "Confirmation",
      `Are you sure you want to delete Partner ?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => deleteTeamMember(id),
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <View style={styles.container}>
      <Header title={"Create Team"} icon={require("../assets/back.png")} />
       <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          height: 50,
        }}
      >
        <Text style={{ fontSize: 19, fontFamily: "Poppins", fontWeight: 700 }}>
          {/* Team Name */}
          {teamData.teamName}
        </Text>
        <TouchableOpacity onPress={() => setModal(true)}>
          <View
            style={{
              width: 120,
              height: 30,
              backgroundColor: "#284F49",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                padding: 3,
              }}
            >
              Add Member
            </Text>
          </View>
        </TouchableOpacity>
      </View>
     
      {/* {member === true && ( */}
      {memberDetail.map((item)=>{
        return(
          <View
          style={{
            height: 80,
            width: "90%",
            borderRadius: 10,
            backgroundColor: "#dfe5e4",
            marginLeft: 20,
            marginTop: 10,
            marginRight: 20,
          }}
          key={item.id}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                fontWeight: 400,
                marginLeft: 20,
              }}
            >
              Name : {item.name}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                width: 65,
                borderRadius: 8,
                backgroundColor: " rgba(3, 62, 13, 0.1)",
                color: "green",
                marginRight: 20,
                textAlign: "center",
                height: 18,
              }}
            >
              {item.personalDetail_team.status}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 3,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                fontWeight: 400,
                marginLeft: 20,
              }}
            >
              Number : {item.mobileNumber}
            </Text>
            <View style={{ marginRight: 20, flexDirection: "row" }}>
              <Image
                source={require("../assets/worktype/edit.png")}
                style={[styles.icon, { marginRight: 10 }]}
              />
              <TouchableOpacity onPress={()=>handleDelete(item.personalDetail_team.id)}>
              <Image
                source={require("../assets/worktype/trash.png")}
                style={styles.icon}
              />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        )
      })}
       
      
      {!memberDetail ? (
        <View
          style={{
            width: 255,
            height: 255,
            borderRadius: 10,
            borderStyle: "dashed",
            backgroundColor: "rgba(212, 220, 219, 0.5)",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            marginTop: 140,
          }}
        >
          <Image
            source={require("../assets/create-team/noteam.png")}
            style={{ width: 104, height: 104, alignItems: "center" }}
          />
          <Text
            style={{
              width: 121,
              fontSize: 16,
              textAlign: "center",
              fontFamily: "Poppins",
              fontWeight: 400,
              height: 53,
            }}
          >
            No Team Member Found
          </Text>
        </View>
      ):null}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(false);
        }}
      >
        <View style={styles.modalView}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 700,
                color: "#284F49",
                marginLeft: 20,
              }}
            >
              Member Details
            </Text>
            <TouchableOpacity
              onPress={() => setModal(false)}
              style={{ marginRight: 20 }}
            >
              <Image
                source={require("../assets/worktype/close.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Name"
            style={[styles.textInput, { marginTop: 30 }]}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Mobile"
            style={[styles.textInput, { marginTop: 20 }]}
            keyboardType="number-pad"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 12,
              fontWeight: 400,
              color: "#E68314",
              marginLeft: 22,
            }}
          >
            A link will be send to the mobile number for verification{" "}
          </Text>

          <TouchableOpacity onPress={handleSubmit}>
            <View
              style={{
                margin: 20,
                // marginTop: 30,
                // marginLeft: 20,
                // marginRight: 20,

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
                Add Member
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default CreateTeam;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //   marginTop:30
  },
  icon: {
    width: 20,
    height: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "#8e8e8e",
    fontSize: 16,
    padding: 12,
    fontFamily: "Poppins",
  },
  modalView: {
    width: "100%",
    height: 300,
    position: "absolute",
    bottom: 2,
    backgroundColor: "#dfe5e4",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
