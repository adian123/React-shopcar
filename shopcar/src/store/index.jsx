import {createStore,combineReducers} from "redux"
import ShopcarReducer from './reducers'
const Reducers =combineReducers({
    ShopcarReducer
})
export default createStore(Reducers);