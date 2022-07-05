import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import { IApartmentItem } from '../types/apartments';

axios.defaults.baseURL = "http://localhost:8000/";

const useAxiosFetch = (axiosParams: AxiosRequestConfig) => {
	const [response, setResponse] = useState<IApartmentItem[] | null>(null);
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);

	const fetchData = async (): Promise<void> => {
		try {
			const response = await axios.request(axiosParams);
			setResponse(response.data);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				setError("Axios Error with Message: " + error.message);
			} else {
				setError(error as string);
			}
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return [response, error, loading, fetchData] as const;
};

export { useAxiosFetch }