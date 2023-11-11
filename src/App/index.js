import {
  SafeAreaView,
  ScrollView,
  View,
  Button,
} from 'react-native';


import { styles } from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.containner}>
        <View style={styles.buttonsContainer}>
          <Button
            title="Meu Button"
            color='#F00'
            onPress={() => alert('Button pressed')}
            disabled={false}
            // touchSoundDisabled={false} // * Android Only
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}