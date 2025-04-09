import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Navigation from '../Components/Navigation'
import { useState } from 'react'

function MainLayout() {
	const [openClose , openCloseSet] = useState(true)
	return (
			<section className="flex w-full overflow-x-hidden">
						<nav className='max-w-[241px] '>
							<Navigation openClose={openClose} setOpenClose={openCloseSet} />
						</nav>
						<main className='w-full h-[100vh] overflow-y-auto overflow-x-hidden relative'>
							<div className={`${openClose?"md:max-w-[calc(100%-241px)] md:min-w-[calc(100%-241px)] max-w-[calc(100%-80px)] min-w-[calc(100%-80px)]" : "max-w-[calc(100%-241px)] min-w-[calc(100%-241px)] md:max-w-[calc(100%-80px)] md:min-w-[calc(100%-80px)]"}  fixed top-0 right-0 duration-[1s]`}>
								<Header openClose={openClose} setOpenClose={openCloseSet}  />
							</div>
							<div className="md:pl-[29px] lg:mr-[94px] px-[15px] h-[calc(100vh-93px)] mt-[93px]">
								<Outlet />
							</div>
						</main>
			</section>
	)
}

export default MainLayout
