import { IOpenModal, IHideModal } from './interfaces'

export enum ActionType {
	OPEN_MODAL = 'OPEN_MODAL',
	HIDE_MODAL = 'HIDE_MODAL'
}

export type ActionCreatorType = IOpenModal | IHideModal
