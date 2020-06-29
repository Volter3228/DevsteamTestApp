let initialState = {
  images: [],
  isLoading: false,
  error: null,
};

const imagesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_IMAGES_START':
      return Object.assign({}, state, {isLoading: true});
    case 'LOAD_IMAGES_SUCCESS':
      return Object.assign({}, state, {
        images: action.payload,
        isLoading: false,
      });
    case 'LOAD_QUOTE_FAILURE':
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false,
      });
    default:
      return state;
  }
};

export default imagesListReducer;
