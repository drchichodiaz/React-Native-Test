import 'react-native-gesture-handler';
import { StyleSheet  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/NavigationStack/Navigation';
import NavigationTab from './src/NavigationStack/NavigationTab';
import NavigatioDrawe from './src/NavigationStack/NavigatioDrawer';

export default function App() {
  return (
    <NavigationContainer> 
      <NavigatioDrawe/>


     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
