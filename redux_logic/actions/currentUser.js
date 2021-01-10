export const ESTABLISH_CURRENT_USER = "ESTABLISH_CURRENT_USER";
export const ESTABLISH_CURRENT_USER_SUCCESS = "ESTABLISH_CURRENT_USER_SUCCESS";
export const ESTABLISH_CURRENT_USER_FAILURE = "ESTABLISH_CURRENT_USER_FAILURE";
export const ESTABLISH_CURRENT_USER_PROFILE = "ESTABLISH_CURRENT_USER_PROFILE";
export const ESTABLISH_CURRENT_USER_PROFILE_SUCCESS =
  "ESTABLISH_CURRENT_USER_PROFILE_SUCCESS";
export const ESTABLISH_CURRENT_USER_PROFILE_FAILURE =
  "ESTABLISH_CURRENT_USER_PROFILE_FAILURE";

export const establishCurrentUser = () => ({
  type: ESTABLISH_CURRENT_USER,
});

export const establishCurrentUserSuccess = (payload) => ({
  type: ESTABLISH_CURRENT_USER_SUCCESS,
  payload,
});

export const establishCurrentUserFailure = (err) => ({
  type: ESTABLISH_CURRENT_USER_FAILURE,
  err,
});

export const establishProfile = () => ({
  type: ESTABLISH_CURRENT_USER_PROFILE,
});

export const establishProfileSuccess = (payload) => ({
  type: ESTABLISH_CURRENT_USER_PROFILE_SUCCESS,
  payload,
});

export const establishProfileFailure = (err) => ({
  type: ESTABLISH_CURRENT_USER_PROFILE_FAILURE,
  err,
});
