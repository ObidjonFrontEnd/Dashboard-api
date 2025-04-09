import { useState } from 'react'
import usePostAdd from '../Hooks/upDataMulTyp'
import { X } from 'lucide-react'


function TeachersAdd() {

  const [fullname  , fullnameSet ] = useState('')
  const [email   , emailSet ] = useState('')
  const [phone_number   , phone_numberSet ] = useState('')
  const [password  , passwordSet ] = useState('')
  const [Role , roleSet ] = useState('')
  const [is_verified  , verifiedSet ] = useState('')
	

	const { postData, data , error , setData , setError} = usePostAdd('/users/add')

	const save = async (event) => {
		event.preventDefault()
		const user = {
			fullname,
			email,
			phone_number,
			password,
			Role ,
			is_verified
		}

		const result = await postData(user, true) 
		console.log(result)
	}
	console.log(data?.message);
	
	return (
		<>
		<div
				className={` ${
					data ? 'translate-y-0' : 'translate-y-[-150%]'
				} duration-[1s] flex  absolute top-[25px] right-[25px] bg-green-400 rounded-[4px] justify-center items-center p-[10px] w-[200px] md:w-[400px] h-[80px]`}
			>
				<h2 className='text-white text-[12px] font-kumbh font-medium '>
					{data?.message ? data?.message : ' '}
				</h2>
				<X
					className='absolute top-[5px] right-[10px] text-white'
					onClick={() => {
						setData(null)
					}}
				/>
		</div>
		<div
				className={` ${
					error ? 'translate-y-0' : 'translate-y-[-150%]'
				} duration-[1s] flex  absolute top-[25px] right-[25px] bg-red-500 rounded-[4px] justify-center items-center p-[10px] w-[200px] md:w-[400px] h-[80px]`}
			>
				<h2 className='text-white text-[12px] font-kumbh font-medium '>
					{error ? error : ' no error '}
				</h2>
				<X
					className='absolute top-[5px] right-[10px] text-white'
					onClick={() => {
						setError(null)
					}}
				/>
			</div>
			<form className='' onSubmit={save}>
				<div className='title flex justify-between md:px-[8px] mb-[14px]'>
					<h1 className='text-[20px] text-[#4F4F4F] font-kumbh font-medium'>
						Teachers
					</h1>
					<button className='text-white bg-[#509CDB] flex justify-center items-center rounded-[8px] w-[120px] h-[40px] text-[14px] font-semibold'>
						Save
					</button>
				</div>

 
				<div className='flex flex-col md:flex-row md:gap-[30px] lg:gap-[60px] mb-[36px]'>
					<label htmlFor='' className='flex flex-col gap-[5px] '>
						<span className='text-[#8A8A8A] font-medium font-kumbh text-[14px] '>
							Full Name
						</span>
						<input
							type='text'
							placeholder='Full Name'
							className='border-[#A7A7A7] border-[1px] rounded-[4px] w-full max-w-[407px] lg:min-w-[407px] h-[42px] px-[10px] text-[#8A8A8A] font-medium font-kumbh text-[14px] outline-none mx-auto'
						onChange={(e)=>{
              fullnameSet(e.target.value)
            }} />
					</label>

					<label htmlFor='' className='flex flex-col gap-[5px] '>
						<span className='text-[#8A8A8A] font-medium font-kumbh text-[14px] '>
             Email 
						</span>
						<input
							type='text'
							placeholder='Email '
							className='border-[#A7A7A7] w-full border-[1px] rounded-[4px] max-w-[407px] lg:min-w-[407px] h-[42px] px-[10px] text-[#8A8A8A] font-medium font-kumbh text-[14px] outline-none mx-auto'
              onChange={(e)=>{
                emailSet(e.target.value)
              }} />
					</label>
				</div>

        <div className='flex flex-col md:flex-row md:gap-[30px] lg:gap-[60px] mb-[36px]'>
					<label htmlFor='' className='flex flex-col gap-[5px] '>
						<span className='text-[#8A8A8A] font-medium font-kumbh text-[14px] '>
                Phone number
						</span>
						<input
							type='text'
							placeholder='Phone number'
							className='border-[#A7A7A7] w-full border-[1px] rounded-[4px] max-w-[407px] lg:min-w-[407px] h-[42px] px-[10px] text-[#8A8A8A] font-medium font-kumbh text-[14px] outline-none mx-auto'
              onChange={(e)=>{
                phone_numberSet(e.target.value)
              }} />
					</label>

					<label htmlFor='' className='flex flex-col gap-[5px] '>
						<span className='text-[#8A8A8A] font-medium font-kumbh text-[14px] '>
              Password  
						</span>
						<input
							type='text'
							placeholder='Password'
							className='border-[#A7A7A7] w-full border-[1px] rounded-[4px] max-w-[407px] lg:min-w-[407px] h-[42px] px-[10px] text-[#8A8A8A] font-medium font-kumbh text-[14px] outline-none mx-auto'
              onChange={(e)=>{
                passwordSet(e.target.value)
              }} />
					</label>
				</div>



        <div className='flex flex-col md:flex-row md:gap-[30px] lg:gap-[60px] mb-[36px]'>

					<label htmlFor='' className='flex flex-col gap-[5px] '>
						<span className='text-[#8A8A8A] font-medium font-kumbh text-[14px] '>
              Role
						</span>
						<select name="" id="" className='outline-none border-[#A7A7A7] border-[1px] rounded-[4px] max-w-[407px] lg:min-w-[407px] h-[42px] px-[10px] min-w-[100px] text-[#8A8A8A] appearance-none mx-auto w-full' onChange={(e)=>{
                roleSet(e.target.value)
              }}>
              <option value="USER">
                USER
              </option>
              <option value="ADMIN">
                ADMIN
              </option>
            </select>
					</label>

					<label htmlFor='' className='flex flex-col gap-[5px] '>
						<span className='text-[#8A8A8A] font-medium font-kumbh text-[14px] '>
              Verified
						</span>
						<select name="" id="" className='outline-none border-[#A7A7A7] border-[1px] rounded-[4px] max-w-[407px] min-w-[100px] w-full lg:min-w-[407px] h-[42px] px-[10px] text-[#8A8A8A] appearance-none mx-auto' onChange={(e)=>{
                verifiedSet(e.target.value)
              }}>
              <option value="false">
                false
              </option>
              <option value="true">
                true
              </option>
            </select>
					</label>

				</div>



			</form>
		</>
	)
}

export default TeachersAdd
