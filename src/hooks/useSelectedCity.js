import React, { useState } from "react";

import axios from "axios";

const useSelectedCity = () => {
	const [selectedCities, setSelectedCities] = useState([]);

	async function handleSelectedCity(city) {
		const { data } = await axios(
			`https://api.openaq.org/v1/locations?location=${city.location}`
		);

		// Add last updated data to selected city
		const amendedCity = { ...city, updatedAt: data.results[0].lastUpdated };

		// Add amended city to existing list of cities
		setSelectedCities([...selectedCities, amendedCity]);
	}

	function handleRemoveCity(cityToRemove) {
		const filteredCities = selectedCities.filter(
			city => city.location !== cityToRemove.location
		);

		setSelectedCities(filteredCities);
	}

	return { selectedCities, handleSelectedCity, handleRemoveCity };
};

export default useSelectedCity;
