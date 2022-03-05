import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './styles.sass'

type ButtonLinkType = {
	className?: string
	to: string
	children: ReactNode
}

const ButtonLink: FC<ButtonLinkType> = ({ className = '', to, children }) => {
	const classes = 'button-link ' + className

	return (
		<Link className={classes} to={to}>
			{children}
		</Link>
	)
}

export default ButtonLink
