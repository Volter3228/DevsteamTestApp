import {UNSPLASH_API_TOKEN} from 'react-native-dotenv';

export const loadImages = () => {
  return (dispatch, getState) => {
    dispatch({type: 'LOAD_QUOTE_START'});
    fetch('https://api.unsplash.com/photos/?client_id=' + UNSPLASH_API_TOKEN)
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'LOAD_IMAGES_SUCCESS', payload: data});
      })
      .catch(error => {
        dispatch({type: 'LOAD_IMAGES_FAILURE', payload: error});
      });
  };
};
