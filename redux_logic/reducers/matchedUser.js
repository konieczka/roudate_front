import {
  ESTABLISH_MATCHED_USER,
  ESTABLISH_MATCHED_USER_SUCCESS,
  ESTABLISH_MATCHED_USER_FAILURE,
  RESET_MATCHED_PROFILE,
} from "redux_logic/actions/matchedUser";

export const initialState = {
  isMatchedUserEstablished: false,
  isMatchedUserError: false,
  isMatchedUserFetching: false,
  matchedUser: {},
};

const matchedUser = (state = initialState, action) => {
  switch (action.type) {
    case ESTABLISH_MATCHED_USER:
      return {
        ...state,
        isMatchedUserFetching: true,
        isMatchedUserError: false,
      };

    case ESTABLISH_MATCHED_USER_SUCCESS:
      return {
        ...state,
        isMatchedUserFetching: false,
        isMatchedUserEstablished: true,
        isMatchedUserError: false,
        matchedUser: action.payload,
      };

    case ESTABLISH_MATCHED_USER_FAILURE:
      return {
        ...state,
        isMatchedUserFetching: false,
        isMatchedUserError: true,
      };

    case RESET_MATCHED_PROFILE:
      return initialState;

    default:
      return state;
  }
};

export default matchedUser;
