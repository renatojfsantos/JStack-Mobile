import { Platform, StatusBar } from "react-native";

export const styles = {
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
}