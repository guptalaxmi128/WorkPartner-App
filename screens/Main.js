import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";

const Main = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1,marginTop:100 ,
      // backgroundColor:'pink'
      }}>
        <Image
          source={require("../assets/start-page/getstart.png")}
          style={{
            width: windowWidth,
            height: 250,
            // backgroundColor:'yellow',
            // justifyContent:'center',alignItems:'center',
          }}
        />
        <View style={{ justifyContent:'center',alignItems:'center',}}>
          <Text style={styles.heading}>Growing your </Text>
          <Text style={styles.heading}>business is easier</Text>
          <Text style={styles.heading}> than you think!</Text>
         
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Sign Up')}>
                {/* <TouchableOpacity onPress={()=>navigation.navigate('Working')}> */}

            <View
              style={{
                marginTop: 100,
                // marginTop:20,
                marginLeft:20,
                marginRight:20,
                

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
                  fontWeight: 'bold',
                  color: "#fff",
                }}
              >
                Get Started
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
          <View
            style={{
              margin: 20,
              borderWidth: 1,
              borderColor:"#dcdcdc",
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
                fontWeight: 'bold',
                color: "#284F49",
              }}
            >
              Sign in
            </Text>
          </View>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    // fontFamily: "Poppins",
    color:"#284F49",
  },
});

export default Main;
