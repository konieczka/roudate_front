import { ESTABLISH_CHAT } from "redux_logic/actions/chat";

export const initialState = {
  chatId: "",
};

const matchedUser = (state = initialState, action) => {
  switch (action.type) {
    case ESTABLISH_CHAT:
      return {
        ...state,
        chatId: action.payload,
      };

    default:
      return state;
  }
};

export default matchedUser;
