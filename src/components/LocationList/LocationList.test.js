import "../../setupTests";

import LocationList from "./LocationList";
import React from "react";
import { mount } from "enzyme";

describe("LocationList", () => {
	const mockListData = [
		{
			city: "The Lost World",
			location: "Jurassic World"
		},
		{
			city: "Future City",
			location: "Somewhere"
		}
	];

	it("should render", () => {
		mount(<LocationList />);
	});

	it("should display one item when typing 'the' into search box", () => {
		const wrapper = mount(<LocationList cities={mockListData} />);
		wrapper.find("input").simulate("change", {
			target: { value: "the" }
		});
		expect(wrapper.find("li")).toHaveLength(1);
	});

	it("should display Future City item when typing 'fut' into search box", () => {
		const wrapper = mount(<LocationList cities={mockListData} />);
		wrapper.find("input").simulate("change", {
			target: { value: "fut" }
		});
		expect(wrapper.find("li")).toHaveLength(1);
		expect(wrapper.find("li").text()).toBe("Future City - Somewhere");
	});

	it("should not display an 'li' when typing a city that doesnt exist", () => {
		const wrapper = mount(<LocationList cities={mockListData} />);
		wrapper.find("input").simulate("change", {
			target: { value: "blah" }
		});
		expect(wrapper.find("li")).toHaveLength(0);
	});
});
