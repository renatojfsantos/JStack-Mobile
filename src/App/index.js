import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';

import { styles } from './styles';

export default function App() {
  const disabled = false;

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.containner} scrollEnabled={false}>
        <View style={styles.buttonsContainer}>
          <Button
            title="Button"
            color='#f00'
            onPress={() => alert('Button pressed')}
            disabled
          />

          <TouchableOpacity
            activeOpacity={0.5}
            style={[
              styles.button,
              disabled && styles.buttonDisabled
            ]}
            disabled={disabled}
            //
            onPress={() => alert('onPress')}
            onPressIn={() => console.log('onPressIn')}
            onPressOut={() => console.log('onPressOut')}
            onLongPress={() => console.log('onLongPress')}
            delayLongPress={500}
            pressRetentionOffset={16}
          >
            <Text style={styles.buttonLabel}>
              TouchableOpacity
            </Text>
          </TouchableOpacity>

          <TouchableHighlight
            style={styles.button}
            underlayColor="#f00"
            //
            onPress={() => console.log('onPress')}
            onPressIn={() => console.log('onPressIn')}
            onPressOut={() => console.log('onPressOut')}
            onLongPress={() => console.log('onLongPress')}
            delayLongPress={500}
          >
            <Text style={styles.buttonLabel}>
              TouchableHighlight
            </Text>
          </TouchableHighlight>

          <TouchableWithoutFeedback
            onPress={() => console.log('onPress')}
            onPressIn={() => console.log('onPressIn')}
            onPressOut={() => console.log('onPressOut')}
            onLongPress={() => console.log('onLongPress')}
            delayLongPress={500}
          >
            <View style={styles.button}>
              <Text style={styles.buttonLabel}>
                TouchableWithoutFeedback
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.androidButtonContainer}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('#f00')}
              onPress={() => console.log('onPress')}
              onPressIn={() => console.log('onPressIn')}
              onPressOut={() => console.log('onPressOut')}
              onLongPress={() => console.log('onLongPress')}
              delayLongPress={500}
            >
              <View style={styles.button}>
                <Text style={styles.buttonLabel}>
                  TouchableNativeFeedback
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <TouchableOpacity
            onPress={() => alert('Ver mais')}
            style={{
              backgroundColor: 'red',
              alignSelf:'flex-start',
            }}
            hitSlop={{
              bottom: 16,
              left: 16,
              right: 16,
              top: 16,
            }}
          >
            <Text>Ver mais</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}