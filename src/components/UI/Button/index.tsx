import { ButtonHTMLAttributes, FC } from 'react'
import './styles.sass'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
	const classes = `ui-button ${rest.className ? rest.className : ''}`

	return (
		<button {...rest} className={classes} type='submit'>
			{children}
		</button>
	)
}

export default Button
