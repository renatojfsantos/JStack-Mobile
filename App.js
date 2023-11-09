import { ScrollView, StatusBar } from 'react-native';

import { Button } from './src/Button';

export default function App() {
  return (
    <ScrollView style={{ backgroundColor: '#222' }}>
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
  )
}