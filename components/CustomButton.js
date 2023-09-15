import React from 'react';
import { TouchableOpacity,StyleSheet,View,Text } from 'react-native';

const CustomButton = ({text,onPress}) => {
    return (
       <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
         <Text style={styles.textStyle}>
           {text}
         </Text>
       </TouchableOpacity>
    );
}



export default CustomButton;
const styles = StyleSheet.create({
    btnContainer:{
        position:'absolute',
        bottom:20,
        marginLeft: 20,
        backgroundColor: "#284F49",
        height: 50,
        width: "90%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    }
})