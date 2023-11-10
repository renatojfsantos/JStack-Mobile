import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: (
      Platform.OS === 'android'
        ? StatusBar.currentHeight
        : 0
    ),
  },
  containner: {
    backgroundColor: '#222',
    height: '100%',
  },
  buttonsContainer: {
    gap: 16,
  }
});