import React, {useEffect} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const SplashScreen = ({navigation}) => {

    useEffect(()=>{
    setTimeout(()=>{
   navigation.navigate('Main')
    },3000);
    },[])
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logoimg.jpg")} style={styles.logo} />
      <Text style={styles.title}> Welcome Partner</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#284F49",
  },
  logo: {
    width: 110,
    height: 110,
    borderRadius:20
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "800",
    marginTop: 20,
  },
});

export default SplashScreen;
