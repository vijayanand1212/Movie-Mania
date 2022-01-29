import { createStore,combineReducers } from 'redux'
import {UIcolorsReducer} from './reducers/UIcolorsReducer'

export const store = createStore(combineReducers(
    {
        UIcolorsReducer:UIcolorsReducer
    }
));