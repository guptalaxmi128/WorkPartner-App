import React,{useState} from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput
  } from "react-native";
  import * as ImagePicker from "expo-image-picker";
const UpdateStatus = () => {
    const [showAll, setShowAll] = useState(false);
    const [showAllVideo, setShowAllVideo] = useState(false);
    const [image, setImage] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState([]);

    const [text, setText] = useState('');

    const handleTextChange = (text) => {
      setText(text);
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
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsMultipleSelection: true,
          // allowsEditing: true,
          selectionLimit: 6,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
          setImage(result.assets);
        }
      };
    
    
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
    <View style={styles.container}>
     <Text style={{fontFamily:'Poppins',fontSize:16,color:"#8e8e8e",marginTop:10}}>Friday, 24 March 2023</Text>
      <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
       
            <View
              style={{
                width: 175,
                height: 120,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "gray",
                marginTop:10,
                // borderStyle: "dashed",
                backgroundColor: "#dfe5e4",
              }}
            >
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
              width: 175,
              height: 120,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "gray",
              marginTop: 10,
              marginLeft:10,
            //   borderStyle: "dashed",
              backgroundColor: "#dfe5e4",
            }}
          >
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
        <View style={{marginTop:10,backgroundColor:'#dfe5e4',width:'100%',height:130,borderRadius:10}}>
       <TextInput
        style={styles.textInput}
        value={text}
        multiline={true}
        onChangeText={handleTextChange}
        placeholder="Add Comments"
      />
     
      </View>
      <TouchableOpacity
          style={{
            marginTop: 265,
            backgroundColor: "#284F49",
            height: 50,
            width: "100%",
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



export default UpdateStatus;
const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      backgroundColor: "#fff",
    //   alignItems:'center'
    paddingLeft:15,
    paddingRight:20
    },
    textStyle: {
        fontSize: 16,
        color: "#8e8e8e",
        fontFamily: "Poppins",
        textAlign: "center",
      },
      textInput: {
        height: 130,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        // paddingHorizontal: 10,
        // borderStyle:'dashed',
        borderRadius:10,
        fontSize: 16,
        color: "#8e8e8e",
        fontFamily: "Poppins",
        padding:10
      },
});