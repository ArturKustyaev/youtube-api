import {
	IFetchSearchedVideosStart,
	IFetchSearchedVideosSuccess,
	IFetchSearchedVideosError,
	ISetSearchQuery,
	IGetVideoViewCountStart,
	IGetVideoViewCountSuccess
} from './interfaces'

export enum ActionType {
	FETCH_SEARCHED_VIDEOS_START = 'FETCH_SEARCHED_VIDEOS_START',
	FETCH_SEARCHED_VIDEOS_SUCCESS = 'FETCH_SEARCHED_VIDEOS_SUCCESS',
	FETCH_SEARCHED_VIDEOS_ERROR = 'FETCH_SEARCHED_VIDEOS_ERROR',

	SET_SEARCH_QUERY = 'SET_SEARCH_QUERY',

	GET_VIDEO_VIEW_COUNT_START = 'GET_VIDEO_VIEW_COUNT_START',
	GET_VIDEO_VIEW_COUNT_SUCCESS = 'GET_VIDEO_VIEW_COUNT_SUCCESS'
}

export type ActionCreatorsType =
	| IFetchSearchedVideosStart
	| IFetchSearchedVideosSuccess
	| IFetchSearchedVideosError
	| ISetSearchQuery
	| IGetVideoViewCountStart
	| IGetVideoViewCountSuccess
