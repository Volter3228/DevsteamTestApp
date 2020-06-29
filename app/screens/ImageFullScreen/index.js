import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const ImageFullScreen = ({route, navigation}) => {
  const {uri, title} = route.params;

  navigation.setOptions({title: title});

  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: uri}} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch',
  },
  image: {
    flex: 1,
  },
});

export default ImageFullScreen;
