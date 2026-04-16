import { StyleSheet, View, Text, Platform } from 'react-native';
import { LotusSmall } from './SpaIcons';

const serif = Platform.OS === 'web' ? 'Georgia, "Times New Roman", serif' : 'Georgia';

export default function MessageBubble({ direction, text }) {
  const isLeft = direction === 'left';

  return (
    <View style={[styles.row, isLeft ? styles.rowLeft : styles.rowRight]}>
      {isLeft && <LotusSmall />}
      <View style={[styles.bubble, isLeft ? styles.bubbleLeft : styles.bubbleRight]}>
        <Text style={[isLeft ? styles.textLeft : styles.textRight, { fontFamily: serif }]}>
          {text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'flex-end',
  },
  rowLeft: { justifyContent: 'flex-start' },
  rowRight: { justifyContent: 'flex-end' },
  bubble: {
    maxWidth: '60%',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  bubbleLeft: {
    backgroundColor: '#EDE8DF',
    borderRadius: 20,
    borderBottomLeftRadius: 4,
  },
  bubbleRight: {
    backgroundColor: '#7A9470',
    borderRadius: 20,
    borderBottomRightRadius: 4,
  },
  textLeft: {
    fontSize: 15,
    lineHeight: 24,
    color: '#3B3028',
  },
  textRight: {
    fontSize: 15,
    lineHeight: 24,
    color: '#F7F3ED',
  },
});