export const ActionChangeBG  =payload=>{
    return{
            type:"CHANGE_BG",
            payload:payload
    }
}
const ActionChangeFG =payload=>{
       return{
            type:"CHANGE_FG",
            payload:payload
        }
}
const ActionChangeChangeDarkMode =payload=>{
       return{
            type:"CHANGE_DARK_MODE",
            payload:payload
        }
}

export const UIcolorsActionCreators ={
    ActionChangeBG,
    ActionChangeFG,
    ActionChangeChangeDarkMode
}