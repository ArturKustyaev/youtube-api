import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../store/actions/modalActions'
import { deleteFavoriteQuery, selectFavoriteQuery } from '../../store/actions/userActions'
import './styles.sass'

export interface IFavoriteQueryItem {
	id: number
	query: string
	title: string
	order: string
	maxResults: number
}

export type FavoriteQueryItemProps = {
	query: IFavoriteQueryItem
}

const FavoriteQueryItem: FC<FavoriteQueryItemProps> = ({ query }) => {
	const dispatch = useDispatch()

	const deleteHandler = () => {
		dispatch(deleteFavoriteQuery(query.title))
	}

	const clickHandler = () => {
		dispatch(selectFavoriteQuery(query))
		dispatch(openModal())
	}

	return (
		<div className='favorites-query-item'>
			<span>{query.query}</span>
			<div className='favorites-query-item__actions'>
				<button className='favorites-query-item__button' onClick={clickHandler}>
					Изменить
				</button>
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
