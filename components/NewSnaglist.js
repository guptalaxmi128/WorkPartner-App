import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from "expo-image-picker";
import Video from "expo-av";
import Header from "./Header";

const type = [
  {
    id: 1,
    type: "Work Partner",
  },
  {
    id: 2,
    type: "Survey Partner",
  },
];

const job = [
  {
    id: 1,
    job: "Individual",
  },
  {
    id: 2,
    job: "Having a Team",
  },
];

const NewSnaglist = () => {
  const [showAll, setShowAll] = useState(false);
  const [showAllVideo, setShowAllVideo] = useState(false);
  const [image, setImage] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [isTargetStartDatePickerVisible, setTargetStartDatePickerVisibility] =
    useState(false);
  const [isTargetEndDatePickerVisible, setTargetEndDatePickerVisibility] =
    useState(false);
  const [startDate, setStartDate] = useState("Start Date");
  const [endDate, setEndDate] = useState("End Date");
  const [targetStartDate, setTargetStartDate] = useState("Target Start Date");
  const [targetEndDate, setTargetEndDate] = useState("Target End Date");

  // for Type select section
  // const [selectedType, setSelectedType] = useState("Partner Type");
  // const [isClicked, setIsClicked] = useState(false);
  // const [data, setData] = useState(type);

  // for Job select section
  const [selectedJob, setSelectedJob] = useState("Status");
  const [isSelected, setIsSelected] = useState(false);
  const [dataJob, setDataJob] = useState(job);

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

  const showTargetStartDatePicker = () => {
    setTargetStartDatePickerVisibility(true);
  };

  const hideTargetStartDatePicker = () => {
    setTargetStartDatePickerVisibility(false);
  };

  const showTargetEndDatePicker = () => {
    setTargetEndDatePickerVisibility(true);
  };

  const hideTargetEndDatePicker = () => {
    setTargetEndDatePickerVisibility(false);
  };

  const handleStartDateConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    const dt = new Date(date);
    const x = dt.toISOString().split("T");
    const x1 = x[0].split("-");
    console.log(x1[2] + "/" + x1[1] + "/" + x1[0]);
    setStartDate(x1[2] + "/" + x1[1] + "/" + x1[0]);
    hideStartDatePicker();
  };

  const handleTargetStartDateConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    const dt = new Date(date);
    const x = dt.toISOString().split("T");
    const x1 = x[0].split("-");
    console.log(x1[2] + "/" + x1[1] + "/" + x1[0]);
    setTargetStartDate(x1[2] + "/" + x1[1] + "/" + x1[0]);
    hideTargetStartDatePicker();
  };

  const handleEndDateConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    const dt = new Date(date);
    const x = dt.toISOString().split("T");
    const x1 = x[0].split("-");
    console.log(x1[2] + "/" + x1[1] + "/" + x1[0]);
    setEndDate(x1[2] + "/" + x1[1] + "/" + x1[0]);
    hideEndDatePicker();
  };
  const handleTargetEndDateConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    const dt = new Date(date);
    const x = dt.toISOString().split("T");
    const x1 = x[0].split("-");
    console.log(x1[2] + "/" + x1[1] + "/" + x1[0]);
    setTargetEndDate(x1[2] + "/" + x1[1] + "/" + x1[0]);
    hideTargetEndDatePicker();
  };

  const pickMultipleVideos = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsMultipleSelection: true,
    });

    if (!result.cancelled) {
      // console.log(result);
      setSelectedVideo(result.assets);
    }
  };
  console.log(selectedVideo);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      // allowsEditing: true,
      selectionLimit: 6,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    // }
    if (!result.cancelled) {
      setImage(result.assets);
    }
  };

  // console.log(image)

  const handleRemoveImage = (index) => {
    setImage([...image.slice(0, index), ...image.slice(index + 1)]);
  };
  const handleRemoveVideo = (index) => {
    setSelectedVideo([
      ...selectedVideo.slice(0, index),
      ...selectedVideo.slice(index + 1),
    ]);
  };

  const renderUploadIcon = () => (<>
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => setShowAll(true)}>
      <View style={{ backgroundColor: '#dfe5e4',width:45,height:45,borderRadius:5,marginLeft:5,borderWidth:1,borderStyle:'dashed',borderColor:'gray'}}>
        <Text style={{ color: 'black',textAlign:'center',marginTop:10 }}>+{image.length - 3}</Text>
      </View>
    </TouchableOpacity>
      <TouchableOpacity onPress={() => pickImage()}>
        <View style={{ backgroundColor: '#dfe5e4',width:45,height:45,borderRadius:5,marginLeft:10,marginBottom:10,borderWidth:1,borderStyle:'dashed',borderColor:'gray'}}>
        <Image
                    style={{
                      width: 20,
                      height: 20,
                      justifyContent: "center",
                      alignSelf: "center",
                      alignItems: "center",
                      marginTop:10,
                    }}
                    source={require("../assets/newsnaglist/upload.png")}
                  />
                  <Text style={{fontSize:5,fontFamily:'Poppins',textAlign:'center'}}>Upload image</Text>
        </View>
      </TouchableOpacity>
      </View>
      </>
    );


    const renderUploadVideoIcon = () => (<>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={() => setShowAllVideo(true)}>
        <View style={{ backgroundColor: '#dfe5e4',width:45,height:45,borderRadius:5,marginLeft:5,borderWidth:1,borderStyle:'dashed',borderColor:'gray'}}>
          <Text style={{ color: 'black',textAlign:'center',marginTop:10 }}>+{selectedVideo.length - 3}</Text>
        </View>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => pickMultipleVideos()}>
          <View style={{ backgroundColor: '#dfe5e4',width:45,height:45,borderRadius:5,marginLeft:10,marginBottom:10,borderWidth:1,borderStyle:'dashed',borderColor:'gray'}}>
          <Image
                      style={{
                        width: 20,
                        height: 20,
                        justifyContent: "center",
                        alignSelf: "center",
                        alignItems: "center",
                        marginTop:10,
                      }}
                      source={require("../assets/newsnaglist/video.png")}
                    />
                    <Text style={{fontSize:5,fontFamily:'Poppins',textAlign:'center'}}>Upload video</Text>
          </View>
        </TouchableOpacity>
        </View>
        </>
      );
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header title={"New Snaglist"} icon={require("../assets/back.png")} />
        <TextInput style={styles.textInput} placeholder="Order Id" />
        <TextInput style={styles.textInput} placeholder=" Id" />
        <TextInput style={styles.textInput} placeholder="Name" />
        <TextInput style={styles.textInput} placeholder="Address" />
        <TextInput style={styles.textInput} placeholder="Pincode" />
        <TextInput style={styles.textInput} placeholder="Address Code" />
        <TextInput style={styles.textInput} placeholder="Customer Cordinator" />
        <TextInput style={styles.textInput} placeholder="Material Number" />
        <TextInput style={styles.textInput} placeholder="Site Cordinator" />
        <TextInput style={styles.textInput} placeholder="Material Number" />
        <TextInput style={styles.textInput} placeholder="Factory Cordinator" />
        <TextInput style={styles.textInput} placeholder="Material Number" />
        <TextInput style={styles.textInput} placeholder="Product Id" />
        <TextInput style={styles.textInput} placeholder="Product" />
        <TextInput style={styles.textInput} placeholder="Product Code" />
        <TextInput style={styles.textInput} placeholder="Factory Area" />
        <TouchableOpacity
          style={styles.textInput}
          onPress={() => {
            showStartDatePicker();
          }}
        >
          <Text style={{ fontSize: 16, color: "#dcdcdc", fontWeight: "600" }}>
            {startDate}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textInput}
          onPress={() => {
            showEndDatePicker();
          }}
        >
          <Text style={{ fontSize: 16, color: "#dcdcdc", fontWeight: "600" }}>
            {endDate}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textInput}
          onPress={() => {
            showTargetStartDatePicker();
          }}
        >
          <Text style={{ fontSize: 16, color: "#dcdcdc", fontWeight: "600" }}>
            {targetStartDate}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textInput}
          onPress={() => {
            showTargetEndDatePicker();
          }}
        >
          <Text style={{ fontSize: 16, color: "#dcdcdc", fontWeight: "600" }}>
            {targetEndDate}
          </Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isStartDatePickerVisible}
          mode="date"
          onConfirm={handleStartDateConfirm}
          onCancel={hideStartDatePicker}
        />
        <DateTimePickerModal
          isVisible={isTargetStartDatePickerVisible}
          mode="date"
          onConfirm={handleTargetStartDateConfirm}
          onCancel={hideTargetStartDatePicker}
        />
        <DateTimePickerModal
          isVisible={isEndDatePickerVisible}
          mode="date"
          onConfirm={handleEndDateConfirm}
          onCancel={hideEndDatePicker}
        />
        <DateTimePickerModal
          isVisible={isTargetEndDatePickerVisible}
          mode="date"
          onConfirm={handleTargetEndDateConfirm}
          onCancel={hideTargetEndDatePicker}
        />

        {/* For partner Type */}
        {/* <TouchableOpacity
          style={[styles.dropDownSelector, { marginTop: 10 }]}
          onPress={() => {
            setIsClicked(!isClicked);
          }}
        >
          <Text style={styles.text}>{selectedType}</Text>
          {isClicked ? (
            <Image
              source={require("../assets/profile-icon/arrow-down.png")}
              style={styles.icon}
            />
          ) : (
            <Image
              source={require("../assets/profile-icon/arrow-up.png")}
              style={styles.icon}
            />
          )}
        </TouchableOpacity>
        {isClicked ? (
          <View style={styles.dropDownArea}>
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={styles.typeItems}
                    onPress={() => {
                      setSelectedType(item.type);
                      setIsClicked(false);
                    }}
                  >
                    <Text style={styles.text}>{item.type}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null} */}

        {/* For Job as */}
        <TouchableOpacity
          style={[styles.dropDownSelector, { marginTop: 10 }]}
          onPress={() => {
            setIsSelected(!isSelected);
          }}
        >
          <Text style={styles.text}>{selectedJob}</Text>
          {isSelected ? (
            <Image
              source={require("../assets/profile-icon/arrow-down.png")}
              style={styles.icon}
            />
          ) : (
            <Image
              source={require("../assets/profile-icon/arrow-up.png")}
              style={styles.icon}
            />
          )}
        </TouchableOpacity>
        {isSelected ? (
          <View style={styles.dropDownArea}>
            <FlatList
              data={dataJob}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={styles.typeItems}
                    onPress={() => {
                      setSelectedJob(item.job);
                      setIsSelected(false);
                    }}
                  >
                    <Text style={styles.text}>{item.job}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}

        <TextInput style={styles.textInput} placeholder="Issue" />
        <TextInput style={styles.textInput} placeholder="Reason" />
        <TextInput style={styles.textInput} placeholder="Solution" />
        <TextInput style={styles.textInput} placeholder="Action" />
        <View
          style={{
            width: "90%",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
       
            <View
              style={{
                width: 170,
                height: 120,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "gray",
                marginTop: 10,
                borderStyle: "dashed",
                backgroundColor: "#dfe5e4",
              }}
            >
              {/* <View style={{flexDirection:'row'}}>{image.map((image,index)=>( 
              <TouchableOpacity onPress={()=>handleRemoveImage(index)} >
             <Image key={index} source={{ uri : image.uri}} style={{width:60,height:60}} />
             <Image
                  source={require("../assets/worktype/close.png")}
                  style={{width:15,height:15,position:'absolute',top:4,right:4,backgroundColor:'white'}}
                />
             </TouchableOpacity>
           ))}</View> */}
              {image.length === 0 ? (
              <>
              <TouchableOpacity activeOpacity={0.8} onPress={pickImage}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    justifyContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                    marginTop: 40,
                  }}
                  source={require("../assets/newsnaglist/upload.png")}
                />
                <Text style={styles.textStyle}>Upload Image</Text>
                </TouchableOpacity>
              </>
             
            ) :(
              <FlatList
                numColumns={3}
                // data={image}
                data={showAll ? image : image.slice(0, 3)}
                renderItem={(image, index) => (
                  // console.log(image.index),
                  <TouchableOpacity
                    onPress={() => handleRemoveImage(image.index)}
                  >
                    <Image
                      key={index}
                      source={{ uri: image.item.uri }}
                      style={{
                        width: 45,
                        height: 45,
                        borderRadius: 5,
                        marginTop: 10,
                        // marginBottom: 10,
                        borderWidth: 1,
                        // borderColor: "gray",
                        // borderStyle: "dashed",
                        marginLeft:5,
                        marginRight:5
                      }}
                    />
                    <Image
                      source={require("../assets/worktype/close.png")}
                      style={{
                        width: 15,
                        height: 15,
                        position: "absolute",
                        top: 10,
                        right: 4,
                        backgroundColor: "white",
                        borderRadius: 8,
                      }}
                    />
                  </TouchableOpacity>
                )}
              />
            )}
            { image.length === 0 ? null : renderUploadIcon()}
            </View>
          <View
            style={{
              width: 170,
              height: 120,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "gray",
              marginTop: 10,
              borderStyle: "dashed",
              backgroundColor: "#dfe5e4",
            }}
          >
          

            {/* <View style={{flexDirection:'row'}}>{selectedVideo.map((video,index)=>( 
              <TouchableOpacity onPress={()=>handleRemoveVideo(index)} >
             <Image key={index} source={{ uri : video.uri}} style={{width:60,height:60}} />
             <Image
                  source={require("../assets/worktype/close.png")}
                  style={{width:15,height:15,position:'absolute',top:4,right:4,backgroundColor:'white'}}
                />
             </TouchableOpacity>
           ))}</View> */}
           { selectedVideo.length === 0 ?   (
            <TouchableOpacity activeOpacity={0.8} onPress={pickMultipleVideos}>
            <Image
              style={{
                width: 20,
                height: 20,
                justifyContent: "center",
                alignSelf: "center",
                alignItems: "center",
                marginTop: 40,
              }}
              source={require("../assets/newsnaglist/video.png")}
            /> 
             <Text  style={styles.textStyle} >Upload Video</Text>
             </TouchableOpacity>
             ) : (
            <FlatList
              numColumns={3}
              // data={selectedVideo}
              data={showAllVideo ? selectedVideo : selectedVideo.slice(0, 3)}
              renderItem={(image, index) => (
                // console.log(image),
                <TouchableOpacity
                  onPress={() => handleRemoveVideo(image.index)}
                >
                  <Image
                    key={index}
                    source={{ uri: image.item.uri }}
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 5,
                      marginTop: 10,
                      borderWidth: 1,
                      marginLeft:5,
                      marginRight:5
                    
                    }}
                  />
                  <Image
                    source={require("../assets/worktype/close.png")}
                    style={{
                      width: 15,
                      height: 15,
                      position: "absolute",
                      top: 10,
                      right: 4,
                      backgroundColor: "white",
                      borderRadius: 8,
                    }}
                  />
                </TouchableOpacity>
              )}
            />
             )}
             { selectedVideo.length === 0 ? null : renderUploadVideoIcon()}
          </View>
             
        </View>
        <TouchableOpacity
          style={{
            // marginLeft: 20,
            marginTop: 10,
            marginBottom: 30,
            backgroundColor: "#284F49",
            height: 50,
            width: "90%",
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
              Submit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default NewSnaglist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
  dropDownSelector: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: "#8e8e8e",
  },
  dropDownArea: {
    width: "90%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
    alignSelf: "center",
    marginTop: 10,
  },
  typeItems: {
    width: "85%",
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "#dcdcdc",
    fontSize: 16,
    padding: 12,
    marginTop: 10,
    fontFamily: "Poppins",
  },
  btnStyle: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 50,
    width: "90%",
    borderWidth: 1,
    borderColor: "#dcdcdc",
    marginTop: 10,
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 12,
  },
  textStyle: {
    fontSize: 16,
    color: "#8e8e8e",
    fontFamily: "Poppins",
    textAlign: "center",
  },
});
