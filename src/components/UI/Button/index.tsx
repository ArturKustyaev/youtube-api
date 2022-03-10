import { ButtonHTMLAttributes, FC, memo } from 'react'
import './styles.sass'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: string
}

const Button: FC<IButtonProps> = ({ children, variant = 'standart', ...rest }) => {
	const classes = `ui-button ${variant === 'outlined' ? 'ui-button--outlined' : ''} ${
		rest.className ? rest.className : ''
	}`

	return (
		<button {...rest} className={classes} type='submit'>
			{children}
		</button>
	)
}

export default memo(Button)
