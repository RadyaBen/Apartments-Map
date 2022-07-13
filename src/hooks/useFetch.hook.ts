import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/';

const useAxiosFetch = (axiosParams?: AxiosRequestConfig) => {
	const [response, setResponse] = useState<any>(null);
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<any>(true);

	const fetchData = async (axiosParams: AxiosRequestConfig): Promise<void> => {
		try {
			const response = await axios.request(axiosParams);
			response && setResponse(response.data);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				setError('Axios Error with Message: ' + error.message);
			} else {
				setError(error as string);
			}
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		axiosParams && fetchData(axiosParams);
		// eslint-disable-next-line
	}, []);

	return [response, error, loading, fetchData] as const;
};

export { useAxiosFetch }