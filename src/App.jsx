
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom'
import AuthLayout from './Layout/AuthLayout'
import MainLayout from './Layout/MainLayout'
import Dashboard from './page/Dashboard'
import Login from './page/Login'
import Registr from './page/Registr'
import Teachers from './page/Teachers'
import TeachersAdd from './page/TeachersAdd'
import Teacher from './page/Teacher'

function App() {

	function isAuth() {
		return localStorage.getItem('accessToken') !== null
	}
	function ProtateRoute({ children }) {
		return isAuth() ? children : <Navigate to='/login' />
	}
	function NoProtateRoute({ children }) {
		return isAuth() ? <Navigate to='/dashboard' /> : children
	}




	return (
		<>
			<Router>
				<Routes>
					<Route
						element={
							<ProtateRoute>
								<MainLayout />
							</ProtateRoute>
						}
					>
						<Route path={`/dashboard`} element={<Dashboard />} />
						<Route element={<Teachers />} path='teachers' />
						<Route path='/teachers/add' element={<TeachersAdd />} />
						<Route path='/teachers/teacher/:id' element={<Teacher/>} />
					</Route>

					<Route
						element={
							<NoProtateRoute>
								<AuthLayout />
							</NoProtateRoute>
						}
					>
						<Route element={<Login />} path={`/`} />
						<Route element={<Registr />} path='/registr' />
					</Route>
				</Routes>
			</Router>
		</>
	)
}

export default App
