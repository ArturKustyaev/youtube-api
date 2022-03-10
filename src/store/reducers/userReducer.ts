import { IFavoriteQueryItem } from './../../components/FavoriteQueryItem/index'
import { ActionCreatorType, ActionType } from './../actions/userActions/types'

interface IInitialState {
	login: string
	favoriteQueries: Array<IFavoriteQueryItem>
	selectedQuery: IFavoriteQueryItem
}

const initialState: IInitialState = {
	login: '',
	favoriteQueries: [
		{ id: 12313, query: 'оптимус', title: 'оптимус', maxResults: 17, order: 'date' }
	],
	selectedQuery: {} as IFavoriteQueryItem
}

const userReducer = (state = initialState, action: ActionCreatorType): IInitialState => {
	switch (action.type) {
		case ActionType.SET_USER: {
			return {
				...state,
				login: action.payload
			}
		}
		case ActionType.ADD_FAVORITE_QUERY: {
			return {
				...state,
				favoriteQueries: [...state.favoriteQueries, action.payload]
			}
		}
		case ActionType.UPDATE_FAVORITE_QUERY: {
			return {
				...state,
				favoriteQueries: [
					...state.favoriteQueries.map(query =>
						query.id === action.payload.id ? { ...action.payload } : query
					)
				]
			}
		}
		case ActionType.DELETE_FAVORITE_QUERY: {
			return {
				...state,
				favoriteQueries: [...state.favoriteQueries.filter(query => action.payload !== query.query)]
			}
		}
		case ActionType.SELECT_FAVORITE_QUERY: {
			return {
				...state,
				selectedQuery: action.payload
			}
		}
		case ActionType.CLEAR_SELECTED_QUERY: {
			return {
				...state,
				selectedQuery: {} as IFavoriteQueryItem
			}
		}
		default: {
			return state
		}
	}
}

export default userReducer
