import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import moment from "moment";
import "moment-timezone";
import CalendarStrip from "react-native-calendar-strip";
import TimeSlot from "./TimeSlot";
import Header from "./Header";
import { useAddWorkingHourMutation, useGetWorkingHourQuery, useUpdateWorkingHourMutation } from "../services/signUpApi";

// let datesWhiteList = [
//   {
//     start: moment(),
//     // end: moment().add(3, "days"),
//     end:moment(),
//   },
// ];

// const istDate = moment.tz('Asia/Kolkata').format();
// const timestamp = istDate;
// const istTime = moment(timestamp).tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss');

// let datesWhiteList = [
//   {
//     start: istTime,
//     end: istTime,
//   },
// ];

const istDate = moment.tz("Asia/Kolkata").format("YYYY-MM-DD");
const startDate = moment.tz(`${istDate} 12:30:00`, "Asia/Kolkata").format();
const startDateIST = moment
  .tz(startDate, "Asia/Kolkata")
  .format("YYYY-MM-DD HH:mm:ss");

const endDate = moment
  .tz(`${istDate} 11:30:00`, "Asia/Kolkata")
  // .add(1, "day")
  .format();
const endDateIST = moment
  .tz(endDate, "Asia/Kolkata")
  .format("YYYY-MM-DD HH:mm:ss");

let datesWhiteList = [
  {
    start: startDateIST,
    end: endDateIST,
  },
];

const WorkingHours = () => {
  const [times, setTimes] = useState([]);
  const [id,setId]=useState('');
  const [workingHour] = useAddWorkingHourMutation();
  const [updateWorkingHour]=useUpdateWorkingHourMutation();
  const {data}=useGetWorkingHourQuery();
 
  useEffect(() => {
    if (data && data.length > 0) {
     setId(data[0].id)
    }
  }, [data]);
   
console.log(id)

  const handleChildArray = (array) => {
    setTimes(array);
  };
  console.log(datesWhiteList);
  const handleSubmit = async () => {
    if (id){
      const formData={
        id,times
      }
      const res = await updateWorkingHour(formData);
      alert("Working Hour updated successfully !");
      console.log(res);
    }else{
      const formData = {
        startingDate: startDateIST,
        endingDate: endDateIST,
        times,
      };
      const res = await workingHour(formData);
      alert("Working Hour added successfully !");
      console.log(res);
    }
  
  };
  return (
    <View style={styles.container}>
      <Header title={"Working hours"} icon={require("../assets/back.png")} />
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 200, fontFamily: "Poppins" }}>
          Select date your service?
        </Text>
        <View style={{ marginTop: 10 }}>
          <CalendarStrip
            calendarAnimation={{ type: "sequence", duration: 30 }}
            daySelectionAnimation={{
              type: "border",
              duration: 200,
              // borderWidth:1,
              borderHighlightColor: "white",
            }}
            style={{ height: 125, paddingTop: 20, paddingBottom: 10 }}
            calendarColor={"#fff"}
            dateNumberStyle={{
              color: "black",
              fontSize: 16,
              justifyContent: "space-between",
              fontFamily: "Poppins",
            }}
            dateNameStyle={{
              color: "black",
              fontSize: 16,
              fontFamily: "Poppins",
              justifyContent: "space-between",
            }}
            highlightDateNameStyle={{
              color: "orange",
              fontSize: 16,
              fontWeight: "bold",
            }}
            highlightDateNumberStyle={{ color: "orange", fontWeight: "bold" }}
            disabledDateNameStyle={{
              color: "gray",
              fontSize: 16,
              fontFamily: "Poppins",
              justifyContent: "space-between",
            }}
            disabledDateNumberStyle={{
              color: "gray",
              fontSize: 16,
              justifyContent: "space-between",
              fontFamily: "Poppins",
            }}
            datesWhitelist={datesWhiteList}
            calendarHeaderStyle={{ fontFamily: "Poppins", fontWeight: 200 }}
            iconLeftStyle={{ width: 10, height: 10 }}
            iconRightStyle={{ width: 10, height: 10 }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{ fontSize: 20, fontWeight: 200, fontFamily: "Poppins" }}
          >
            Select timing your service?
          </Text>
        </View>
      </View>
      <TimeSlot onChildArrayChange={handleChildArray} />
      <TouchableOpacity onPress={handleSubmit}>
        <View
          style={{
            margin: 20,
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
              fontSize: 18,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Save
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    //   padding:16,
  },
});

export default WorkingHours;
