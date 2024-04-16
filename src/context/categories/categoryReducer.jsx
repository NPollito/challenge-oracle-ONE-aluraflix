import {
  NEW_CATEGORY,
  DELETE_CATEGORY,
  SELECT_CATEGORY,
  EDIT_CATEGORY,
  CLEAR_CATEGORY,
  CURRENT_CATEGORY,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case CURRENT_CATEGORY:
      return {
        ...state,
        categoryvideo: state.categories.filter(
          (category) => category.id === action.payload
        ),
      };

    case NEW_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

    case SELECT_CATEGORY:
      return {
        ...state,
        categoryselect: action.payload,
      };

    case EDIT_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.id ? action.payload : category
        ),
      };

    case CLEAR_CATEGORY:
      return {
        ...state,
        categoryselect: null,
        categoryvideo: null,
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
