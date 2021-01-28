import { useSubscription } from "@apollo/client";
import gql from "graphql-tag";

const subscribeChat = gql`
  subscription subscribeChat($id: ID) {
    chatUpdated(id: $id) {
      messages {
        id
        postedAt
        content
        sender {
          id
        }
      }
    }
  }
`;

const useChat = (chatId) => {
  const { data, error, loading } = useSubscription(subscribeChat, {
    variables: { id: chatId },
  });

  return data ? data.chatUpdated.messages : null;
};

export default useChat;
