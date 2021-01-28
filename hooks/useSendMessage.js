import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const sendMessageMutation = gql`
  mutation sendMessageMutation($input: MessageInput!) {
    sendMessage(input: $input) {
      success
    }
  }
`;

const useSendMessage = () => {
  const { chatId } = useSelector((state) => state.chat);
  const [runMutation, { data, error }] = useMutation(sendMessageMutation);

  const sendMessage = (content) => {
    runMutation({
      variables: {
        input: {
          chatId,
          content,
        },
      },
    });
  };

  return sendMessage;
};

export default useSendMessage;
