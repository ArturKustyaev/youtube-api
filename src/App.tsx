import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.sass'
import FavoriteQueriesPage from './pages/FavoriteQueriesPage'
import LoginPage from './pages/LoginPage/LoginPage'
import MainPage from './pages/MainPage'

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route path='/' element={<LoginPage />} />
					<Route path='/main' element={<MainPage />} />
					<Route path='/favorites' element={<FavoriteQueriesPage />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
