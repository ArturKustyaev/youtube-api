import { FC, MouseEvent, ReactNode } from 'react'
import './styles.sass'

interface IModalProps {
	open: boolean
	onClose: () => void
	children?: ReactNode
}

const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
	e.stopPropagation()
}

const Modal: FC<IModalProps> = ({ open, onClose, children }) => {
	return (
		<div className={`modal-wrapper ${open ? 'modal-wrapper--active' : ''}`} onClick={onClose}>
			<div className='modal' onClick={stopPropagation}>
				{children}
			</div>
		</div>
	)
}

export default Modal
