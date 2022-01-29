import React,{useState} from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import Ripple from 'react-native-material-ripple'

export default function ContentText({numberOfLines,Plot,ForegroundColor}) {
    const [ContentReadFull, setContentReadFull] = useState(false)
    return (
        <View style={{marginVertical:5}}>
            <Text style={{color:ForegroundColor,textAlign:"justify",fontSize:16,lineHeight:22}} numberOfLines={ContentReadFull ? undefined : 5}>{Plot}</Text>
            <Ripple onPress={()=>setContentReadFull(!ContentReadFull)}>
                <Text style={{color:"grey",textAlign:"justify",fontSize:14,lineHeight:22,fontWeight:"bold"}} >{!ContentReadFull ? 'Show More...' :'Show Less...'}</Text>
            </Ripple>
        </View>
    )
}
