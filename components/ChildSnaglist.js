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

import SnaglistHeader from "./SnaglistHeader";
const ChildSnaglist = () => {
  return (
    <View style={styles.container}>
  <SnaglistHeader title={'Work Partner'} icon={require('../assets/back.png')} />
      <View style={styles.searchArea}>
        <Image
          style={styles.icon}
          source={require("../assets/snag-icon/search-icon.png")}
        />
        <TextInput placeholder="Search" style={styles.input} />
        <Image style={styles.filter} source={require("../assets/snag-icon/filter.png")} />
      </View>
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 12,
          }}
        >
          <Text style={styles.text}>Work Partner</Text>
          <Image
            source={require("../assets/snag-icon/arrow-right.png")}
            style={styles.img}
          />
        </View>
      </View>
      {/* second */}
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 12,
          }}
        >
          <Text style={styles.text}>Lists</Text>
          <Image
            source={require("../assets/snag-icon/arrow-right.png")}
            style={styles.img}
          />
        </View>
      </View>
      {/* Third */}
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 12,
          }}
        >
          <Text style={styles.text}>Saved Jobs</Text>
          <Image
            source={require("../assets/snag-icon/arrow-right.png")}
            style={styles.img}
          />
        </View>
      </View>
      {/* Four */}
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 12,
          }}
        >
          <Text style={styles.text}>Help Center</Text>
          <Image
            source={require("../assets/snag-icon/arrow-right.png")}
            style={styles.img}
          />
        </View>
      </View>
      {/* five */}
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 12,
          }}
        >
          <Text style={styles.text}>Privacy Policy</Text>
          <Image
            source={require("../assets/snag-icon/arrow-right.png")}
            style={styles.img}
          />
        </View>
      </View>
      {/* six */}
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 12,
          }}
        >
          <Text style={styles.text}>Feedback</Text>
          <Image
            source={require("../assets/snag-icon/arrow-right.png")}
            style={styles.img}
          />
        </View>
      </View>
    </View>
  );
};

export default ChildSnaglist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  searchArea: {
    width: 360,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    marginTop: 14,
    borderWidth: 0.2,
    // marginLeft: 4,
    // paddingHorizontal: 20,
    borderRadius: 8,
  },
  icon: {
    width: 20,
    height: 20,
    opacity: 0.5,
    marginLeft: 10,
  },
  input: {
    paddingHorizontal: 10,
  },
  filter: {
    width: 15,
    height: 15,
    opacity: 0.4,
    marginLeft: 230,
    // backgroundColor: "transparent",
  },
  img: {
    width: 15,
    height: 15,
    marginRight: 10,
    marginTop: 3,
  },
  textContainer: {
    width: 360,
    height: 50,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#fff",
    marginTop: 14,
  },
  text: {
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: "300",
    marginLeft: 10,
    textAlign:'center',
  },
});
