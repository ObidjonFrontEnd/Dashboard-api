import { Bell, PanelRightOpen } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Header({ openClose, setOpenClose }) {
	const navigate = useNavigate()
	const logOut = async () => {
		await localStorage.removeItem('accessToken')
		navigate('/')
	}

	return (
		<section className='w-full  h-[93px] flex items-center justify-between font-kumbh  bg-white'>
			<div className='px-[15px] flex items-center h-[93px] '>
				<PanelRightOpen
					onClick={() => {
						setOpenClose(!openClose)
					}}
					className={`${
						openClose ? 'rotate-[180deg] md:rotate-0' : 'md:rotate-[180deg]'
					} `}
				/>
			</div>
			<div className=' lg:pr-[126px] pr-[10px] md:pr-[80px] flex items-center gap-[10px] md:gap-[30px] lg:gap-[60px]'>
				<div className=''>
					<Bell />
				</div>
				<button
					className='text-white bg-[#509CDB] flex justify-center items-center rounded-[8px] w-[120px] h-[40px] text-[14px] font-semibold'
					onClick={logOut}
				>
					Log out
				</button>
			</div>
		</section>
	)
}

export default Header
