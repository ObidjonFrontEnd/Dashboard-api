import { useEffect, useState } from 'react'
import apiAxios from '../Api/Api'

const useGetApi = url => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [data, setData] = useState(null)

	const axiosData = async () => {
		setLoading(true)
		try {
			const respons = await apiAxios.get(url)
			setData(respons.data)
			return respons.data
		} catch (err) {
			setError(err.response.data.message || 'Something went wrong')
		} finally {
			setLoading(false)
		}
	}
	useEffect(()=>{
		axiosData()
	},[url])

	return { axiosData, data, loading, error, setError }
}

export default useGetApi
