import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Grid } from '../../assets/icons/grid.svg'
import { ReactComponent as List } from '../../assets/icons/list.svg'
import Container from '../../components/UI/Container'
import FavoriteQueryForm, { FavoriteQueryFormType } from '../../components/Forms/FavoriteQueryForm'
import FindForm from '../../components/Forms/FindForm'
import Header from '../../components/Header'
import Modal from '../../components/UI/Modal'
import Video from '../../components/Video'
import { hideModal } from '../../store/actions/modalActions'
import { clearSelectedQuery } from '../../store/actions/userActions'
import { AppStateType } from '../../store/reducers'
import './styles.sass'

const MainPage: FC = () => {
	const { videos, query, pageInfo } = useSelector((state: AppStateType) => state.videos)
	const { isOpen } = useSelector((state: AppStateType) => state.modal)
	const dispatch = useDispatch()
	const closeHandler = () => {
		dispatch(hideModal())
		dispatch(clearSelectedQuery())
	}
	return (
		<>
			<Header />

			<Container>
				<div className='main'>
					<div className='main__inner'>
						<FindForm />
						{isOpen ? (
							<Modal open={isOpen} onClose={closeHandler}>
								<FavoriteQueryForm formType={FavoriteQueryFormType.addQuery} />
							</Modal>
						) : null}
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
