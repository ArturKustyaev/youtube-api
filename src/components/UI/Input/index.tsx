import { FC, InputHTMLAttributes, ReactNode } from 'react'
import './Input.sass'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
}

const Input: FC<IInputProps> = ({ name, ...rest }) => {
	const classes = `ui-input ${rest.className ? rest.className : ''}`
	
	return <input {...rest} className={classes} name={name} />
}

export default Input
