import { FC } from 'react'
import FavoriteQueryItem, { IFavoriteQueryItem } from '../FavoriteQueryItem'
import './styles.sass'

type FavoriteQueriesListProps = {
	favoriteQueries: Array<IFavoriteQueryItem>
}

const FavoriteQueriesList: FC<FavoriteQueriesListProps> = ({ favoriteQueries }) => {
	return (
		<ul className='favorite-queries-list'>
			{favoriteQueries.map(query => {
				return <FavoriteQueryItem key={query.title} query={query} />
			})}
		</ul>
	)
}

export default FavoriteQueriesList
