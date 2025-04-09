import { Search } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useGetApi from '../Hooks/GetBezId'

function Teachers() {
	const { data } = useGetApi('/users')
	const [searchQuery, setSearchQuery] = useState('')

	return (
		<>
			<div className='title flex justify-between md:px-[8px] mb-[14px]'>
				<h1 className='text-[20px] text-[#4F4F4F] font-kumbh font-medium'>
					Teachers
				</h1>
				<Link
					to='/teachers/add'
					className='text-white bg-[#509CDB] flex justify-center items-center rounded-[8px] w-[120px] h-[40px] text-[14px] font-semibold'
				>
					Add Teachers
				</Link>
			</div>

			<div className='bg-[#FCFAFA] w-full h-[49px] gap-[16px] rounded-[4px] flex items-center px-[16px] text-[#8A8A8A] mb-[30px]'>
				<Search />
				<input
					type='text'
					onChange={e => {
						setSearchQuery(e.target.value)
					}}
					placeholder='Search for a student by name or email'
					className='w-full outline-none bg-transparent text-[14px]'
				/>
			</div>

			{data ? (
				<div className='overflow-auto max-h-[460px] md:max-h-[500px] w-full'>
					<table className='w-full text-start max-h-[400px] table-auto '>
						<thead className='sticky top-0 bg-[#ebf6ff]'>
							<tr className='font-bold w-full h-[48px]'>
								<td className='px-[8px] sticky top-0 left-0 bg-[#ebf6ff] z-50'>
									fullname
								</td>
								<td>email</td>
								<td>phone number</td>
								<td>role</td>
								<td>createdAt</td>
							</tr>
						</thead>
						{data
							?.filter(({ fullname }) =>
								fullname.toLowerCase().includes(searchQuery.toLowerCase())
							)
							?.map(
								(
									{ fullname, email, phone_number, role, createdAt, id },
									index
								) => {
									return (
										<tbody key={index}>
											<tr
												className={`${
													index % 2 == 0 ? 'bg-white' : ' bg-[#EBF6FF80]'
												}  h-[48px] `}
											>
												<td className='max-w-[100px] px-[8px] sticky z-0 left-0 md:bg-transparent bg-[#ebf6ff]'>
													<Link to={`/teachers/teacher/${id}`}>{fullname}</Link>
												</td>

												<td>{email}</td>
												<td>{phone_number}</td>
												<td>{role}</td>
												<td>{createdAt}</td>
											</tr>
										</tbody>
									)
								}
							)}
					</table>
				</div>
			) : (
				<div className='min-h-[419px] bg-[#FCFAFA] w-full flex flex-col justify-center items-center text-[#4F4F4F] px-[10px] text-center'>
					<img src='kuala.png' alt='' />
					<p className='font-semibold text-[20px] md:text-[28px]'>
						No Teachers at this time
					</p>
					<p className='mb-[20px] font-medium text-[12px] md:text-[14xp]'>
						Teachers will appear here after they enroll in your school.
					</p>
				</div>
			)}
		</>
	)
}

export default Teachers
