import { FC, InputHTMLAttributes, memo } from 'react'
import './styles.sass'

const Label: FC<InputHTMLAttributes<HTMLLabelElement>> = ({ children, ...rest }) => {
	const classes = `ui-label ${rest.className ? rest.className : ''}`

	return (
		<label {...rest} className={classes}>
			{children}
		</label>
	)
}

export default memo(Label)
