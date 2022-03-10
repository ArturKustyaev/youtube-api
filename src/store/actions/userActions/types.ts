import {
	IAddFavoriteQuery,
	IClearSelectedQuery,
	IDeleteFavoriteQuery,
	ISelectFavoriteQuery,
	ISetUser,
	IUpdateFavoriteQuery
} from './interfaces'

export enum ActionType {
	SET_USER = 'SET_USER',
	ADD_FAVORITE_QUERY = 'ADD_FAVORITE_QUERY',
	UPDATE_FAVORITE_QUERY = 'UPDATE_FAVORITE_QUERY',
	DELETE_FAVORITE_QUERY = 'DELETE_FAVORITE_QUERY',
	SELECT_FAVORITE_QUERY = 'SELECT_FAVORITE_QUERY',
	CLEAR_SELECTED_QUERY = 'CLEAR_SELECTED_QUERY'
}

export type ActionCreatorType =
	| ISetUser
	| IAddFavoriteQuery
	| IUpdateFavoriteQuery
	| IDeleteFavoriteQuery
	| ISelectFavoriteQuery
	| IClearSelectedQuery
