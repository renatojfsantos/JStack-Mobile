import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

import { Button } from '../Button';
import { styles } from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.containner}>
        <StatusBar
          hidden={false}
          backgroundColor="rgba(255, 0, 0, .5)"
          barStyle='light-content'
          animated
          translucent={true}
        />

        <View style={styles.buttonsContainer}>
          <Button />
          <Button />
          <Button />
          <Button />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}