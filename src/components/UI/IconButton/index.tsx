import { FC } from 'react'
import './styles.sass'

type IconButtonPropsType = {
	className?: string
	icon: string
}

const IconButton: FC<IconButtonPropsType> = ({ className = '', icon }) => {
	const classes = 'icon-button ' + className
    
	return (
		<button className={classes}>
			<img className='icon-button__img' src={icon} alt='icon' />
		</button>
	)
}

export default IconButton
