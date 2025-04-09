import { Outlet } from 'react-router-dom'

function AuthLayout() {
	return (
		<section className='h-[100vh] overflow-y-hidden bg-gray-100'>
			<Outlet />
		</section>
	)
}

export default AuthLayout
