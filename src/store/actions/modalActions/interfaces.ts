import { ActionType } from './types'

export interface IOpenModal {
	type: typeof ActionType.OPEN_MODAL
}

export interface IHideModal {
	type: typeof ActionType.HIDE_MODAL
}
