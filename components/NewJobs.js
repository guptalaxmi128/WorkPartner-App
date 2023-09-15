import React, {useState} from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,FlatList
} from "react-native";
import { useNavigation } from '@react-navigation/native';
const job = [
  {
    id: 1,
    job: "Hourly",
  },
  {
    id: 2,
    job: "Daily",
  },
  {
    id: 3,
    job: "Monthly",
  },
  {
    id: 4,
    job: "Project",
  },
];
const NewJobs = () => {
  const navigation=useNavigation();
  const [modal, setModal] = useState(false);
  const [jobAs, setJobAs] = useState("Select Rates for");
  const [isSelected, setIsSelected] = useState(false);
  const [dataJob, setDataJob] = useState(job);
  const [rates,setRates]=useState("");
  return (
    <View style={styles.container}>
      {/* First card */}
       <View style={styles.cardContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 5,
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: "600", fontFamily: "Poppins" }}
          >
            Product Name
          </Text>
          <Image
            source={require("../assets/job-icon/save1.png")}
            style={{ marginRight: 20, width: 20, height: 20, marginTop: 4 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/job-icon/location.png")}
              style={styles.img}
            />
            <Text
              style={{ marginLeft: 4, fontSize: 14, fontFamily: "Poppins" }}
            >
              Area
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginRight: 100 }}>
            <Image
              source={require("../assets/job-icon/pincode.png")}
              style={styles.img}
            />
            <Text
              style={{ marginLeft: 4, fontSize: 14, fontFamily: "Poppins" }}
            >
              Pincode
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 2 }}>
            <Image
              source={require("../assets/job-icon/date.png")}
              style={styles.img}
            />
            <Text
              style={{ marginLeft: 4, fontSize: 14, fontFamily: "Poppins" }}
            >
              Start Date
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginRight: 95, marginTop: 2 }}>
            <Image
              source={require("../assets/job-icon/date.png")}
              style={styles.img}
            />
            <Text
              style={{ marginLeft: 4, fontSize: 14, fontFamily: "Poppins" }}
            >
              End Date
            </Text>
          </View>
        </View>
        <View style={styles.hr} />
        <View style={{ width: 300, height: 48, marginLeft: 20 }}>
          <Text
            style={{
              fontSize: 11,
              fontFamily: "Poppins",
              fontWeight: 400,
              justifyContent: "center",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry .
          </Text>
        </View>
        <View style={styles.hr} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 16,
          }}
        >
          <TouchableOpacity
          //  onPress={()=>navigation.navigate('Orders')}
          onPress={()=>setModal(true)}
          >
          <View
            style={{
              width: 80,
              height: 30,
              backgroundColor: "#284F49",
              marginLeft: 20,
              marginTop: 5,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Hire me
            </Text>
          </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins",
              color: "#284F49",
              marginRight: 20,
              marginTop: 5,
              // fontWeight: "bold",
            }}
          >
            More Details
            <Image
              source={require("../assets/job-icon/arrow.png")}
              style={styles.img}
            />
          </Text>
        </View>
      </View> 
      {/* Second card */}
      <View style={styles.cardContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 5,
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: "600", fontFamily: "Poppins" }}
          >
            Product Name
          </Text>
          <Image
            source={require("../assets/job-icon/save1.png")}
            style={{ marginRight: 20, width: 20, height: 20, marginTop: 4 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/job-icon/location.png")}
              style={styles.img}
            />
            <Text
              style={{ marginLeft: 4, fontSize: 14, fontFamily: "Poppins" }}
            >
              Area
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginRight: 100 }}>
            <Image
              source={require("../assets/job-icon/pincode.png")}
              style={styles.img}
            />
            <Text
              style={{ marginLeft: 4, fontSize: 14, fontFamily: "Poppins" }}
            >
              Pincode
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 2 }}>
            <Image
              source={require("../assets/job-icon/date.png")}
              style={styles.img}
            />
            <Text
              style={{ marginLeft: 4, fontSize: 14, fontFamily: "Poppins" }}
            >
              Start Date
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginRight: 95, marginTop: 2 }}>
            <Image
              source={require("../assets/job-icon/date.png")}
              style={styles.img}
            />
            <Text
              style={{ marginLeft: 4, fontSize: 14, fontFamily: "Poppins" }}
            >
              End Date
            </Text>
          </View>
        </View>
        <View style={styles.hr} />
        <View style={{ width: 300, height: 48, marginLeft: 20 }}>
          <Text
            style={{
              fontSize: 11,
              fontFamily: "Poppins",
              fontWeight: 400,
              justifyContent: "center",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry .
          </Text>
        </View>
        <View style={styles.hr} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 16,
          }}
        >
         <TouchableOpacity 
        //  onPress={()=>navigation.navigate('Orders')}
        onPress={()=>setModal(true)}
         >
          <View
            style={{
              width: 80,
              height: 30,
              backgroundColor: "#284F49",
              marginLeft: 20,
              marginTop: 5,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Hire me
            </Text>
          </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins",
              color: "#284F49",
              marginRight: 20,
              marginTop: 5,
              // fontWeight: "bold",
            }}
          >
            More Details
            <Image
              source={require("../assets/job-icon/arrow.png")}
              style={styles.img}
            />
          </Text>
        </View>
      </View> 

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
                  Enter Your Rates
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
                placeholder="Enter Your Rates"
                style={[styles.textInput, { marginTop: 30 }]}
                value={rates}
                onChangeText={setRates}
              />

              
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

              <TouchableOpacity 
              // onPress={handleSubmit}
              onPress={()=>navigation.navigate('Orders')}
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
                    Submit
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
    </View>
  );
};

export default NewJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
  },
  cardContainer: {
    margin: 10,
    width: 360,
    height: 225,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
  },
  img: {
    width: 15,
    height: 15,
    marginTop: 3,
  },
  hr: {
    position: "relative",
    width: "90%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    opacity: 0.2,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    marginTop: 5,
  },
  dropDownSelector: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#8e8e8e",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
    backgroundColor:'#fff',
    marginTop:10
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
    borderColor: "#8e8e8e",
    fontSize: 16,
    padding: 12,
    fontFamily: "Poppins",
    backgroundColor:'#fff'
  },
  icon: {
    width: 20,
    height: 20,
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
