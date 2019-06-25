import './LocationCard.scss';

import { FaTimes } from 'react-icons/fa';
import React from 'react';
import { distanceInWordsStrict } from 'date-fns';

function LocationCard(props) {
	return (
		<div className="location-card">
			<span
				role="button"
				tabIndex="0"
				aria-label="Remove location card"
				className="location-card__close-icon"
				onClick={() => props.removeCity(props.location)}
				onKeyDown={evt =>
					evt.keyCode !== 13 || props.removeCity(props.location)
				}
			>
				<FaTimes size="28px" color="#6b6b6b" />
			</span>
			<span className="location-card__updated-at">
				Updated {distanceInWordsStrict(props.location.updatedAt, new Date())}{' '}
				ago
			</span>
			<h2>{props.location.location}</h2>
			<p>in {props.location.city}, United Kingdom</p>
			<p>
				Values:{' '}
				{props.location.measurements.map((m, index) => (
					<span key={index} className="location-card__measurement">
						{' '}
						{m.parameter.toUpperCase()}: {m.value}
					</span>
				))}
			</p>
		</div>
	);
}

export default LocationCard;
