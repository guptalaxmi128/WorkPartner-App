import React,{useState} from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Modal,
    FlatList
  } from "react-native";
  import { useNavigation } from '@react-navigation/native';
  import CalendarPicker from 'react-native-calendar-picker';

// const data=[
//   {
//     id:1,
//     date:"Friday, 24 March 2023"
//   },
//   {
//     id:2,
//     date:"Friday, 24 March 2023"
//   },
//   {
//     id:3,
//     date:"Friday, 24 March 2023"
//   },
//   {
//     id:4,
//     date:"Friday, 24 March 2023"
//   },
//   {
//     id:5,
//     date:"Friday, 24 March 2023"
//   },
//   {
//     id:6,
//     date:"Friday, 24 March 2023"
//   },
//   {
//     id:7,
//     date:"Friday, 24 March 2023"
//   }
// ]

const History = () => {
    const navigation=useNavigation();
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
        setModalVisible(false);
      } else {
        // If a single date is selected
        setSelectedDates([new Date(date)]);
        setModalVisible(false);
      }
    };
    return (
        <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:"90%",marginTop:10,marginBottom:10}}>
        <View style={{width:'82%',height:50,borderRadius:10,borderWidth:1,borderColor:'#dcdcdc',marginLeft:5}}>
       
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={{width:48,height:50,borderRadius:10,borderColor:'#dcdcdc',borderWidth:1,marginRight:5}}>
        <Image
              source={require("../assets/history/textalign-right.png")}
              style={styles.icon}
            />
        </View>
        </TouchableOpacity>
     
        </View>
        <Modal visible={modalVisible} animationType="slide"
           onRequestClose={()=>{setModalVisible(false);
           }}>
             <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{ marginLeft: 340 }}
                // style={{margin:10}}
              >
                <Image
                  source={require("../assets/worktype/close.png")}
                  style={styles.icon}
                />
              </TouchableOpacity>
        <CalendarPicker
        onDatesChange={onDatesChange}
        selectedStartDate={selectedDates[0]}
        selectedEndDate={selectedDates[selectedDates.length - 1]}
        allowRangeSelection={true}
        selectedDayColor="#284F49"
        selectedDayTextColor="#FFFFFF"
        textStyle={{fontSize:16,fontFamily:'Poppins',}}
      /> 
        </Modal>
     

{/*        
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity  onPress={ () => navigation.navigate('HistorySection')} >
                  <View style={styles.viewStyle}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.textStyle}>{item.date}</Text>
                <Image
            source={require("../assets/history/arrow.png")}
            style={{width:20,height:20,marginRight:15,marginTop:15}}
          />
            </View>
            </View>
            </TouchableOpacity>
               ) }}
            /> */}
          
       
        <TouchableOpacity  onPress={ () => navigation.navigate('HistorySection')} style={styles.viewStyle}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.textStyle}>Friday, 24 March 2023</Text>
                <Image
            source={require("../assets/history/arrow.png")}
            style={{width:20,height:20,marginRight:15,marginTop:15}}
          />
            </View>
            </TouchableOpacity>
            {/* second */}
            <TouchableOpacity  onPress={ () => navigation.navigate('HistorySection')} style={styles.viewStyle}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.textStyle}>Friday, 24 March 2023</Text>
                <Image
            source={require("../assets/history/arrow.png")}
            style={{width:20,height:20,marginRight:15,marginTop:15}}
          />
            </View>
            </TouchableOpacity>
            {/* third */}
            <TouchableOpacity  onPress={ () => navigation.navigate('HistorySection')} style={styles.viewStyle}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.textStyle}>Friday, 24 March 2023</Text>
                <Image
            source={require("../assets/history/arrow.png")}
            style={{width:20,height:20,marginRight:15,marginTop:15}}
          />
            </View>
            </TouchableOpacity>
            {/* fourth */}
            <TouchableOpacity  onPress={ () => navigation.navigate('HistorySection')} style={styles.viewStyle}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.textStyle}>Friday, 24 March 2023</Text>
                <Image
            source={require("../assets/history/arrow.png")}
            style={{width:20,height:20,marginRight:15,marginTop:15}}
          />
            </View>
            </TouchableOpacity>
            {/* five */}
            <TouchableOpacity  onPress={ () => navigation.navigate('HistorySection')} style={styles.viewStyle}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.textStyle}>Friday, 24 March 2023</Text>
                <Image
            source={require("../assets/history/arrow.png")}
            style={{width:20,height:20,marginRight:15,marginTop:15}}
          />
            </View>
            </TouchableOpacity>
            {/* six */}
            <TouchableOpacity  onPress={ () => navigation.navigate('HistorySection')} style={styles.viewStyle}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.textStyle}>Friday, 24 March 2023</Text>
                <Image
            source={require("../assets/history/arrow.png")}
            style={{width:20,height:20,marginRight:15,marginTop:15}}
          />
            </View>
            </TouchableOpacity> 
            {/* seven */}
            <TouchableOpacity  onPress={ () => navigation.navigate('HistorySection')} style={styles.viewStyle}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.textStyle}>Friday, 24 March 2023</Text>
                <Image
            source={require("../assets/history/arrow.png")}
            style={{width:20,height:20,marginRight:15,marginTop:15}}
          />
            </View>
            </TouchableOpacity>
            <TouchableOpacity
          style={{
            marginTop: 85,
            backgroundColor: "#284F49",
            height: 50,
            width: "88%",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Update
            </Text>
          </View>
        </TouchableOpacity>
           
        </View>
    );
}


export default History;
const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    icon:{
        width:25,
        height:25,
       margin:10
    },
    viewStyle:{
        width:'88%',height:50,elevation:3,backgroundColor:'#fff',marginTop:10,borderRadius:10
    },
    textStyle:{
        fontSize:16,fontFamily:'Poppins',padding:15
    }
});