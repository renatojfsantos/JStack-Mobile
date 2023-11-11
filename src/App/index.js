import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

import { styles } from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.containner}>
        <View style={styles.buttonsContainer}>
          <Button
            title="Button"
            color='#000'
            onPress={() => alert('Button pressed')}
          />

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => alert('TouchableOpacity pressed')}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>
              TouchableOpacity
            </Text>
          </TouchableOpacity>

          <TouchableHighlight
            onPress={() => alert('TouchableHighlight pressed')}
            style={styles.button}
            underlayColor="#f00"
          >
            <Text style={styles.buttonLabel}>
              TouchableHighlight
            </Text>
          </TouchableHighlight>

          <TouchableWithoutFeedback
            onPress={() => alert('TouchableWithoutFeedback pressed')}
          >
            <View style={styles.button}>
              <Text style={styles.buttonLabel}>
                TouchableWithoutFeedback
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}