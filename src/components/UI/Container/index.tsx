import { FC, ReactNode } from 'react'
import './Container.sass'

type ContainerPropsType = {
	children: ReactNode
}

const Container: FC<ContainerPropsType> = ({ children }) => {
	return <div className={'container'}>{children}</div>
}

export default Container
