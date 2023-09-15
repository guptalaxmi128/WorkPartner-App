import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image
  } from "react-native";
import Header from './Header';
import { Avatar } from "react-native-elements";
const Wallet = ({navigation}) => {
    return (
        <View style={styles.container}>
       <Header title={'Wallet'} icon={require('../assets/back.png')} />
       <View style={{backgroundColor:"#284F49",width:'100%',height:325}}>
       <View style={{margin:20,flexDirection:'row'}} >
       <Avatar
          rounded
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          }}
          size={50}
        />
        <View style={{marginLeft:10}}>
            <Text style={{fontSize:14,fontFamily:'Poppins',fontWeight:500,color:"white"}}>Hello,</Text>
            <Text style={{fontSize:14,fontFamily:'Poppins',fontWeight:500,color:"white"}}>Abdullah!</Text>
        </View>
        </View>
        <View style={{width:350,height:210,backgroundColor:' linear-gradient(229.57deg, #284F49 -0.79%, rgba(0, 0, 0, 0.36) 73%);',borderRadius:20,marginLeft:20,marginRight:20}}>
            <Text style={{width:350,textAlign:'center',fontSize:14,color:'#B2A1E4',height:20,fontWeight:400,fontFamily:'Poppins',marginTop:30}}>Main balance</Text>
            <Text style={{width:350,textAlign:'center',fontSize:32,color:"#fff",fontFamily:'Poppins',marginTop:2,height:50,fontWeight:'bold'}}>₹ 14,235</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',margin:20}}>
        <View >
        {/* <Image
          style={{ width: 20, height: 20 ,marginLeft:20}}
          source={require("../assets/wallet/export.png")}
        /> */}
        <Text style={{fontSize:18,color:'#fff',marginLeft:60}}>₹</Text>
        <Text style={{fontFamily:'Poppins',fontSize:14,fontWeight:400,color:"white",textAlign:'center',marginLeft:40}}>Earning</Text>
        </View>
        <View style={styles.hr} />
        <TouchableOpacity 
     onPress={ () => navigation.navigate('Withdraw')}
      >
        <View>
        <Image
          style={{ width: 20, height: 20 ,marginLeft:20 }}
          source={require("../assets/wallet/import.png")}
        />
               <Text style={{fontFamily:'Poppins',fontSize:14,fontWeight:400,color:"white",textAlign:'center',marginTop:5,marginRight:30}}>Withdraw</Text>
        </View>
        </TouchableOpacity>
        {/* <View style={styles.hr} />
        <View>
        <Image
          style={{ width: 20, height: 20,marginLeft:20}}
          source={require("../assets/wallet/status.png")}
        />
               <Text style={{fontFamily:'Poppins',fontSize:14,fontWeight:400,color:"white",textAlign:'center',marginTop:5}}>Transfer</Text>
        </View> */}
        </View>
        </View>
      
      
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between',width:360,marginTop:20}}>
        <Text style={{fontFamily:'Poppins',fontSize:16,fontWeight:600,marginLeft:10}}>Latest Transactions</Text>
        <Text style={{fontFamily:'Poppins',fontSize:16,fontWeight:600,marginRight:10,color:'#8e8e8e'}}>View all</Text>
        
          
        </View>
        <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop:10}}>
        
         <View style={{marginRight:20,flexDirection:'row'}} >
         <Image
          style={{ width: 45, height: 45,marginLeft:20,borderWidth:1,borderRadius:10,borderColor:'gray' }}
          source={require("../assets/home/sun.png")}
        />
        <View style={{marginLeft:10,width:100}}>
            <Text style={{fontSize:14,fontFamily:'Poppins',fontWeight:500,}}>Project Name</Text>
            <Text style={{fontSize:12,fontFamily:'Poppins',fontWeight:500,color:"#8e8e8e"}}>Today 12:32</Text>
            </View>
        </View>
        <View style={{marginLeft:15,flexDirection:'row'}}>
        <Text style={{fontSize:14,fontFamily:'Poppins',fontWeight:500,color:"red"}}>-₹35.23</Text>
        <Image
          style={{ width: 20, height: 20, marginRight: 20,marginLeft:5 }}
          source={require("../assets/profile-icon/arrow-right.png")}
        />
        </View>
         </View>
         <View style={styles.hr1} />
         {/* second */}
         <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop:10}}>
        
        <View style={{marginRight:20,flexDirection:'row'}} >
        <Image
         style={{ width: 45, height: 45,marginLeft:20,borderWidth:1,borderRadius:10,borderColor:'gray' }}
         source={require("../assets/home/sun.png")}
       />
       <View style={{marginLeft:10,width:100}}>
           <Text style={{fontSize:14,fontFamily:'Poppins',fontWeight:500,}}>Project Name</Text>
           <Text style={{fontSize:12,fontFamily:'Poppins',fontWeight:500,color:"#8e8e8e"}}>yesterday 02:12</Text>
           </View>
       </View>
       <View style={{marginLeft:15,flexDirection:'row'}}>
       <Text style={{fontSize:14,fontFamily:'Poppins',fontWeight:500,color:"green"}}>+₹ 430.00</Text>
       <Image
         style={{ width: 20, height: 20, marginRight: 20,marginLeft:5 }}
         source={require("../assets/profile-icon/arrow-right.png")}
       />
       </View>
        </View>
        <View style={styles.hr1} />
        {/* third */}
        <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop:10}}>
        
        <View style={{marginRight:20,flexDirection:'row'}} >
        <Image
         style={{ width: 45, height: 45,marginLeft:20,borderWidth:1,borderRadius:10,borderColor:'gray' }}
         source={require("../assets/home/sun.png")}
       />
       <View style={{marginLeft:10,width:100}}>
           <Text style={{fontSize:14,fontFamily:'Poppins',fontWeight:500,}}>Project Name</Text>
           <Text style={{fontSize:12,fontFamily:'Poppins',fontWeight:500,color:"#8e8e8e"}}>Dec 24 12:32</Text>
           </View>
       </View>
       <View style={{marginLeft:15,flexDirection:'row'}}>
       <Text style={{fontSize:14,fontFamily:'Poppins',fontWeight:500,color:"red"}}>-₹ 13.00</Text>
       <Image
         style={{ width: 20, height: 20, marginRight: 20,marginLeft:5 }}
         source={require("../assets/profile-icon/arrow-right.png")}
       />
       </View>
        </View>
        <View style={styles.hr1} />
       
        </View>
    );
}


export default Wallet;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
     
    },
    hr: {
      
        borderWidth:1,
        borderColor:'#6F45E9',
        height:35,
        position: "relative",
        left: "50%",
        marginLeft: -50,
        top: 5,
      
      },
      hr1: {
        position: "relative",
        width: "100%",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        opacity: 0.1,
        // marginLeft: 15,
        // marginRight: 20,
        marginTop: 5,
        // marginBottom: 10,
      },
  });