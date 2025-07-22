import { SafeAreaView } from 'react-native-safe-area-context';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';

import { StyleSheet } from 'react-native';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HelloWorldScreen name='Carmelo Mayén' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
