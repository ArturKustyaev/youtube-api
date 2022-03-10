export interface IOrderField {
	name: string
	value: string
}

export const orderFields: Array<IOrderField> = [
	{ name: 'по дате', value: 'date' },
	{ name: 'по рейтингу', value: 'rating' },
	{ name: 'по релевантности', value: 'relevance' },
	{ name: 'по алфавиту', value: 'title' },
	{ name: 'по убыванию кол-ва видео', value: 'videoCount' },
	{ name: 'по кол-ву просмотров', value: 'viewCount' }
]
