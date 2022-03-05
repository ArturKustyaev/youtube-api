import { FC } from 'react'
import Input, { IInputProps } from '../Input'
import './styles.sass'

interface ILabelInputProps extends IInputProps {
	label: string
}

const LabelInput: FC<ILabelInputProps> = ({ name, label, ...rest }) => {
	return (
		<div className='ui-label-input-wrapper'>
			<label className='ui-label-input__label'>{label}</label>
			<Input {...rest} name={name} />
		</div>
	)
}

export default LabelInput
