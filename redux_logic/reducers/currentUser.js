import {
  ESTABLISH_CURRENT_USER,
  ESTABLISH_CURRENT_USER_SUCCESS,
  ESTABLISH_CURRENT_USER_FAILURE,
  ESTABLISH_CURRENT_USER_PROFILE,
  ESTABLISH_CURRENT_USER_PROFILE_SUCCESS,
  ESTABLISH_CURRENT_USER_PROFILE_FAILURE,
} from "redux_logic/actions/currentUser";

export const initialState = {
  isUserEstablished: false,
  isUserError: false,
  isUserFetching: false,
  userAuthToken: null,
  email: "",
  profile: {
    name: "",
    birthday: "",
    gender: "",
    aboutMe: "",
    company: "",
    jobTitle: "",
    school: "",
    interests: {
      favBook: "",
      favMovie: "",
      favFood: "",
      favMusic: "",
    },
    userImages: [],
    status: {
      isOnline: false,
      isMatching: false,
      longitude: null,
      latitude: null,
    },
    preferences: {
      interestedIn: "",
      ageMin: 18,
      ageMax: 25,
      distance: 30,
    },
  },
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case ESTABLISH_CURRENT_USER:
      return {
        ...state,
        isUserFetching: true,
        isUserError: false,
      };

    case ESTABLISH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isUserFetching: false,
        isUserEstablished: true,
        isUserError: false,
        userAuthToken: action.payload.token,
      };

    case ESTABLISH_CURRENT_USER_FAILURE:
      return {
        ...state,
        isUserFetching: false,
        isUserError: true,
      };

    case ESTABLISH_CURRENT_USER_PROFILE:
      return {
        ...state,
        isUserFetching: true,
        isUserError: false,
      };

    case ESTABLISH_CURRENT_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isUserFetching: false,
        isUserEstablished: true,
        isUserError: false,
        email: action.payload.me.email,
        profile: action.payload.me.profile,
      };

    case ESTABLISH_CURRENT_USER_PROFILE_FAILURE:
      return {
        ...state,
        isUserFetching: false,
        isUserError: true,
      };
    default:
      return state;
  }
};

export default currentUser;
