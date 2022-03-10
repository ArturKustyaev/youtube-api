import { FC, InputHTMLAttributes, memo } from 'react'
import './styles.sass'

const RangeSlider: FC<InputHTMLAttributes<HTMLInputElement>> = ({
	min = 0,
	max = 100,
	value = 0,
	className,
	...rest
}) => {
	const classes = `ui-range-wrapper ${className ? className : ''}`

	const gradirntPercent: number = (+value * 100) / +max

	return (
		<div className={classes}>
			<input
				{...rest}
				min={min}
				max={max}
				value={value}
				className='ui-range'
				type='range'
				style={{
					background: `linear-gradient(90deg, #42A6EA ${gradirntPercent}%, #EAEAEA ${gradirntPercent}%)`
				}}
			/>
		</div>
	)
}

export default memo(RangeSlider)
//
