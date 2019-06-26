import "../../setupTests";

import LocationCard from "./LocationCard";
import React from "react";
import { mount } from "enzyme";

describe("LocationCard", () => {
	const mockCityData = {
		location: "Manchester Piccadilly",
		city: "Manchester",
		updatedAt: new Date(),
		measurements: [
			{
				parameter: "co2",
				value: 100
			}
		]
	};

	it("should render", () => {
		mount(<LocationCard location={mockCityData} />);
	});

	it("should display correct information on the location card", () => {
		const wrapper = mount(<LocationCard location={mockCityData} />);
		const updatedAtText = wrapper.find(".location-card__updated-at");
		const closeIcon = wrapper.find(".location-card__close-icon");
		const city = wrapper.find("p").at(0);
		const values = wrapper.find("p").at(1);
		const locationTitle = wrapper.find("h2");

		expect(locationTitle.text()).toEqual("Manchester Piccadilly");
		expect(updatedAtText.text()).toEqual("Updated 0 seconds ago");
		expect(city.text()).toEqual("in Manchester, United Kingdom");
		expect(values.text()).toEqual("Values:  CO2: 100");
		expect(closeIcon).toHaveLength(1);
	});
});
