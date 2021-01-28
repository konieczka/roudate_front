export const ESTABLISH_MATCHED_USER = "ESTABLISH_MATCHED_USER";
export const ESTABLISH_MATCHED_USER_SUCCESS = "ESTABLISH_MATCHED_USER_SUCCESS";
export const ESTABLISH_MATCHED_USER_FAILURE = "ESTABLISH_MATCHED_USER_FAILURE";
export const RESET_MATCHED_PROFILE = "RESET_MATCHED_PROFILE";

export const establishMatchedUser = () => ({
  type: ESTABLISH_MATCHED_USER,
});

export const establishMatchedUserSuccess = (payload) => ({
  type: ESTABLISH_MATCHED_USER_SUCCESS,
  payload,
});

export const establishMatchedUserFailure = (err) => ({
  type: ESTABLISH_MATCHED_USER_FAILURE,
  err,
});

export const resetMatchedUser = () => ({
  type: RESET_MATCHED_PROFILE,
});
