import { IFavoriteQueryItem } from './../../../components/FavoriteQueryItem/index'
import { ActionCreatorType, ActionType } from './types'

const setUser = (user: string): ActionCreatorType => ({
	type: ActionType.SET_USER,
	payload: user
})

export const addFavoriteQuery = (query: IFavoriteQueryItem): ActionCreatorType => ({
	type: ActionType.ADD_FAVORITE_QUERY,
	payload: query
})

export const updateFavoriteQuery = (query: IFavoriteQueryItem): ActionCreatorType => ({
	type: ActionType.UPDATE_FAVORITE_QUERY,
	payload: query
})

export const deleteFavoriteQuery = (title: string): ActionCreatorType => ({
	type: ActionType.DELETE_FAVORITE_QUERY,
	payload: title
})

export const selectFavoriteQuery = (query: IFavoriteQueryItem): ActionCreatorType => ({
	type: ActionType.SELECT_FAVORITE_QUERY,
	payload: query
})

export const clearSelectedQuery = (): ActionCreatorType => ({
	type: ActionType.CLEAR_SELECTED_QUERY
})
