import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Modal,
    TextInput,
 
    Alert
  } from "react-native";
const HireMeModal = () => {
    return (
        //this component is use for custom alert not working yet
        <View style={styles.container}>
        <Modal visible={true}>
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'rgba(0,0,0,0.5)'
            }}>
            <View style={{width:"90%",height:"30%",backgroundColor:"#fff",borderRadius:10}}>
<Text>HireMeModal</Text>
            </View>

            </View>
            </Modal>
        </View>
    );
}


export default HireMeModal;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
});