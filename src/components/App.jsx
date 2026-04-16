import { PaperProvider } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import AIView from "./AIView";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.root}>
        <AIView />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
});