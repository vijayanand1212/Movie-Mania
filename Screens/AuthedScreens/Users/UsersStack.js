import { createStackNavigator } from '@react-navigation/stack';
import Users from './Screens/UsersScreen'

const UsersStackNav =createStackNavigator();
export const UsersStack = ()=>{
    return(
        <UsersStackNav.Navigator initialRouteName='UsersScreen' screenOptions={{headerShown:false}}>
          <UsersStackNav.Screen name='UsersScreen' component={UsersScreen}/>

        </UsersStackNav.Navigator>
      
    )
}