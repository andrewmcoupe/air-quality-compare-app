import React, { useEffect, useState } from "react";

import axios from "axios";

const useOpenAqApi = url => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	async function fetchData() {
		try {
			const { data } = await axios(url);
			setData(data.results);
			setIsLoading(false);
		} catch (error) {
			setError(error);
		}
	}

	useEffect(() => {
		// Fetch data once on initial load
		fetchData();
	}, []);

	return { data, isLoading, error };
};

export default useOpenAqApi;
