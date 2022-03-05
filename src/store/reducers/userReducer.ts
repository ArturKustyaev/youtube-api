import { IFavoriteQueryItemProps } from './../../components/FavoriteQueryItem/index'
import { ActionCreatorsType, ActionType } from './../actions/userActions/types'

interface IInitialState {
	login: string
	favoriteQueries: Array<IFavoriteQueryItemProps>
}

const initialState: IInitialState = {
	login: '',
	favoriteQueries: [
		{ title: 'оптимус' },
		{ title: 'панкейки' },
		{ title: 'лес' },
		{ title: 'трамвай' }
	]
}

const userReducer = (state = initialState, action: ActionCreatorsType): IInitialState => {
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
		case ActionType.DELETE_FAVORITE_QUERY: {
			return {
				...state,
				favoriteQueries: [...state.favoriteQueries.filter(query => action.payload !== query.title)]
			}
		}
		default: {
			return state
		}
	}
}

export default userReducer
