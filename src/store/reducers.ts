import { combineReducers } from "redux";
import {
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_FAILURE,
  CLEAR_ERROR,
} from "./actions";

const initialState = {
  image: null,
  isLoading: false,
  error: null,
};

const imageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_IMAGE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        image: action.payload,
        isLoading: false,
      };
    case FETCH_IMAGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case CLEAR_ERROR:
      console.log(action);

      return {
        ...state,
        error: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  image: imageReducer,
});

export default rootReducer;
