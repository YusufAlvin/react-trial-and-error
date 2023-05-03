import { appStateActionEnum } from "../../constants/actionType";

const initialState = {
  hide: false,
};

const appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case appStateActionEnum.HIDE: {
      return {
        ...state,
        hide: action.hide,
      }
    }
    default: {
      return state;
    }
  }
}

export default appStateReducer;