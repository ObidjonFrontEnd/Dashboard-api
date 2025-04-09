import {
	AlignEndHorizontal,
	Building,
	GraduationCap,
	House,
	Landmark,
	Settings,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navigation({ openClose }) {
	const [hideText, setHideText] = useState(false)

	useEffect(() => {
		let timer
		if (!openClose) {
			timer = setTimeout(() => {
				setHideText(true)
			}, 700)
		} else {
			setHideText(false)
		}
		return () => clearTimeout(timer)
	}, [openClose])

	return (
		<section
			className={`${
				openClose
					? 'md:max-w-[241px] md:min-w-[241px] max-w-[80px] min-w-[80px]'
					: 'md:max-w-[80px] md:min-w-[80px] max-w-[241px] min-w-[241px]'
			}  duration-[1s] bg-[#152259] h-[100vh] sticky top-0 left-0 `}
		>
			<div className=''>
				<div
					className={`${
						openClose ? 'md:px-[29px] px-[15px]' : 'md:px-[15px] px-[29px]'
					} text-center py-[27px] border-b-[#BDBDBD] border-b-[1px] border-b-solid h-[170px]`}
				>
					<div className='img text-center'>
						<img src='avatar.png' alt='' className='mx-auto' />
					</div>
					<div className='txt font-kumbh text-[14px] font-semibold text-white mt-[22px]'>
						<h2
							className={`${
								openClose ? 'md:max-w-full max-w-0' : 'md:max-w-0 max-w-full'
							} overflow-hidden text-nowrap  duration-[1s]`}
						>
							Udemy Inter. school
						</h2>
					</div>
				</div>

				<ul
					className={`${
						openClose ? 'md:px-[29px] px-[15px]' : 'md:px-[15px] px-[29px]'
					} flex flex-col gap-[10px] py-[16px]  mb-[114px]`}
				>
					<li>
						<NavLink
							to='/dashboard'
							className={`${
								openClose
									? 'md:pl-[16px] md:justify-start  justify-center'
									: ' md:justify-center pl-[16px] md:pl-0 justify-start'
							} flex  gap-[10px] text-white items-center  rounded-[4px] max-w-[192px]  h-[40px] text-[14px] font-kumbh font-semibold hover:bg-[#509CDB] duration-[0.7s] `}
						>
							<House />
							<h2
								className={`${
									openClose ? 'md:max-w-full max-w-0' : 'md:max-w-0 max-w-full'
								} ${
									hideText ? 'md:hidden' : 'md:block hidden'
								} duration-[0.7s]  overflow-hidden text-nowrap `}
							>
								Dashboard
							</h2>
						</NavLink>
					</li>

					<li>
						<NavLink
							to='teachers'
							className={`${
								openClose
									? 'md:pl-[16px] md:justify-start justify-center'
									: ' md:justify-center pl-[16px] md:pl-0 justify-start'
							}  flex gap-[10px] text-white items-center rounded-[4px] max-w-[192px]  h-[40px] text-[14px] font-kumbh font-semibold hover:bg-[#509CDB] duration-[0.7s]`}
						>
							<GraduationCap />
							<h2
								className={`${
									openClose ? 'md:max-w-full max-w-0' : 'md:max-w-0 max-w-full'
								} ${
									hideText ? 'md:hidden' : 'md:block hidden'
								} duration-[0.7s]  overflow-hidden text-nowrap`}
							>
								Teachers
							</h2>
						</NavLink>
					</li>

					<li>
						<NavLink
							to='/'
							className={`${
								openClose
									? 'md:pl-[16px] md:justify-start justify-center'
									: ' md:justify-center pl-[16px] md:pl-0 justify-start'
							}  flex gap-[10px] text-white items-center rounded-[4px] max-w-[192px]  h-[40px] text-[14px] font-kumbh font-semibold hover:bg-[#509CDB] duration-[0.7s]`}
						>
							<GraduationCap />
							<h2
								className={`${
									openClose ? 'md:max-w-full max-w-0' : 'md:max-w-0 max-w-full'
								} ${
									hideText ? 'md:hidden' : 'md:block hidden'
								} duration-[0.7s]  overflow-hidden text-nowrap`}
							>
								Students
							</h2>
						</NavLink>
					</li>

					<li>
						<NavLink
							to='/'
							className={`${
								openClose
									? 'md:pl-[16px] md:justify-start justify-center'
									: ' md:justify-center pl-[16px] md:pl-0 justify-start'
							}  flex gap-[10px] text-white items-center rounded-[4px] max-w-[192px]  h-[40px] text-[14px] font-kumbh font-semibold hover:bg-[#509CDB] duration-[0.7s]`}
						>
							<Building />
							<h2
								className={`${
									openClose ? 'md:max-w-full max-w-0' : 'md:max-w-0 max-w-full'
								} ${
									hideText ? 'md:hidden' : 'md:block hidden'
								} duration-[0.7s]  overflow-hidden text-nowrap`}
							>
								Billing
							</h2>
						</NavLink>
					</li>

					<li>
						<NavLink
							to='/'
							className={`${
								openClose
									? 'md:pl-[16px] md:justify-start justify-center'
									: ' md:justify-center pl-[16px] md:pl-0 justify-start'
							}  flex gap-[10px] text-white items-center rounded-[4px] max-w-[192px]  h-[40px] text-[14px] font-kumbh font-semibold hover:bg-[#509CDB] duration-[0.7s]`}
						>
							<Settings />
							<h2
								className={`${
									openClose ? 'md:max-w-full max-w-0' : 'md:max-w-0 max-w-full'
								} ${
									hideText ? 'md:hidden' : 'md:block hidden'
								} duration-[0.7s]  overflow-hidden text-nowrap`}
							>
								Settings and profile
							</h2>
						</NavLink>
					</li>

					<li>
						<NavLink
							to='/'
							className={`${
								openClose
									? 'md:pl-[16px] md:justify-start justify-center'
									: ' md:justify-center pl-[16px] md:pl-0 justify-start'
							}  flex gap-[10px] text-white items-center rounded-[4px] max-w-[192px]  h-[40px] text-[14px] font-kumbh font-semibold hover:bg-[#509CDB] duration-[0.7s]`}
						>
							<AlignEndHorizontal />
							<h2
								className={`${
									openClose ? 'md:max-w-full max-w-0' : 'md:max-w-0 max-w-full'
								} ${
									hideText ? 'md:hidden' : 'md:block hidden'
								} duration-[0.7s]  overflow-hidden text-nowrap`}
							>
								Exams
							</h2>
						</NavLink>
					</li>
				</ul>

				<div
					className={`${
						openClose ? 'md:px-[29px] px-[15px]' : 'md:px-[15px] px-[29px]'
					}`}
				>
					<NavLink
						to='/'
						className={`${
							openClose
								? 'md:pl-[16px] md:justify-start justify-center'
								: ' md:justify-center pl-[16px] md:pl-0 justify-start'
						}  flex gap-[10px]  text-white items-center rounded-[4px] max-w-[192px]  h-[40px] text-[14px] font-kumbh font-semibold hover:bg-[#509CDB] duration-[0.7s]`}
					>
						<Landmark />
						<h2
							className={`${
								openClose ? 'md:max-w-full max-w-0' : 'md:max-w-0 max-w-full'
							} ${
								hideText ? 'md:hidden' : 'md:block hidden'
							} duration-[0.7s]  overflow-hidden text-nowrap`}
						>
							Features
						</h2>
						<span
							className={`${
								openClose ? 'md:flex hidden' : 'md:hidden flex'
							} bg-[#B9D7F1] w-[41px] h-[16px] text-[10px]  justify-center items-center text-black rounded-[8px]`}
						>
							NEW
						</span>
					</NavLink>
				</div>
			</div>
		</section>
	)
}

export default Navigation
