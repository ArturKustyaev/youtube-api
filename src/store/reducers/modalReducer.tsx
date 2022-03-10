import { ActionCreatorType, ActionType } from '../actions/modalActions/types'

interface IInitialState {
	isOpen: boolean
}

const initialState: IInitialState = {
	isOpen: false
}

const modalReducer = (state = initialState, action: ActionCreatorType): IInitialState => {
	switch (action.type) {
		case ActionType.OPEN_MODAL:
			return {
				...state,
				isOpen: true
			}
		case ActionType.HIDE_MODAL:
			return {
				...state,
				isOpen: false
			}
		default:
			return state
	}
}

export default modalReducer
