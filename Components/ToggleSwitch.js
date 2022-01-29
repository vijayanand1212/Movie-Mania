import { View, Text,Animated, Easing } from 'react-native';
import React,{useState,useRef,useEffect} from 'react';
import Ripple from 'react-native-material-ripple';

export default function ToggleSwitch({onColor,OffColor,ToggleColor,onToggleChanged,isOn}) {
    const [Toggle, setToggle] = useState(isOn);
    const value = !isOn ? 0: 30
    const TranslateX = useRef(new Animated.Value(value)).current;

   const ToggleAnimation =()=>{
       if (Toggle==true) {
           Animated.timing(TranslateX, {
               useNativeDriver:true,
               toValue: 0,
               duration: 200,
               easing:Easing.linear
           }).start(setToggle(!Toggle))
        }else{
            Animated.timing(TranslateX, {
                useNativeDriver:true,
                toValue: 30,
                duration: 200,
                easing:Easing.linear
            }).start(setToggle(!Toggle))
       }
    }
    useEffect(() => {
        onToggleChanged(Toggle)
    }, [Toggle]);
    
  return (
        <Ripple style={{height:30,width:60,borderRadius:30,backgroundColor:Toggle?onColor:OffColor,paddingHorizontal:3,paddingVertical:3}} onTouchEnd={()=>ToggleAnimation()} rippleContainerBorderRadius={30}>
            <Animated.View style={{height:24,width:24,backgroundColor:ToggleColor,borderRadius:40,translateX:TranslateX}}></Animated.View>
        </Ripple>
  );
}
