import {
  SafeAreaView,
  ScrollView,
} from 'react-native';

import { styles } from './styles';
import { Button } from '../components/Button';

export default function App() {
  const disabled = false;

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.containner}>
        <Button disabled={false} onPress={() => alert('ok')}>
          Oi botão!
        </Button>
      </ScrollView>
    </SafeAreaView>
  )
}