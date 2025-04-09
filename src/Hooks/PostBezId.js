import { useState } from 'react'
import apiAxios from '../Api/Api'

const usePostApi = url => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [data, setData] = useState(null)

	const postData = async newData => {
		setLoading(true)
		try {
			const respons = await apiAxios.post(url, newData)
			setData(respons.data)
			localStorage.setItem(
				'accessToken',
				JSON.stringify(respons.data.accessToken)
			)
			return respons.data
		} catch (err) {
			setError(err.response.data.message || 'Something went wrong')
		} finally {
			setLoading(false)
		}
	}

	return { postData, data, loading, error, setError }
}

export default usePostApi
