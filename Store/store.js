import { createStore,combineReducers } from 'redux'
import {UIColorsReducer} from './reducers/UIColorsReducer'

export const store = createStore(combineReducers(
    {
        UIcolorsReducer:UIcolorsReducer
    }
));