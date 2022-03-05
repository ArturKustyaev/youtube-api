import { IFavoriteQueryItemProps } from './../../../components/FavoriteQueryItem/index';
import { ActionType } from './types'

export interface ISetUser {
	type: typeof ActionType.SET_USER
	payload: string
}

export interface IAddFavoriteQuery {
	type: typeof ActionType.ADD_FAVORITE_QUERY
	payload: IFavoriteQueryItemProps
}

export interface IUpdateFavoriteQuery {
	type: typeof ActionType.UPDATE_FAVORITE_QUERY
	payload: string
}

export interface IDeleteFavoriteQuery {
	type: typeof ActionType.DELETE_FAVORITE_QUERY
	payload: string
}