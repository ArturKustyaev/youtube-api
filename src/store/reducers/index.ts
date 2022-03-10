import { combineReducers } from 'redux'
import modalReducer from './modalReducer'
import userReducer from './userReducer'
import videosReducer from './videosReducer'

const rootReducer = combineReducers({
	videos: videosReducer,
	user: userReducer,
	modal: modalReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export default rootReducer
