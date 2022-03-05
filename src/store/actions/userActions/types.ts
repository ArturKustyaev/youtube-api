import {
	ISetUser,
	IAddFavoriteQuery,
	IUpdateFavoriteQuery,
	IDeleteFavoriteQuery
} from './interfaces'

export enum ActionType {
	SET_USER = 'SET_USER',
	ADD_FAVORITE_QUERY = 'ADD_FAVORITE_QUERY',
	UPDATE_FAVORITE_QUERY = 'UPDATE_FAVORITE_QUERY',
	DELETE_FAVORITE_QUERY = 'DELETE_FAVORITE_QUERY'
}

export type ActionCreatorsType =
	| ISetUser
	| IAddFavoriteQuery
	| IUpdateFavoriteQuery
	| IDeleteFavoriteQuery
