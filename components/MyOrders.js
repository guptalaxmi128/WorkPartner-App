import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image,Modal,Button } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Header from './Header';
const MyOrders = () => {
    const [modalVisible,setModalVisible]=useState(false);
    const [selectedDates, setSelectedDates] = useState([]);

  const onDatesChange = (date, type) => {
    if (type === 'END_DATE') {
      // If a range of dates is selected
      const range = [];
      let startDate = selectedDates[0];
      while (startDate <= date) {
        range.push(new Date(startDate));
        startDate.setDate(startDate.getDate() + 1);
      }
      setSelectedDates(range);
    } else {
      // If a single date is selected
      setSelectedDates([new Date(date)]);
    }
  };
    return (
<View style={styles.container}>
<Header title={"My Orders"} icon={require("../assets/back.png")} />
<TouchableOpacity onPress={() => setModalVisible(true)}>
<Image
  source={require("../assets/history/textalign-right.png")}
  style={styles.icon}
/>
</TouchableOpacity>
{modalVisible &&  <CalendarPicker
        onDatesChange={onDatesChange}
        selectedStartDate={selectedDates[0]}
        selectedEndDate={selectedDates[selectedDates.length - 1]}
        allowRangeSelection={true}
        selectedDayColor="#284F49"
        selectedDayTextColor="#FFFFFF"
        todayBackgroundColor="#284F49"
        textStyle={{fontSize:16,fontFamily:'Poppins',}}
      /> }
</View>
    );
}



export default MyOrders;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    //   width: "100%",
    },
    img:{
        width:30,
        height:30,
      
    }
});


// import React, { useState } from 'react';
// import { View, FlatList, Image, TouchableOpacity, Text } from 'react-native';
// import * as ImagePicker from "expo-image-picker";

// const data = [
//   { id: 1, uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
//   { id: 2, uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
//   { id: 3, uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
//   { id: 4, uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
//   { id: 5, uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
//   { id: 6, uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
//   { id: 7, uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
//   { id: 8, uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
// ];

// const ImageComponent = ({ uri }) => (
//   <View style={{ flex: 1, padding: 10 }}>
//     <Image source={{ uri }} style={{ width: 45, height: 45 }} />
//   </View>
// );

// const MyOrders = () => {
//     const [image, setImage] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   const renderItem = (image,index) =>  
//    <Image
//   key={index}
//   source={{ uri: image.item.uri }}
//   style={{
//     width: 45,
//     height: 45,
//     borderRadius: 5,
//     marginTop: 10,
//     // marginBottom: 10,
//     borderWidth: 1,
//     // borderColor: "gray",
//     // borderStyle: "dashed",
//     marginLeft:5,
//     marginRight:5
//   }}
// />;

//   const renderLoadMore = () => (
//     <TouchableOpacity onPress={() => setShowAll(true)}>
//       <View style={{ backgroundColor: '#dcdcdc',width:45,height:45,borderRadius:5,marginLeft:60,marginTop:20 }}>
//         <Text style={{ color: 'black' }}>+{image.length - 4}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const renderUploadIcon = () => (<>
//   <View style={{flexDirection:'row'}}>
//     <TouchableOpacity onPress={() => setShowAll(true)}>
//     <View style={{ backgroundColor: '#dcdcdc',width:45,height:45,borderRadius:5,marginLeft:10}}>
//       <Text style={{ color: 'black',textAlign:'center',marginTop:10 }}>+{image.length - 3}</Text>
//     </View>
//   </TouchableOpacity>
//     <TouchableOpacity onPress={() => openImageSelector()}>
//       <View style={{ backgroundColor: '#dcdcdc',width:45,height:45,borderRadius:5,marginLeft:10,marginBottom:10}}>
//       <Image
//                   style={{
//                     width: 20,
//                     height: 20,
//                     justifyContent: "center",
//                     alignSelf: "center",
//                     alignItems: "center",
//                     marginTop:10,
//                   }}
//                   source={require("../assets/newsnaglist/upload.png")}
//                 />
//       </View>
//     </TouchableOpacity>
//     </View>
//     </>
//   );

//   const openImageSelector = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsMultipleSelection: true,
//         // allowsEditing: true,
//         selectionLimit: 6,
//         aspect: [4, 3],
//         quality: 1,
//       });
  
//       // console.log(result);
  
//       // if (!result.canceled) {
//       //   setImage(result.assets[0].uri);
//       // }
//       if (!result.cancelled) {
//         setImage(result.assets);
//       }
//   };

//   return (
//     <TouchableOpacity onPress={openImageSelector}>
//     <View
//     style={{
//       width: 170,
//       height: 120,
//       borderRadius: 10,
//       borderWidth: 1,
//       borderColor: "gray",
//       marginTop: 10,
//       borderStyle: "dashed",
//       backgroundColor: "#dfe5e4",
//       justifyContent:'center'
//     }}
//   >
//       <FlatList
//       numColumns={3}
//         data={showAll ? image : image.slice(0, 3)}
//         // data={image}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}

//         // ListHeaderComponent={renderLoadMore}
//       />
//       { image.length === 0 ? null : renderUploadIcon()}
//     </View>
//     </TouchableOpacity>
//   );
// };

// export default MyOrders;

