import './App.sass'
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import FindPage from './pages/FindPage'
import FavoritesPage from './pages/FavoritesPage'

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route path='/' element={<LoginPage />} />
					<Route path='/main' element={<MainPage />} />
					<Route path='/find' element={<FindPage />} />
					<Route path='/favorites' element={<FavoritesPage />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
