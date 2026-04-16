import React, { useRef } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Platform } from 'react-native';

const serif = Platform.OS === 'web' ? 'Georgia, "Times New Roman", serif' : 'Georgia';
const sans = Platform.OS === 'web' ? '"Helvetica Neue", Helvetica, Arial, sans-serif' : undefined;

export default function InputBar({ text, onChangeText, onSizeChange, onSendPressed }) {
  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.nativeEvent.key === 'Enter' && !e.nativeEvent.shiftKey) {
      e.preventDefault?.();
      if (text.trim()) onSendPressed();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          ref={inputRef}
          style={[styles.textInput, { fontFamily: sans }]}
          multiline
          placeholder="Continue your consultation... (Enter to send)"
          placeholderTextColor="#B0A898"
          onChangeText={onChangeText}
          onContentSizeChange={onSizeChange}
          onKeyPress={handleKeyPress}
          value={text}
        />
        <TouchableOpacity
          style={[styles.sendButton, !text.trim() && styles.sendButtonDisabled]}
          onPress={onSendPressed}
          disabled={!text.trim()}
          activeOpacity={0.8}
        >
          <Text style={[styles.sendLabel, { fontFamily: serif }]}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 48,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#DDD8CF',
    backgroundColor: '#FDFAF6',
    maxWidth: 800,
    width: '100%',
    alignSelf: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#DDD8CF',
    gap: 16,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    maxHeight: 140,
    color: '#3B3028',
    paddingTop: 2,
    paddingBottom: 2,
    outlineStyle: 'none',
  },
  sendButton: {
    backgroundColor: '#7A9470',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 10,
    flexShrink: 0,
  },
  sendButtonDisabled: { backgroundColor: '#C0CBBA' },
  sendLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    letterSpacing: 1,
  },
});