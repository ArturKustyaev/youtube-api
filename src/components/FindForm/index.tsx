import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavoriteQuery, DeleteFavoriteQuery } from '../../store/actions/userActions'
import { fetchSearchedVideos, setSearchQuery } from '../../store/actions/videosActions'
import { AppStateType } from '../../store/reducers'
import { IFavoriteQueryItemProps } from '../FavoriteQueryItem'
import Button from '../UI/Button'
import Input from '../UI/Input'
import './styles.sass'

const FindForm: FC = () => {
	const { favoriteQueries } = useSelector((state: AppStateType) => state.user)
	const { videos, query } = useSelector((state: AppStateType) => state.videos)

	const [value, setValue] = useState<string>(query)
	const [isFavorite, setIsFavorite] = useState<boolean>(false)

	const dispatch = useDispatch()

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value

		setIsFavorite(false)
		setValue(value)

		favoriteQueries.some(query => {
			if (query.title === value.trim()) {
				setIsFavorite(true)
			}
		})
	}

	const checkedHandler = () => {
		setIsFavorite(!isFavorite)

		if (!isFavorite) {
			const newFavoriteQuery: IFavoriteQueryItemProps = {
				title: value
			}
			dispatch(addFavoriteQuery(newFavoriteQuery))
		} else {
			dispatch(DeleteFavoriteQuery(value))
		}
	}

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(setSearchQuery(value))
		dispatch(fetchSearchedVideos(value))
	}

	return (
		<form className='find-form' onSubmit={submitHandler}>
			<div className='find-form__inner'>
				<div className={`input-wrapper ${videos.length ? 'input-wrapper--extend' : ''}`}>
					<Input
						className='find-form__input'
						name='find'
						type='text'
						value={value}
						onChange={changeHandler}
					/>

					{videos.length ? (
						<input
							disabled={value.length === 0}
							className='find-form-checkbox'
							type='checkbox'
							checked={isFavorite}
							onChange={checkedHandler}
						/>
					) : null}
				</div>

				<Button disabled={value.length === 0} className='find-form__button' type='submit'>
					Найти
				</Button>
			</div>
		</form>
	)
}

export default FindForm
