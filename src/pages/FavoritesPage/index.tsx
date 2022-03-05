import { FC } from 'react'
import { useSelector } from 'react-redux'
import Container from '../../components/Container'
import FavoriteQueriesList from '../../components/FavoriteQueriesList'
import Header from '../../components/Header'
import { AppStateType } from '../../store/reducers'
import './styles.sass'

const FavoritesPage: FC = () => {
	const { favoriteQueries } = useSelector((state: AppStateType) => state.user)

	return (
		<>
			<Header />
			<Container>
				<h2 className='favorites-page__title'>Избранное</h2>
				<FavoriteQueriesList favoriteQueries={favoriteQueries} />
			</Container>
		</>
	)
}

export default FavoritesPage
