import './App.scss';

import React, { useEffect, useState } from 'react';

import Intro from './components/Intro/Intro';
import LocationCard from './components/LocationCard/LocationCard';
import LocationList from './components/LocationList/LocationList';
import useOpenAqApi from './hooks/useOpenAqApi';
import useSelectedCity from './hooks/useSelectedCity';

function App() {
	const { data: cities, isLoading } = useOpenAqApi(
		'https://api.openaq.org/v1/latest?country=GB&limit=1000'
	);
	const {
		selectedCities,
		handleSelectedCity,
		handleRemoveCity
	} = useSelectedCity();

	return (
		<div className="App">
			<Intro />

			{/* Dropdown autocomplete */}
			<LocationList
				cities={cities}
				isLoading={isLoading}
				handleSelectedCity={handleSelectedCity}
			/>

			{/* Selected location cards */}
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
