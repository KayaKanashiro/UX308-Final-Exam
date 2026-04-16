import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Platform } from 'react-native';
import MessageBubble from './MessageBubble';
import InputBar from './InputBar';

const serif = Platform.OS === 'web' ? 'Georgia, "Times New Roman", serif' : 'Georgia';

export default function ChatView({ scrollToBottom, scrollViewRef, sendMessage, styles, messages, setInputBarText, inputBarText, resetToWelcome, onClose }) {
  return (
    <View style={localStyles.container}>

      {/* Top bar */}
      <View style={localStyles.topBar}>
        <TouchableOpacity style={localStyles.backButton} onPress={resetToWelcome} activeOpacity={0.7}>
          <Text style={[localStyles.backLabel, { fontFamily: serif }]}>← New Session</Text>
        </TouchableOpacity>
        <Text style={[localStyles.topBarTitle, { fontFamily: serif }]}>Your Consultation</Text>
        {onClose ? (
          <TouchableOpacity style={localStyles.closeButton} onPress={onClose} activeOpacity={0.7}>
            <Text style={localStyles.closeLabel}>✕</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 100 }} />
        )}
      </View>

      {/* Messages */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.messages}
        contentContainerStyle={localStyles.scrollContent}
        onContentSizeChange={() => scrollToBottom()}
      >
        {messages.map((msg, index) => (
          <MessageBubble key={index} direction={msg.direction} text={msg.text} />
        ))}
      </ScrollView>

      <InputBar
        onSendPressed={sendMessage}
        onSizeChange={() => scrollToBottom(false)}
        onChangeText={setInputBarText}
        text={inputBarText}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' },
  scrollContent: {
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 48,
    maxWidth: 800,
    width: '100%',
    alignSelf: 'center',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: '#FDFAF6',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD8CF',
  },
  backButton: {
    width: 120,
  },
  backLabel: {
    fontSize: 13,
    color: '#7A9470',
    fontStyle: 'italic',
  },
  topBarTitle: {
    fontSize: 15,
    color: '#3B3028',
    letterSpacing: 2,
    fontWeight: '400',
  },
  closeButton: {
    width: 120,
    alignItems: 'flex-end',
  },
  closeLabel: {
    fontSize: 14,
    color: '#A89E93',
  },
});