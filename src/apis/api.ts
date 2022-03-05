import axios, { AxiosPromise, AxiosResponse } from 'axios'

const apiKey = 'AIzaSyBh6DzlOOn7NlOE_5zBE9f-CIF6_-35DeE'
const url = 'https://www.googleapis.com/youtube/v3/'

export const api = {
	fetchSearchedVideos: (q: string): any => {
		return axios.get(`${url}search`, {
			params: {
				q,
				maxResults: 12,
				part: 'snippet',
				key: apiKey,
				type: 'video'
			}
		})
	},
	getVideoStatistics: (id: string): any => {
		return axios
			.get(`${url}videos`, {
				params: {
					id,
					part: 'statistics',
					key: apiKey
				}
			})
			.then(response => {
				return response.data.items[0].statistics.viewCount
			})
	}
}
