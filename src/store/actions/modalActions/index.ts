import { ActionCreatorType, ActionType } from './types'

export const openModal = (): ActionCreatorType => ({
	type: ActionType.OPEN_MODAL
})

export const hideModal = (): ActionCreatorType => ({
	type: ActionType.HIDE_MODAL
})
