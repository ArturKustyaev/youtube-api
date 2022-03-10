import { IFetchSearchedVideosResponse } from './interfaces'
import { IVideo } from '../../../components/Video/index'
import { ActionType, ActionCreatorType } from './types'
import { api } from '../../../apis/api'
import { Dispatch } from 'redux'

const fetchSearchedVideosStart = (): ActionCreatorType => ({
	type: ActionType.FETCH_SEARCHED_VIDEOS_START
})

const fetchSearchedVideosSuccess = (data: IFetchSearchedVideosResponse): ActionCreatorType => ({
	type: ActionType.FETCH_SEARCHED_VIDEOS_SUCCESS,
	payload: data
})

const fetchSearchedVideosError = (error: string): ActionCreatorType => ({
	type: ActionType.FETCH_SEARCHED_VIDEOS_ERROR,
	payload: error
})

export const fetchSearchedVideos = (q: string) => (dispatch: Dispatch<ActionCreatorType>) => {
	dispatch(fetchSearchedVideosStart())

	api
		.fetchSearchedVideos(q)
		.then((response: any) => {
			/*const data: IFetchSearchedVideosResponse = {
				videos: [],
				pageInfo: { ...response.data.pageInfo }
			}

			response.data.items.forEach(async (item: IVideo) => {
				const viewCount = await api.getVideoStatistics(item.id.videoId)
				data.videos = [
					...data.videos,
					{
						id: { videoId: item.id.videoId },
						snippet: {
							title: item.snippet.title,
							description: item.snippet.description,
							thumbnails: item.snippet.thumbnails
						},
						statistics: { viewCount: viewCount }
					}
				]
			})

			return data
		})*/
			const data: IFetchSearchedVideosResponse = {
				videos: [...response.data.items],
				pageInfo: { ...response.data.pageInfo }
			}
			dispatch(fetchSearchedVideosSuccess(data))
		})
		.catch((error: any) => dispatch(fetchSearchedVideosError(error.message)))
}

/*export const getVideoViewCount = (id: string) => (dispatch: Dispatch<ActionCreatorsType>) => {
	dispatch(getVideoViewCountStart())

	api.getVideoStatistics(id).then(() => {

	})
}*/

const getVideoViewCountStart = (): ActionCreatorType => ({
	type: ActionType.GET_VIDEO_VIEW_COUNT_START
})

const getVideoViewCountSuccess = (viewCount: number): ActionCreatorType => ({
	type: ActionType.GET_VIDEO_VIEW_COUNT_SUCCESS,
	payload: viewCount
})

export const setSearchQuery = (query: string): ActionCreatorType => ({
	type: ActionType.SET_SEARCH_QUERY,
	payload: query
})
