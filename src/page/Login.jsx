import { X } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import usePostApi from '../Hooks/PostBezId'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const { postData, loading, error, setError } = usePostApi('/auth/login')

	const Submit = async event => {
		event.preventDefault()
		await postData({
			email,
			password,
		})
		if (!error && JSON.parse(localStorage.getItem('accessToken'))) {
			navigate('/dashboard')
		}
	}

	return (
		<div className='h-full flex flex-col gap-[53px] justify-center px-[20px] relative '>
			<div className='title text-center px-[20px] text-[#4F4F4F] text-[24px] sm:text-[36px] font-kumbh font-semibold'>
				<h2>Welcome, Log into you account</h2>
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
			<form
				action=''
				className='mx-auto h-[494px] rounded-[4px] bg-white md:min-w-[512px] md:max-w-[512px] px-[25px] md:px-[132px] py-[72px] '
				onSubmit={Submit}
			>
				<h2 className='text-center text-[#667085] space-y-4 text-[16px] font-kumbh leading-[25px] font-medium mb-[34px]'>
					It is our great pleasure to have you on board!
				</h2>

				<label htmlFor=''>
					<input
						type='text'
						className='w-full h-[42px] text-[#8A8A8A] text-[14px] font-kumbh px-[13px]  outline-none border-[#A7A7A7] border-[1px] border-solid rounded-[4px] my-[14px]'
						placeholder='Enter your Login'
						onChange={e => {
							setEmail(e.target.value)
						}}
					/>
				</label>

				<label htmlFor=''>
					<input
						type='password'
						className='w-full h-[42px] text-[#8A8A8A] text-[14px] font-kumbh px-[13px]  outline-none border-[#A7A7A7] border-[1px] mb-[34px] border-solid rounded-[4px]'
						placeholder='Enter your Password'
						onChange={e => {
							setPassword(e.target.value)
						}}
					/>
				</label>

				<button
					disabled={loading}
					className='font-bold disabled:bg-slate-500 bg-blue-500 hover:bg-blue-400 active:bg-blue-300 h-[42px] font-kumbh text-[14px] disabled:cursor-not-allowed text-white w-full rounded-[4px] duration-[0.5s] flex justify-center items-center gap-[10px]'
				>
					{loading ? 'Loding... ' : 'Login'}
					{loading ? (
						<span className='h-4 w-4 animate-spin border-2 border-white border-t-transparent rounded-full'></span>
					) : (
						''
					)}
				</button>
				<Link to='/registr'>
					<button
						disabled={loading}
						type='button'
						className='font-bold disabled:bg-slate-500 text-center flex justify-center items-center text-[#2D88D4] h-[42px] font-kumbh text-[14px]  w-full rounded-[4px] mt-[14px] bg-white hover:bg-blue-400 disabled:cursor-not-allowed active:bg-blue-300 hover:text-white'
					>
						Sign up
					</button>
				</Link>
			</form>
		</div>
	)
}

export default Login
