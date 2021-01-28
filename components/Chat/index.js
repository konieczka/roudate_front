import React, { useState, useRef } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import {
  ScrollView,
  TextInput,
  TouchableHighlight,
} from "react-native-gesture-handler";
import SendIcon from "assets/send.svg";
import styles from "./styles";
import useChat from "hooks/useChat";
import useSendMessage from "hooks/useSendMessage";

const Message = ({ isCurrentUserSender, content }) => (
  <View style={isCurrentUserSender ? styles.messageSelf : styles.messageDate}>
    <Text style={styles.messageContent}>{content}</Text>
  </View>
);

const Chat = () => {
  const { chatId } = useSelector((state) => state.chat);
  const { id } = useSelector((state) => state.currentUser);

  const chatMessages = useChat(chatId);
  const scrollViewRef = useRef();
  const sendMessage = useSendMessage();

  const [messageInput, setMessageInput] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        {chatMessages &&
          chatMessages.map((msg) => (
            <Message
              content={msg.content}
              isCurrentUserSender={`${id}` === `${msg.sender.id}`}
            />
          ))}
      </ScrollView>
      <View style={styles.textInputWrapper}>
        <TextInput
          placeholder="Type a message"
          style={styles.textInput}
          value={messageInput}
          onChangeText={(value) => setMessageInput(value)}
        />
        <TouchableHighlight
          onPress={() => {
            if (messageInput) {
              sendMessage(messageInput);
            }
            setMessageInput("");
          }}
        >
          <SendIcon width={25} height={25} fill="white" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Chat;
