import { FC } from 'react'
import FavoriteQueryItem, { IFavoriteQueryItemProps } from '../FavoriteQueryItem'
import './styles.sass'

type FavoriteQueriesListProps = {
	favoriteQueries: Array<IFavoriteQueryItemProps>
}

const FavoriteQueriesList: FC<FavoriteQueriesListProps> = ({ favoriteQueries }) => {
	return (
		<ul className='favorite-queries-list'>
			{favoriteQueries.map(query => (
				<FavoriteQueryItem key={query.title} title={query.title} />
			))}
		</ul>
	)
}

export default FavoriteQueriesList
