import { IFavoriteQueryItemProps } from './../../../components/FavoriteQueryItem/index'
import { ActionCreatorsType, ActionType } from './types'

const setUser = (user: string): ActionCreatorsType => ({
	type: ActionType.SET_USER,
	payload: user
})

export const addFavoriteQuery = (query: IFavoriteQueryItemProps): ActionCreatorsType => ({
	type: ActionType.ADD_FAVORITE_QUERY,
	payload: query
})

export const UpdateFavoriteQuery = (id: string): ActionCreatorsType => ({
	type: ActionType.UPDATE_FAVORITE_QUERY,
	payload: id
})

export const DeleteFavoriteQuery = (title: string): ActionCreatorsType => ({
	type: ActionType.DELETE_FAVORITE_QUERY,
	payload: title
})
