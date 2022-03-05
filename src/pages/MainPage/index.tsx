import { FC } from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as Grid } from '../../assets/icons/grid.svg'
import { ReactComponent as List } from '../../assets/icons/list.svg'
import Container from '../../components/Container'
import FindForm from '../../components/FindForm'
import Header from '../../components/Header'
import Video from '../../components/Video'
import { AppStateType } from '../../store/reducers'
import './styles.sass'

const MainPage: FC = () => {
	const { videos, query, pageInfo } = useSelector((state: AppStateType) => state.videos)

	return (
		<>
			<Header />
			<Container>
				<div className='main'>
					<div className='main__inner'>
						<h1 className='main__title'>Поиск видео</h1>
						<FindForm />
						{videos.length ? (
							<div className='find-results'>
								<div className='find-results__top'>
									<div className='find-results__find-info'>
										<span className='find-results__label'>Видео по запросу </span>
										<span className='find-results__request'>«{query}»</span>
										<span className='find-results__count'>{pageInfo.totalResults}</span>
									</div>
									<div className='view-model'>
										<List className='view-model__list' />
										<Grid className='view-model__grid' />
									</div>
								</div>
								<div className='find-results__main'>
									<div className='row'>
										{videos.map(video => (
											<Video key={video.id.videoId} video={video} />
										))}
									</div>
								</div>
							</div>
						) : null}
					</div>
				</div>
			</Container>
		</>
	)
}

export default MainPage
