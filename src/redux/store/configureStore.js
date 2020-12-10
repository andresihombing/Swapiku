import {createStore, combineReducers} from 'redux'
import filmReducer from '../reducers/filmReducers'

const rootReducer = combineReducers(
    {films: filmReducer}
)

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore