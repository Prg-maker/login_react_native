import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular , Inter_700Bold } from '@expo-google-fonts/inter';

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View >
      <StatusBar style="auto" />
      <Home/>
    </View>
  );
}

