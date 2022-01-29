import { View, Text ,StyleSheet,StatusBar} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import ToggleSwitch from '../../../Components/ToggleSwitch';

import { useSelector ,useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import {UIcolorsActionCreators} from '../../../Store/actions/UIcolorsActions'


export default function SettingsScreen() {
    const state = useSelector(state=>state);
    const dispatch =useDispatch();
    const {ActionChangeBG,ActionChangeFG,ActionChangeChangeDarkMode} =bindActionCreators(UIcolorsActionCreators,dispatch)

    const styles = StyleSheet.create({
        HeaderText:{
            color:state.UIcolorsReducer.ForegroundColor,
            fontSize:30
        },
        SubHeaderText:{
            color:state.UIcolorsReducer.ForegroundColor,
            fontSize:17,
            fontWeight:'bold'
        }
    })

  return (
    <View style={{backgroundColor:state.UIcolorsReducer.backgroundColor,flex:1,paddingHorizontal:10}}>
        <Text style={styles.HeaderText}>Settings</Text>
        <View>

        </View>
        <StatusBar barStyle='light-content'/>
    </View>
  );


}