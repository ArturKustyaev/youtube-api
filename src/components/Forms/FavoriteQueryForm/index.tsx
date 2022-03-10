import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { hideModal } from '../../../store/actions/modalActions'
import {
	addFavoriteQuery,
	clearSelectedQuery,
	updateFavoriteQuery
} from '../../../store/actions/userActions'
import { orderFields } from '../../../store/constants'
import { IFavoriteQueryItem } from '../../FavoriteQueryItem'
import Button from '../../UI/Button'
import Input from '../../UI/Input'
import Label from '../../UI/Label'
import RangeSlider from '../../UI/RangeSlider'
import Select from '../../UI/Select'
import './styles.sass'

export enum FavoriteQueryFormType {
	addQuery = 'addQuery',
	updateQuery = 'updateQuery'
}

interface IFavoriteQueryFormProps {
	selectedQuery?: IFavoriteQueryItem
	formType: FavoriteQueryFormType
}

const FavoriteQueryForm: FC<IFavoriteQueryFormProps> = ({
	selectedQuery = {} as IFavoriteQueryItem,
	formType
}) => {
	const dispatch = useDispatch()

	const [modalData, setModalData] = useState<IFavoriteQueryItem>({
		id: selectedQuery.id,
		query: selectedQuery.query,
		title: selectedQuery.title,
		order: selectedQuery.order,
		maxResults: selectedQuery.maxResults
	})

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setModalData({ ...modalData, [e.target.name]: e.target.value })
	}

	const closeHandler = () => {
		dispatch(hideModal())
		dispatch(clearSelectedQuery())
	}

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		switch (formType) {
			case FavoriteQueryFormType.addQuery:
				return dispatch(addFavoriteQuery(modalData))
			case FavoriteQueryFormType.updateQuery:
				return dispatch(updateFavoriteQuery(modalData))
		}
	}

	const selectHandler = (value: string) => {
		setModalData({ ...modalData, order: value })
	}

	const rangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setModalData({ ...modalData, maxResults: +e.target.value })
	}

	return (
		<form className='favorite-query-form' onSubmit={submitHandler}>
			<div className='favorite-query-form__inner'>
				<h2 className='favorite-query-form__title'>Создать запрос</h2>
				<div className='favorite-query-form__inputs-group'>
					<div className='favorite-query-form__input'>
						<Label className='favorite-query-form__label'>Запрос</Label>
						<Input
							className='favorite-query-form__input'
							name='query'
							placeholder='Введите запрос'
							value={modalData.query}
							onChange={changeHandler}
						/>
					</div>
					<div className='favorite-query-form__input'>
						<Label className='favorite-query-form__label'>
							<span className='favorite-query-form__label--required'>*</span> Название
						</Label>
						<Input
							className='favorite-query-form__input'
							name='title'
							placeholder='Укажите название'
							value={modalData.title}
							onChange={changeHandler}
						/>
					</div>
					<Label className='favorite-query-form__label'>Сортировать по</Label>
					<Select items={orderFields} onSelectItem={selectHandler} defaultValue={modalData.order} />

					<Label className='favorite-query-form__label'>Максимальное количество</Label>
					<div className='range-slider__inner'>
						<RangeSlider
							className='range-slider__range'
							min={0}
							max={50}
							value={modalData.maxResults}
							onChange={rangeHandler}
						/>
						<div className='range-slider__results-count'>{modalData.maxResults}</div>
					</div>
				</div>
				<div className='favorite-query-form__actions'>
					<Button className='favorite-query-form__button' variant='outlined' onClick={closeHandler}>
						Не сохранять
					</Button>
					<Button className='favorite-query-form__button' type='submit'>
						Сохранить
					</Button>
				</div>
			</div>
		</form>
	)
}

export default FavoriteQueryForm
