import { FC, HTMLAttributes, useState } from 'react'
import { IOrderField } from '../../../store/constants'
import './styles.sass'

interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
	items: Array<IOrderField>
	onSelectItem: (value: string) => void
}

const Select: FC<ISelectProps> = ({ items, onSelectItem, ...rest }) => {
	const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false)

	const setDefaultValue = (): number => {
		return rest.defaultValue ? items.findIndex(item => item.value === rest.defaultValue) : -1
	}

	const [selectedIndex, setSelectedIndex] = useState<number>(setDefaultValue())

	const clickHandler = (index: number) => {
		onSelectItem(items[index].value)
		setSelectedIndex(index)
		closeHandler()
	}

	const closeHandler = () => {
		setIsDropdownVisible(false)
	}

	return (
		<div className='ui-select' tabIndex={3} onBlur={closeHandler}>
			<div
				className={`ui-select__selection ${
					isDropdownVisible ? 'ui-select__selection--active' : ''
				}`}
				onClick={() => setIsDropdownVisible(!isDropdownVisible)}
			>
				{selectedIndex !== -1 ? (
					items[selectedIndex].name
				) : (
					<span className='ui-select__placeholder'>Выберите сортировку</span>
				)}
			</div>
			{isDropdownVisible ? (
				<ul className='ui-select__dropdown'>
					{items.map((item, index) => (
						<li className='ui-select__item' key={item.value} onClick={() => clickHandler(index)}>
							{item.name}
						</li>
					))}
				</ul>
			) : null}
		</div>
	)
}

export default Select
