import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { handleInput } from '../Order';
import DesktopLayout from './DesktopLayout';
import ChatView from './ChatView';
import WelcomeView from './WelcomeView';

export default function AIView({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [inputBarText, setInputBarText] = useState('');
  const scrollViewRef = useRef(null);

  const scrollToBottom = (animated = true) => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated });
    }, 100);
  };

  useEffect(() => { scrollToBottom(); }, [messages]);

  const sendMessage = () => {
    if (inputBarText.trim().length === 0) return;
    const newMessages = [{ direction: 'right', text: inputBarText }];
    const aResponse = handleInput(inputBarText);
    for (const message of aResponse) {
      newMessages.push({ direction: 'left', text: message });
    }
    setMessages([...messages, ...newMessages]);
    setInputBarText('');
  };

  const resetToWelcome = () => {
    setMessages([]);
    setInputBarText('');
  };

  return (
    <DesktopLayout>
      <View style={styles.chatArea}>
        {messages.length ? (
          <ChatView
            scrollToBottom={scrollToBottom}
            sendMessage={sendMessage}
            scrollViewRef={scrollViewRef}
            styles={styles}
            messages={messages}
            setInputBarText={setInputBarText}
            inputBarText={inputBarText}
            resetToWelcome={resetToWelcome}
            onClose={onClose}
          />
        ) : (
          <WelcomeView
            sendMessage={sendMessage}
            setInputBarText={setInputBarText}
            inputBarText={inputBarText}
          />
        )}
      </View>
    </DesktopLayout>
  );
}

const styles = StyleSheet.create({
  chatArea: {
    flex: 1,
    flexDirection: 'column',
  },
  messages: {
    flex: 1,
  },
});