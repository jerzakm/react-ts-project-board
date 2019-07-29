import { createStore } from 'redux'
import listsReducer from '../reducers/listsReducer';
import rootReducer from '../reducers'

const store = createStore(rootReducer)

export default store