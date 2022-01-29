import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './SettingsScreen';
import UsersScreen from './UsersScreen';

const UsersStackNav =createStackNavigator();
export const UsersStack = ()=>{
    return(
        <UsersStackNav.Navigator initialRouteName='UsersScreen' screenOptions={{headerShown:false}}>
          <UsersStackNav.Screen name='UsersScreen' component={UsersScreen}/>
          <UsersStackNav.Screen name='SettingsScreen' component={SettingsScreen}/>
        </UsersStackNav.Navigator>
      
    )
}