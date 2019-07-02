import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // ADD PLACE
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri:
              'https://yt3.ggpht.com/a/AGF-l7_IPKJORqk1Wo7AR4jMhW15Ma-za_QDlRxMcQ=s900-mo-c-c0xffffffff-rj-k-no'
          }
        })
      };
    // DELETE PLACE
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    // SELECT PLACE
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      };
    // DESELECT PLACE
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
