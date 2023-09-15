import React,{useState} from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
  } from "react-native";
import Header from './Header';
import CustomSwitch from './CustomSwitch';
import UpdateStatus from './UpdateStatus';
import History from './History';

const UpdateStatusParent = () => {
    const [courseTab,setCourseTab]=useState(1);
    const onSelectSwitch=(value) =>{
        setCourseTab(value);
     }
    return (
        <View style={styles.container}>
               <Header title={"Update Status"} icon={require("../assets/back.png")} />
               <CustomSwitch selectionMode={1} 
            option1="Update Status"
            option2="History"
            onSelectSwitch={onSelectSwitch}
          />
           <View>
          {courseTab == 1 && <UpdateStatus />}
         {courseTab == 2 && <History />}
          </View>
        </View>
    );
}



export default UpdateStatusParent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      // alignItems: "center",
    },
});