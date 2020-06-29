import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ImageThumbnail = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        activeOpacity={0.75}
        onPress={props.onPress}>
        <Image style={styles.image} alt={props.alt} source={{uri: props.uri}} />
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text style={styles.author}>{props.author}</Text>
        {props.name ? <Text style={styles.name}>{props.name}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
  },
  author: {
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: 'italic',
    width: '100%',
  },
  name: {
    fontSize: 18,
    width: '100%',
  },
  textWrapper: {
    width: '60%',
    flexDirection: 'column',
  },
  imageContainer: {
    width: '35%',
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 250,
  },
});

export default ImageThumbnail;
