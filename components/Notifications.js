import React, { useState} from 'react';
import { Text,View,StyleSheet } from 'react-native';
import Header from './Header';
import CustomSwitch from './CustomSwitch';
import General from './General';

const Notifications = () => {
    const [courseTab,setCourseTab]=useState(1);
    const onSelectSwitch=(value) =>{
        setCourseTab(value);
     }
   
    return (
    <View style={styles.container}>
         <Header title={"Notification"} icon={require("../assets/back.png")} />
      <CustomSwitch selectionMode={1} 
            option1="General"
            option2="Recommended"
            onSelectSwitch={onSelectSwitch}
          />
          <View>
          {courseTab == 1 && <General />}
         {courseTab == 2 && <Text>Recommended</Text>}
          </View>
       
    </View>
      
       
    );
}



export default Notifications;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    //   alignItems: "center",
    //   width: "100%",
    },
});