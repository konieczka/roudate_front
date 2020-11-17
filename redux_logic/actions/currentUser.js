export const ESTABLISH_CURRENT_USER = "ESTABLISH_CURRENT_USER";
export const ESTABLISH_CURRENT_USER_SUCCESS = "ESTABLISH_CURRENT_USER_SUCCESS";
export const ESTABLISH_CURRENT_USER_FAILURE = "ESTABLISH_CURRENT_USER_FAILURE";

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
