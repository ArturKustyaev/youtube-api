import { FC, useEffect } from 'react'
import './styles.sass'

export interface IVideo {
	id: {
		videoId: string
	}
	snippet: {
		title: string
		description: string
		thumbnails: {
			[key: string]: {
				[key: string]: string
			}
		}
	}
	statistics: {
		viewCount: number
	}
}

type VideoPropsType = {
	video: IVideo
}

const Video: FC<VideoPropsType> = ({ video }) => {
	useEffect(() => {})
	return (
		<div className='video col'>
			<img src={video.snippet.thumbnails.medium.url} alt='thumbnail' className='video__thumbnail' />
			<p className='video__title'>{video.snippet.title}</p>
			<p className='video__description'>{video.snippet.description}</p>
			<span className='video__views-count'>{'video.statistics.viewCount'}</span>
		</div>
	)
}

export default Video
