import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import ImageThumbnail from '../../components/ImageThumbnail';
import {connect} from 'react-redux';
import {loadImages} from '../../redux/actions/imagesListActions';

const ImagesList = ({navigation, isLoading, images, loadData}) => {
  const getData = () => {
    loadData();
  };

  useEffect(() => {
    getData();
  }, [isLoading]);

  const handleImagePress = (uri, author) => {
    navigation.navigate('Full Screen Photo', {uri: uri, title: 'by ' + author});
  };

  console.log(images);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Photo Gallery</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={images}
          renderItem={itemData => (
            <ImageThumbnail
              name={itemData.item.description}
              author={itemData.item.user.name}
              uri={itemData.item.urls.small}
              alt={itemData.item.alt_description}
              onPress={() =>
                handleImagePress(
                  itemData.item.urls.regular,
                  itemData.item.user.name,
                )
              }
            />
          )}
        />
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  images: state.images,
  isLoading: state.isLoading,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadImages()),
});

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImagesList);
