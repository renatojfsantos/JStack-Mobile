import { ScrollView, StatusBar, SafeAreaView } from 'react-native';

import { Button } from './src/Button';

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    // * SafeAreaView: iOS only
    <SafeAreaView
      style={{
        marginTop: (
          Platform.OS === 'android'
            ? StatusBar.currentHeight
            : 0
        )
      }}
    >
      <ScrollView
        style={{ backgroundColor: '#222', height: '100%' }}
      >
        <StatusBar
          hidden={false}
          // backgroundColor='#f00' // * Android only
          backgroundColor="rgba(255, 0, 0, .5)" // * Android only
          barStyle='light-content'
          animated
          translucent={true} // * Android only
        />

        {/* <StatusBar
          backgroundColor='#00f' // * Android only
        /> */}

        <Button />
        <Button />
        <Button />
        <Button />
      </ScrollView>
    </SafeAreaView>
  )
}