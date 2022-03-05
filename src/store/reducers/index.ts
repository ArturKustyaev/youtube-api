import { combineReducers } from 'redux'
import userReducer from './userReducer'
import videosReducer from './videosReducer'

const rootReducer = combineReducers({
	videos: videosReducer,
	user: userReducer
})

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

export default rootReducer
