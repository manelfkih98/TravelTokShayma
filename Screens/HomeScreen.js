import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions, Pressable, Image, Text } from 'react-native';
import { Video } from 'expo-av';

const videos = [
  { url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", user: "user1" },
  { url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", user: "user1" },
  { url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", user: "user2" },
  { url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", user: "user2" },
  { url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", user: "user3" },
];

function HomeScreen() {
  const [currentViewableItemIndex, setCurrentViewableItemIndex] = useState(0);
  const [seriesIndex, setSeriesIndex] = useState(0);
  const [series, setSeries] = useState([]);

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentViewableItemIndex(viewableItems[0].index ?? 0);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig: { viewAreaCoveragePercentThreshold: 50 }, onViewableItemsChanged }]);

  // Fonction pour détecter la fin d'une série
  useEffect(() => {
    if (currentViewableItemIndex === videos.length - 1 && !series.includes(seriesIndex)) {
      setSeries(prevSeries => [...prevSeries, seriesIndex]);
      setSeriesIndex(prevSeriesIndex => prevSeriesIndex + 1);
    }
  }, [currentViewableItemIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={({ item, index }) => (
          <Item item={item} shouldPlay={index === currentViewableItemIndex} />
        )}
        keyExtractor={(item, index) => index.toString()}
        pagingEnabled
        horizontal={series.includes(seriesIndex)}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
    </View>
  );
}

const Item = ({ item, shouldPlay }) => {
  const video = useRef(null);

  useEffect(() => {
    if (video.current && shouldPlay) {
      video.current.playAsync();
    }
  }, [shouldPlay]);

  return (
    <Pressable onPress={() => shouldPlay ? video.current.pauseAsync() : video.current.playAsync()}>
      <View style={styles.videoContainer}>
        <Video
          ref={video}
          source={{ uri: item.url }}
          style={styles.video}
          resizeMode="stretch"
          useNativeControls={false}
        />
        <View style={styles.userInfoContainer}>
          <Image
            source={require('../assets/icons/profilpic.png')}
            style={styles.profilePic}
          />
          <Text style={styles.username}>{item.user}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  userInfoContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    alignItems: 'center',
  },
  profilePic: {
    width: 37,
    height: 37,
    borderRadius: 25,
    marginTop: 25
  },
  username: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: 'Lemonada',
    marginTop: 5,
  },
});

export default HomeScreen;
