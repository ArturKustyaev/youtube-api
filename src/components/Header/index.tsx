import { FC, memo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import Container from '../UI/Container'
import './styles.sass'

const Header: FC = () => {
	return (
		<div className='header'>
			<Container>
				<div className='header__inner'>
					<img src={logo} alt='logo' className='header__logo' />
					<nav className='header__nav'>
						<ul className='menu'>
							<li className='menu__item'>
								<NavLink
									className={({ isActive }) =>
										`menu__link  ${isActive ? 'menu__link--active' : ''}`
									}
									to='/main'
								>
									Поиск
								</NavLink>
							</li>
							<li className='menu__item'>
								<NavLink
									className={({ isActive }) =>
										`menu__link  ${isActive ? 'menu__link--active' : ''}`
									}
									to='/favorites'
								>
									Избранное
								</NavLink>
							</li>
						</ul>
					</nav>
					<Link className='link' to='/'>
						Выйти
					</Link>
				</div>
			</Container>
		</div>
	)
}

export default memo(Header)
