import "./App.scss";

import React, { useEffect, useState } from "react";

import LocationCard from "./components/LocationCard/LocationCard";
import LocationList from "./components/LocationList/LocationList";
import useOpenAqApi from "./hooks/useOpenAqApi";
import useSelectedCity from "./hooks/useSelectedCity";

//TODO: add error boundaries
//TODO: add suspense and lazy

function App() {
	const { data: cities, isLoading } = useOpenAqApi(
		"https://api.openaq.org/v1/latest?country=GB&limit=1000"
	);
	const {
		selectedCities,
		handleSelectedCity,
		handleRemoveCity
	} = useSelectedCity();

	return (
		<div className="App">
			<div className="intro-container">
				<h1>Compare your air</h1>
				<p>Compare the air quality between cities in the UK.</p>
				<p>Select cities to compare using the search tool below.</p>
			</div>

			<LocationList
				cities={cities}
				isLoading={isLoading}
				handleSelectedCity={handleSelectedCity}
			/>

			<div className="location-card__container">
				{selectedCities.map((city, index) => (
					<LocationCard
						key={index}
						location={city}
						removeCity={handleRemoveCity}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
