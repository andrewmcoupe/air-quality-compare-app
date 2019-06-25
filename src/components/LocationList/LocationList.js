import './LocationList.scss';

import React, { useRef, useState } from 'react';

import { FaSearch } from 'react-icons/fa';

function LocationList(props) {
	const inputEl = useRef(null);
	const [filteredCities, setFilteredCities] = useState([]);

	const handleSelectedCity = city => {
		props.handleSelectedCity(city);
		inputEl.current.value = '';

		setFilteredCities([]);
	};

	const filterCities = query => {
		if (query.length === 0) {
			return setFilteredCities([]);
		}
		const lowercaseQuery = query.toLowerCase();

		if (props.cities) {
			const filtered = props.cities.filter(city => {
				return city.city.toLowerCase().startsWith(lowercaseQuery);
			});

			setFilteredCities(filtered);
		}
	};

	return (
		<React.Fragment>
			<div className="input-container">
				<FaSearch size={25} color="lightgrey" />
				<input
					autoComplete="off"
					id="search"
					role="search"
					type="text"
					ref={inputEl}
					onChange={evt => filterCities(evt.target.value)}
				/>
			</div>
			{filteredCities.length > 0 && (
				<ul className="location-list">
					{filteredCities.map((city, index) => (
						<li
							key={index}
							tabIndex="0"
							onClick={() => handleSelectedCity(city)}
						>
							{city.city} - {city.location}
						</li>
					))}
				</ul>
			)}
		</React.Fragment>
	);
}

export default LocationList;
