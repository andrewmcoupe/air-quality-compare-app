import "./LocationList.scss";

import React, { useRef, useState } from "react";

import { FaSearch } from "react-icons/fa";

function LocationList(props) {
	const inputEl = useRef(null);
	const [filteredCities, setFilteredCities] = useState([]);

	const handleSelectedCity = city => {
		props.handleSelectedCity(city);

		// Clear input and give focus for next search query
		inputEl.current.value = "";
		inputEl.current.focus();

		// Set list of cities to empty array
		setFilteredCities([]);
	};

	const filterCities = query => {
		if (query.length === 0) {
			// Set list of cities to empty array if search term is empty
			return setFilteredCities([]);
		}

		const lowercaseQuery = query.toLowerCase();

		if (props.cities) {
			const filtered = props.cities.filter(city => {
				return city.city.toLowerCase().startsWith(lowercaseQuery);
			});

			// Display all cities beginning with search term entered
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
							onKeyDown={evt => evt.keyCode !== 13 || handleSelectedCity(city)}
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
