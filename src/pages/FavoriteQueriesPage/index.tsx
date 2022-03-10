import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../components/UI/Container'
import FavoriteQueriesList from '../../components/FavoriteQueriesList'
import FavoriteQueryForm, { FavoriteQueryFormType } from '../../components/Forms/FavoriteQueryForm'
import Header from '../../components/Header'
import Modal from '../../components/UI/Modal'
import { hideModal } from '../../store/actions/modalActions'
import { clearSelectedQuery } from '../../store/actions/userActions'
import { AppStateType } from '../../store/reducers'
import './styles.sass'

const FavoriteQueriesPage: FC = () => {
	const dispatch = useDispatch()
	const { favoriteQueries, selectedQuery } = useSelector((state: AppStateType) => state.user)
	const { isOpen } = useSelector((state: AppStateType) => state.modal)

	const closeHandler = () => {
		dispatch(hideModal())
		dispatch(clearSelectedQuery())
	}

	return (
		<>
			<Header />
			<Container>
				<h2 className='favorites-page__title'>Избранное</h2>
				<FavoriteQueriesList favoriteQueries={favoriteQueries} />
				{isOpen ? (
					<Modal open={isOpen} onClose={closeHandler}>
						<FavoriteQueryForm
							formType={FavoriteQueryFormType.updateQuery}
							selectedQuery={selectedQuery}
						/>
					</Modal>
				) : null}
			</Container>
		</>
	)
}

export default FavoriteQueriesPage
