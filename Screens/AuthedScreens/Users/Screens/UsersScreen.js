import React from 'react'
import { View, Text,SafeAreaView ,StatusBar,Image,Alert,StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Ripple from 'react-native-material-ripple'
import ToggleSwitch from '../../../../Components/ToggleSwitch';

import { useSelector ,useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import {UIcolorsActionCreators} from '../../../../Store/Actions/UIColorsActionsCreators'

export default function Users({navigation}) {
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
        },
        IconButton:{
            flexDirection:'row',
            alignItems:'center',
            padding:10,
            marginBottom:15
        },
        IconText:{
            color: state.UIcolorsReducer.ForegroundColor,
            fontSize:20,
            marginLeft:10
        }
    })

    return (
        <SafeAreaView style={{backgroundColor:state.UIcolorsReducer.backgroundColor,flex:1,paddingHorizontal:15,paddingTop:20}}>
            <View style={{alignSelf:'center',alignItems:'center'}}>
                <Image source={require('../../../../assets/avataaars.png')} style={{width:150,height:150,resizeMode:'cover',borderRadius:100}}/>
                <Text style={{color:state.UIcolorsReducer.ForegroundColor,fontSize:20,marginVertical:20}}>VIJAY ANAND</Text>
            </View>
            <View>
                <Ripple style={styles.IconButton} rippleDuration={400} rippleColor='white' rippleOpacity={0.6}>
                    <Ionicons name='person-outline' color={state.UIcolorsReducer.ForegroundColor} size={25} />
                    <Text style={styles.IconText}>Account</Text>
                </Ripple>
                <Ripple  style={styles.IconButton} rippleDuration={400} rippleColor='white' rippleOpacity={0.6} onPress={()=>{
                    Alert.alert( "Alert","Do you want to sign out from this device?",
                    [
                        { text: "Yes"},
                        {text: "no",style: "cancel"},
                      ]
                    )
                }}>
                    <Ionicons name='log-out-outline' color={state.UIcolorsReducer.ForegroundColor} size={25} />
                    <Text style={styles.IconText}>Log Out</Text>
                </Ripple>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10,alignItems:'center'}}>
                <Text style={styles.SubHeaderText}>Dark Mode</Text>
                <ToggleSwitch onColor={state.UIcolorsReducer.ThemeColor} OffColor="#deded9"  ToggleColor={state.UIcolorsReducer.ForegroundColor} onToggleChanged={isOn=> {
                    if (isOn == true) {
                        ActionChangeChangeDarkMode(true)
                    }else{
                        ActionChangeChangeDarkMode(false)
                    }}} isOn={state.UIcolorsReducer.darkMode}/>
            </View>
            
            <StatusBar barStyle='light-content'/>
        </SafeAreaView>
    )
}
