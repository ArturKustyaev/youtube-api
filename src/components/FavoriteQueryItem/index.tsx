import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { DeleteFavoriteQuery } from '../../store/actions/userActions'
import './styles.sass'

export interface IFavoriteQueryItemProps {
	title: string
}

const FavoriteQueryItem: FC<IFavoriteQueryItemProps> = ({ title }) => {
	const dispatch = useDispatch()

	const deleteHandler = () => {
		dispatch(DeleteFavoriteQuery(title))
	}

	return (
		<div className='favorites-query-item'>
			<span>{title}</span>
			<div className='favorites-query-item__actions'>
				<button className='favorites-query-item__button'>Изменить</button>
				<button
					className='favorites-query-item__button favorites-query-item__button--danger'
					onClick={deleteHandler}
				>
					Удалить
				</button>
			</div>
		</div>
	)
}

export default FavoriteQueryItem
