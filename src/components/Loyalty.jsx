import React, { useState } from 'react';
import { View, StyleSheet, Modal, SafeAreaView } from 'react-native';
import { FAB, Text } from 'react-native-paper';
import AIView from "./AIView";

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Hello from Rich</Text>
      <Modal
        visible={visible}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={() => setVisible(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <AIView onClose={() => setVisible(false)} />
        </SafeAreaView>
      </Modal>
      <FAB style={styles.fab} onPress={() => setVisible(true)}>+</FAB>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  modalContainer: { flex: 1, backgroundColor: '#F7F3ED' },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#7A9470',
  },
});