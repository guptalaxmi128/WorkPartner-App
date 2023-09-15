import React, {useState} from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
const Complete = () => {
  const navigation=useNavigation();
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
        <TouchableOpacity  onPress={ () => navigation.navigate('MoreDetails')}>
        <View
          style={{
            // flexDirection: "row",
            // justifyContent: "space-between",
            paddingBottom: 16,
          }}
        >
          {/* <View
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
          </View> */}
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins",
              color: "#284F49",
            //   marginRight: 20,
            marginLeft:250,
              marginTop: 5,
            //   fontWeight: "bold",
            }}
          >
            More Details
            <Image
              source={require("../assets/job-icon/arrow.png")}
              style={styles.img}
            />
          </Text>
        </View>
        </TouchableOpacity>
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
        <TouchableOpacity  onPress={ () => navigation.navigate('MoreDetails')}>
        <View
          style={{
            // flexDirection: "row",
            // justifyContent: "space-between",
            paddingBottom: 16,
          }}
        >
          {/* <View
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
          </View> */}
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins",
              color: "#284F49",
            //   marginRight: 20,
            marginLeft:250,
              marginTop: 5,
            //   fontWeight: "bold",
            }}
          >
            More Details
            <Image
              source={require("../assets/job-icon/arrow.png")}
              style={styles.img}
            />
          </Text>
        </View>
        </TouchableOpacity>
      </View> 
    </View>
  );
};

export default Complete;

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
});
