const initialState ={
    backgroundColor:'white',
    ForegroundColor:'black',
    ThemeColor:"#FF3434",
    darkMode:false,
    LowBGColor:'#f0f0f0',
    LowBGColor2:'#e0e0e0',
}

export const UIcolorsReducer =(state = initialState,action) => {
    switch (action.type) {
        case "CHANGE_BG":
            return {
                ForegroundColor:'white',
                backgroundColor: action.payload
            }
        case "CHANGE_FG":
            return {
                backgroundColor:'black',
                ForegroundColor: action.payload
            }
        case "CHANGE_DARK_MODE":
            if (action.payload == true) {
                return{
                    backgroundColor:'black',
                    ForegroundColor:'white',
                    LowBGColor:'#141414',
                    LowBGColor2:'#030303',
                    ThemeColor:"#FF3434",
                    darkMode:true
                }
            } else {
                return{
                    backgroundColor:'white',
                    ForegroundColor:'black',
                    LowBGColor:'#f0f0f0',
                    LowBGColor2:'#e0e0e0',
                    ThemeColor:"#FF3434",
                    darkMode:false
                }
            }
        default:
            return state;
    }
}