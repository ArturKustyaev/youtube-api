import { IPageInfo } from './../actions/videosActions/interfaces'
import { ActionCreatorType, ActionType } from './../actions/videosActions/types'

import { IVideo } from './../../components/Video/index'

interface IInitialState {
	query: string
	videos: Array<IVideo>
	isFetching: boolean
	error: string
	pageInfo: IPageInfo
	maxResults: number
}

const initialState: IInitialState = {
	query: '',
	videos: [],
	isFetching: false,
	error: '',
	pageInfo: { totalResults: 0, resultsPerPage: 0 },
	maxResults: 12
}

const videosReducer = (state = initialState, action: ActionCreatorType): IInitialState => {
	switch (action.type) {
		case ActionType.FETCH_SEARCHED_VIDEOS_START: {
			return {
				...state,
				isFetching: true
			}
		}
		case ActionType.FETCH_SEARCHED_VIDEOS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				videos: [...action.payload.videos],
				pageInfo: { ...action.payload.pageInfo }
			}
		}
		case ActionType.FETCH_SEARCHED_VIDEOS_ERROR: {
			return {
				...state,
				isFetching: false,
				error: action.payload,
				pageInfo: { totalResults: 0, resultsPerPage: 0 }
			}
		}
		case ActionType.SET_SEARCH_QUERY: {
			return {
				...state,
				query: action.payload
			}
		}
		default:
			return state
	}
}

export default videosReducer
