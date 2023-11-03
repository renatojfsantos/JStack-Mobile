import { Text, ScrollView, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 32,
          marginTop: isAndroid ? 50 : 100
        }}>
          {Platform.select({
            android: (
              <Text style={{ fontWeight: 'bold' }}>
                Hello Android
              </Text>
            ),
            ios: 'Hello iOS',
            native: 'valor native',
            default: 'Hello default'
            // android: 'Hello Android',
            // ios: 'Hello iOS',
            // native: 'valor native',
            // default: 'Hello default'
          })}
        {/* {`Welcome to React Native ${isAndroid ? 'Android' : 'iOS'}`} */}
        {/* {isAndroid? 'Hello Android' : 'Oi iOS'} */}
        {/* {isAndroid && 'Oi beleza?'} */}
      </Text>
    </ScrollView>
  )
}