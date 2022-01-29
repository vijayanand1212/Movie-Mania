import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './AuthedScreens/TabNavigation';

import { useSelector ,useDispatch} from 'react-redux';

export default function MainNavigation() {
  const state = useSelector(state=>state);
  
  return (
    <NavigationContainer>
        <TabNavigation/>
        <StatusBar backgroundColor={state.UIColorsReducer.backgroundColor} />
    </NavigationContainer>

  );
}