import React from 'react'
import { useParams } from 'react-router-dom'
import useGetApi from '../Hooks/GetBezId'
import { GraduationCap, Mail, PhoneCall } from 'lucide-react'

const Teacher = () => {
	const { id } = useParams()
	const api = '/users/'+id
	
	const { data } = useGetApi(api)
	return (

	<div className='flex gap-[50px] items-center justify-center md:flex-row flex-col'>
   
				<div className="">

					<div className=" w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-[50%] border-[1px] overflow-hidden border-solid border-gray-400 mb-[30px] mx-auto">
							<img src="vite.svg" alt="" className='w-full h-full' />				
						</div>
						<div className="text-[16px] text-[#1A1A1A] font-medium text-center">
									<p className='font-bold text-[20px]'>{data?.fullname}</p>
									<p >{data?.email}</p>
						</div>
						<div className="flex gap-[25px] justify-center mt-[40px]">
							<div className="w-[61px] h-[61px] bg-[#EFF3FA] flex justify-center items-center rounded-[8px]">
								<GraduationCap />
							</div>
							<div className="w-[61px] h-[61px] bg-[#EFF3FA] flex justify-center items-center rounded-[8px]">
								<PhoneCall />
							</div>
							<div className="w-[61px] h-[61px] bg-[#EFF3FA] flex justify-center items-center rounded-[8px]">
								<Mail />
							</div>
						</div>
				</div>
	
				<div className="font-kumbh font-bold text-[#1A1A1A] text-[16px] text-center md:text-start">
					<p>Phone Number: <span className='font-medium'>{data?.phone_number ? data?.phone_number : "No"}</span> </p>
					<p>Role: <span className='font-medium'>{data?.role}</span></p>
					<p>Verified: <span className='font-medium'>{data?.is_verified ? "true" : "false"}</span></p>
					<p>createdAt: <span className='font-medium'>{data?.createdAt}</span> </p>
				</div>
           
						
				
					
			
		</div>
	)
}

export default Teacher
