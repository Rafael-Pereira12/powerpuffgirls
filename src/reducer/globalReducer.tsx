import { SET_SLIDE, SET_SEASON_DETAILS } from "../actions";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_SLIDE:
      return { ...state, currentSlide: action.payload };
    case SET_SEASON_DETAILS:
      return { ...state, seasonDetails: action.payload };
    default:
      throw new Error(`No matching action type ${action.type}`);
  }
};

export default reducer;
