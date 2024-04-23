import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';


const screenWidth = Dimensions.get('window').width;


const videos = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
];

const VideoList = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(null); 

    const toggleVideoPlayback = (index) => {
        if (currentVideoIndex === index) {
            setCurrentVideoIndex(null);
        } else {
            setCurrentVideoIndex(index);
        }
    };

    return (
        <View>
            <ScrollView contentContainerStyle={styles.videoContainer}  >
                {videos.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => toggleVideoPlayback(index)}>
                        <Video
                            source={{ uri: item }}
                            style={[styles.video]}
                            resizeMode="stretch"
                            useNativeControls={false}
                            shouldPlay={currentVideoIndex === index} 
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            </View>

);
}


const styles = StyleSheet.create({
    videoContainer: {
        paddingHorizontal: 20,
        marginTop: 50,
        marginHorizontal:30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
       
       
    },
    video: {
        width: 123,
        height: 239,
        marginBottom: 10,
    },
})

export default VideoList;