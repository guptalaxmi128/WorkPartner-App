import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Modal,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import Header from "./Header";
import {
  useCreateTeamMutation,
  useDeleteTeamMutation,
  useGetPartnerInTeamQuery,
  useUpdateNameMutation,
} from "../services/signUpApi";
import { useRoute } from "@react-navigation/native";

const job = [
  {
    id: 1,
    job: "Individual",
  },
  {
    id: 2,
    job: "Having a Team",
  },
];
const WorkType = ({ navigation }) => {
  // for Job select section
  const [jobAs, setJobAs] = useState("Work Type");
  const [isSelected, setIsSelected] = useState(false);
  const [dataJob, setDataJob] = useState(job);
  const [modal, setModal] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [member, setMember] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [viewCount, setViewCount] = useState(0); //no work
  const [updateTeamName, setUpdateTeamName] = useState("");
  const [updateModal, setUpdateModal] = useState("");
  const [updateId, setUpdateId] = useState("");

  const [teamId, setTeamId] = useState(null);
  const [teamData, setTeamData] = useState([]);
  const route = useRoute();
  const { userData } = route.params;
  const myArray = userData.teams;
  // const [teamData,setTeamData]=useState(myArray);
  // console.log("userData", userData);
  // console.log("teamsId",userData.teams.id);

  // for partners in Team data
  const { data, isSuccess, isLoading } = useGetPartnerInTeamQuery(teamId);
  // console.log(data);
  // console.log(teamId);
  useEffect(() => {
    if (isSuccess) {
      setTeamData(data);
    }
  }, [isSuccess, data]);
  // console.log("teamDatatatat", teamData);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const parts = formatter.formatToParts(date);
    return `${parts[2].value} ${parts[0].value} ${parts[4].value}`;
  };

  // for delete team
  const [deleteTeam, res] = useDeleteTeamMutation();
  // console.log("deleteTeam", deleteTeam);
  const handlePress = (id, teamName) => {
    Alert.alert(
      "Confirmation",
      `Are you sure you want to delete ${teamName}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => deleteTeam(id),
        },
      ],
      { cancelable: false }
    );
  };
  

  // for create team
  const [createTeam] = useCreateTeamMutation();
  const clearTextInput = () => {
    setTeamName("");
  };
  const handleSubmit = async () => {
    const formData = { teamName };
    const res = await createTeam(formData);
    console.log(res);
    alert("Team Created Successfully");
    setViewCount(viewCount + 1);
    setMember(true);
    clearTextInput();
  };

  // for update team name
  //  console.log("updateId",updateId)
  //  console.log("Data",updateTeamName)
  function editTeamName(id) {
    setUpdateId(id);
    setUpdateModal(true);
  }
  const [updateName] = useUpdateNameMutation();
  const clearInput = () => {
    setUpdateTeamName("");
  };

  const handleSubmit2 = async () => {
    const formData = { teamName: updateTeamName, id: updateId };
    console.log("formData", formData);
    const res = await updateName(formData);
    console.log(res);
    // setUpdateModal(true);
    clearInput();
  };

  // navigating to add member screen
  function handleItemClick(id) {
    // console.log(`Clicked item with ID: ${id}`);
    setTeamId(id);
    if (data) {
      navigation.navigate("CreateTeam", { teamData, teamId });
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header title={"Work Type"} icon={require("../assets/back.png")} />

        <View style={{ width: "100%" }}>
          {/* For Job as */}

          <TouchableOpacity
            style={styles.dropDownSelector}
            onPress={() => {
              setIsSelected(!isSelected);
            }}
          >
            <Text style={styles.text}>{jobAs}</Text>
            {isSelected ? (
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
          {isSelected ? (
            <View style={styles.dropDownArea}>
              <FlatList
                data={dataJob}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.typeItems}
                      onPress={() => {
                        setJobAs(item.job);
                        setIsSelected(false);
                      }}
                    >
                      <Text style={styles.text}>{item.job}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : null}

          {jobAs === "Having a Team" && (
            <>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => setModal(true)}
                // onPress={()=>setPopUp(true)}
              >
                <Text style={styles.btnText}>Create Team</Text>
              </TouchableOpacity>
            </>
          )}

          {/* create team data */}
          {/* {jobAs === "Having a Team" && member === false ? null :  */}
          {/* <View>
  {[...Array(viewCount)].map((_, index) => ( */}

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
                  Create Your Own Team
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
                placeholder=" Team Name"
                style={[styles.textInput, { marginTop: 30 }]}
                value={teamName}
                onChangeText={setTeamName}
              />

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
                    Create Team
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <View>
              {jobAs === "Having a Team" &&
                myArray.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => handleItemClick(item.id)}
                    >
                      <View>
                        <View
                          style={{
                            height: 80,
                            width: "90%",
                            borderRadius: 10,
                            backgroundColor: "rgba(40, 79, 73, 0.2)",
                            marginLeft: 20,
                            marginTop: 10,
                          }}
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
                                marginTop: 5,
                              }}
                            >
                              {/* {userData.teams[0].teamName} */}
                              {item.teamName}
                              {/* {teamName} */}
                            </Text>
                            <Text
                              style={{
                                fontFamily: "Poppins",
                                fontSize: 12,
                                width: 130,
                                borderRadius: 8,
                                backgroundColor: "#FF8700",
                                color: "#fff",
                                marginRight: 20,
                                textAlign: "center",
                                height: 20,
                                marginTop: 5,
                              }}
                            >
                              Team Member : 05
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                            }}
                          >
                            <View style={{ marginTop: 3 }}>
                              <Text
                                style={{
                                  fontFamily: "Poppins",
                                  fontSize: 12,
                                  fontWeight: 400,
                                  marginLeft: 20,
                                  width: 250,
                                }}
                              >
                                Created on: {formatDate(item.createdAt)}
                              </Text>
                            </View>
                            <View
                              style={{ marginRight: 20, flexDirection: "row" }}
                            >
                              <TouchableOpacity
                                // onPress={() => setUpdateModal(true)}
                                onPress={() => editTeamName(item.id)}
                              >
                                <Image
                                  source={require("../assets/worktype/edit.png")}
                                  style={[styles.icon, { marginRight: 10 }]}
                                />
                              </TouchableOpacity>

                              <TouchableOpacity
                                onPress={() =>
                                  handlePress(item.id, item.teamName)
                                }
                              >
                                <Image
                                  source={require("../assets/worktype/trash.png")}
                                  style={styles.icon}
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
            </View>
          )}

          {/* Update team Name */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={updateModal}
            onRequestClose={() => {
              setUpdateModal(false);
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
                  Update Team Name
                </Text>
                <TouchableOpacity
                  onPress={() => setUpdateModal(false)}
                  style={{ marginRight: 20 }}
                >
                  <Image
                    source={require("../assets/worktype/close.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <TextInput
                placeholder=" Team Name"
                style={[styles.textInput, { marginTop: 30 }]}
                value={updateTeamName}
                onChangeText={setUpdateTeamName}
              />

              <TouchableOpacity
                onPress={handleSubmit2}
                // OnPress={updateHandleSubmit}
              >
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
                    Update Team Name
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>

          {/* ))}
</View>  */}

          {/* } */}

          {/* When the user is working with someone else */}
          {/* <Modal animationType="slide"
       transparent={false}
       visible={popUp}
       onRequestClose={()=>{setPopUp(false);
       }}>

        <View style={{width:'90%',height:200,borderRadius:10,backgroundColor: "#dfe5e4",alignItems:'center',position:'absolute',justifyContent:'center',marginLeft:20,marginTop:250}}>
        <Text style={{width:50,height:50,borderRadius:30,backgroundColor:'#ff9999',color:'red',fontSize:18,textAlign:'center',paddingTop:10,fontWeight:'bold',margin:10}}>X</Text>
          <Text style={{fontSize:18,fontFamily:'Poppins',fontWeight:600,color:"#284F49",textAlign:'center'}}>Mohan is already working with <Text style={{fontSize:18,fontWeight:'bold',color:"#284F49"}}>Prakher</Text>(Noida)</Text>
          <TouchableOpacity onPress={()=>setPopUp(false)}>
          <View
            style={{
              marginTop: 5,
              backgroundColor: "#284F49",
              height: 30,
              width: 80,
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
              Okay
            </Text>
          </View>
          </TouchableOpacity>
        
        </View>
       </Modal> */}

          <TouchableOpacity
          // onPress={handleSubmit}
          >
            <View
              style={{
                // marginLeft: 20,
                alignSelf: "center",
                marginTop: 520,
                backgroundColor: "#284F49",
                height: 50,
                width: "90%",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
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
    </ScrollView>
  );
};

export default WorkType;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // width: "100%",
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
  btnContainer: {
    width: 120,
    height: 30,
    borderRadius: 6,
    backgroundColor: "#284F49",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
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
    height: 230,
    position: "absolute",
    bottom: 2,
    backgroundColor: "#dfe5e4",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
