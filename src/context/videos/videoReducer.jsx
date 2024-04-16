import { NEW_VIDEO } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case NEW_VIDEO:
      return {
        ...state,
        videos: [...state.videos, action.payload],
      };

    default:
      return state;
  }
};
