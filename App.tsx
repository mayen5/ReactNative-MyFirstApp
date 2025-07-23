import { SafeAreaView } from 'react-native-safe-area-context';
// import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';

import { StyleSheet } from 'react-native';
// import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons';

const PaperIcon = (props: any) => <IonIcon {...props} />;

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: PaperIcon
      }}
    >
      <SafeAreaView style={styles.container}>
        {/* <HelloWorldScreen name='Carmelo Mayén' /> */}
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
