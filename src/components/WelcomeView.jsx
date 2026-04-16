import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';

const serif = Platform.OS === 'web' ? 'Georgia, "Times New Roman", serif' : 'Georgia';
const sans = Platform.OS === 'web' ? '"Helvetica Neue", Helvetica, Arial, sans-serif' : undefined;

const SUGGESTIONS = [
  "I'd like to book a massage",
  "Tell me about your facials",
  "What herbal wraps do you offer?",
  "Book a manicure or pedicure",
];

export default function WelcomeView({ sendMessage, setInputBarText, inputBarText }) {
  return (
    <View style={styles.container}>

      <View style={styles.inner}>
        <Text style={[styles.greeting, { fontFamily: serif }]}>
          Good day. How may we{'\n'}restore your calm today?
        </Text>
        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerOrn}>✦</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Large input */}
        <View style={styles.inputCard}>
          <TextInput
            style={[styles.textInput, { fontFamily: sans }]}
            multiline
            placeholder="Describe the experience you're looking for, or ask about a treatment..."
            placeholderTextColor="#B0A898"
            onChangeText={setInputBarText}
            value={inputBarText}
            textAlignVertical="top"
          />
          <View style={styles.inputFooter}>
            <Text style={[styles.inputHint, { fontFamily: serif }]}>
              Press ↑ or click Send to begin
            </Text>
            <TouchableOpacity
              style={[styles.sendButton, !inputBarText.trim() && styles.sendButtonDisabled]}
              onPress={sendMessage}
              disabled={!inputBarText.trim()}
              activeOpacity={0.8}
            >
              <Text style={[styles.sendLabel, { fontFamily: serif }]}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Suggestion chips */}
        <View style={styles.suggestions}>
          {SUGGESTIONS.map((s, i) => (
            <TouchableOpacity
              key={i}
              style={styles.chip}
              onPress={() => setInputBarText(s)}
              activeOpacity={0.7}
            >
              <Text style={[styles.chipText, { fontFamily: serif }]}>{s}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F3ED',
    padding: 60,
  },
  inner: {
    width: '100%',
    maxWidth: 680,
    gap: 24,
  },
  greeting: {
    fontSize: 34,
    fontWeight: '400',
    color: '#3B3028',
    lineHeight: 48,
    letterSpacing: 0.5,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: '#C8BFB0',
  },
  dividerOrn: {
    fontSize: 11,
    color: '#8B9E7E',
  },
  inputCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DDD8CF',
    padding: 20,
    minHeight: 160,
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 16,
    color: '#3B3028',
    lineHeight: 26,
    flex: 1,
    minHeight: 90,
    outlineStyle: 'none',
  },
  inputFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 14,
    borderTopWidth: 0.5,
    borderTopColor: '#E8E3DA',
  },
  inputHint: {
    fontSize: 12,
    color: '#B0A898',
    fontStyle: 'italic',
  },
  sendButton: {
    backgroundColor: '#7A9470',
    borderRadius: 8,
    paddingHorizontal: 28,
    paddingVertical: 10,
  },
  sendButtonDisabled: { backgroundColor: '#C0CBBA' },
  sendLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    letterSpacing: 1,
  },
  suggestions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    borderWidth: 1,
    borderColor: '#C8BFB0',
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: '#FDFAF6',
  },
  chipText: {
    fontSize: 13,
    color: '#5C5347',
    fontStyle: 'italic',
  },
});