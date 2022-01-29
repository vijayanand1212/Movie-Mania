import { createStore,combineReducers } from 'redux'
import {UIColorsReducer} from './Reducers/UIColorsReducer'

export const store = createStore(combineReducers(
    {
        UIColorsReducer:UIColorsReducer
    }
));