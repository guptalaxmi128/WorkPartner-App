import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    FlatList,
  } from "react-native";
import moment from "moment";

const data= [
  {
    id:1,
    timeSlot:"10:00 AM",
    selected:false
  },
  {
    id:2,
    timeSlot:"10:30 AM",
    selected:false
  },
  {
    id:3,
    timeSlot:"11:00 AM",
    selected:false
  },
  {
    id:4,
    timeSlot:"11:30 AM",
    selected:false
  },
  {
    id:5,
    timeSlot:"12:00 PM",
    selected:false
  },
  {
    id:6,
    timeSlot:"12:30 PM",
    selected:false
  },
  {
    id:7,
    timeSlot:"1:00 PM",
    selected:false
  }
]


const TimeSlot = ({onChildArrayChange}) => {
    // const [selectedSlot,setSelectedSlot]=useState(-1);
    // const [timeSlots, setTimeSlots] = useState([]);
    // const createTimeSlots = (fromTime, toTime) => {
    //   // alert(fromTime)
    //   let startTime = moment(fromTime, "hh:mm A");
    //   let endTime = moment(toTime, "hh:mm A");
    //   if (endTime.isBefore(startTime)) {
    //     endTime.add(1, "day");
    //   }
    //   let arr = [];
    //   while (startTime <= endTime) {
    //     arr.push(new moment(startTime).format("hh:mm A"));
    //     startTime.add(30, "minutes");
    //   }
    //   return arr;
    // };
    // useEffect(() => {
    //   // let slots=createTimeSlots('8:00','16:00');
    //   // console.log(slots);
    //   setTimeSlots(createTimeSlots("10:00 AM", "13:00 PM"));
    // }, []);

  const [select,setSelect]=useState(data)
   
  const handlePress =(item)=>{
const newItem=select.map((value)=>{
  if(value.id===item.id){
    return {...value,selected:!value.selected}
  }else{
    return value;
  }
})
setSelect(newItem);
onChildArrayChange(newItem);
  }

    return (
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            // keyExtractor={({item,index})=> index}
            // data={timeSlots}
            keyExtractor={(item)=>item.id}
            data={select}
            renderItem={({item,index})=>{
                return(
                    // <TouchableOpacity style={[styles.timeSlot,{borderColor:selectedSlot == index ? 'orange' : 'gray'}]} onPress={()=>setSelectedSlot(index)}>
                    //     <Text style={{fontSize:18 , color:selectedSlot == index ? 'orange':'black'}}>{item}</Text>
                    // </TouchableOpacity>
                     <TouchableOpacity style={[styles.timeSlot,{borderColor:item.selected == true ? 'orange' : 'gray'}]} onPress={()=>handlePress(item)}>
                        <Text style={{fontSize:18 , color:item.selected == true ? 'orange':'black'}}>{item.timeSlot}</Text>
                    </TouchableOpacity>
                )
            }}
             />
            </View>
    );
}

const styles = StyleSheet.create({
    timeSlot: {
     width:170,
     height:45,
     borderRadius:10,
     borderWidth:1,
     justifyContent:'center',
     alignItems:'center',
     margin:10,
    },
  });


export default TimeSlot;