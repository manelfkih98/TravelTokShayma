import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import VideoList from '../Components/VideoList';

const screenWidth = Dimensions.get('window').width;


const videos = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
];

const RechercheScreen = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(null); 

    const toggleVideoPlayback = (index) => {
        if (currentVideoIndex === index) {
            setCurrentVideoIndex(null);
        } else {
            setCurrentVideoIndex(index);
        }
    };

    return (
        <ScrollView>
            <View style={styles.content}>
                <Image
                    source={require('../assets/icons/traveltok_logo.png')}
                    style={styles.logo}
                />
                <View >
                    <Image source={require('../assets/icons/search.png')} style={styles.searchIcon} />
                    <TextInput
                        style={styles.input}
                    />
                </View>
            </View>
<View> 
<VideoList/>
</View>
            
            </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        marginTop: 70,
    },
    logo: {
        height: 16,
        width: 73,
        marginBottom: 10,
    },
    input: {
        width: 208,
        height: 30,
        borderColor: '#878787',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 30,
    },
    searchIcon: {
        position: 'absolute',
        top: 8,
        left: 10,
        width: 20,
        height: 20,
    },
    
});

export default RechercheScreen;
