import React,{useState} from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import Header from '../components/Header';
  import CustomSwitch from '../components/CustomSwitch';
  import Ongoing from '../components/Ongoing';
  import Complete from '../components/Complete';
const Orders = () => {
    const [courseTab,setCourseTab]=useState(1);
    const onSelectSwitch=(value) =>{
        setCourseTab(value);
     }
    return (
        <View style={styles.container}>
        <Header title={"My Orders"} icon={require("../assets/back.png")} />
        <CustomSwitch selectionMode={1} 
            option1="Ongoing"
            option2="Complete"
            onSelectSwitch={onSelectSwitch}
          />
           <View>
          {courseTab == 1 && <Ongoing />}
         {courseTab == 2 && <Complete />}
          </View>
            
        </View>
    );
}



export default Orders;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    //   alignItems: "center",
    //   width: "100%",
    },
});