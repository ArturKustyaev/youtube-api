import { IVideo } from './../../../components/Video'
import { ActionType } from './types'

export interface IFetchSearchedVideosStart {
	type: typeof ActionType.FETCH_SEARCHED_VIDEOS_START
}

export interface IPageInfo {
	resultsPerPage: number
	totalResults: number
}

export interface IFetchSearchedVideosResponse {
	videos: Array<IVideo>
	pageInfo: IPageInfo
}

export interface IFetchSearchedVideosSuccess {
	type: typeof ActionType.FETCH_SEARCHED_VIDEOS_SUCCESS
	payload: IFetchSearchedVideosResponse
}

export interface IFetchSearchedVideosError {
	type: typeof ActionType.FETCH_SEARCHED_VIDEOS_ERROR
	payload: string
}

export interface ISetSearchQuery {
	type: typeof ActionType.SET_SEARCH_QUERY
	payload: string
}

export interface IGetVideoViewCountStart {
	type: typeof ActionType.GET_VIDEO_VIEW_COUNT_START
}

export interface IGetVideoViewCountSuccess {
	type: typeof ActionType.GET_VIDEO_VIEW_COUNT_SUCCESS
	payload: number
}
