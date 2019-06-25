import React, { useEffect, useState } from "react";

import axios from "axios";

const useOpenAqApi = url => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	async function fetchData() {
		const { data } = await axios(url);
		setData(data.results);
		setIsLoading(false);
	}

	useEffect(() => {
		// Fetch data on initial load
		fetchData();
	}, []);

	return { data, isLoading };
};

export default useOpenAqApi;
