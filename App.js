import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './Screens/MainNavigation';
import { Provider } from 'react-redux';
import {store} from './Store/store'
export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation/>
    </Provider>

  );
}