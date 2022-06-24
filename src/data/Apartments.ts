import { IApartmentItem } from '../types/apartments';

const Apartments: IApartmentItem[] = [
	{
		"id": 1,
		"image": require("../assets/images/apartment-1.png"),
		"description": "Rent a 1-room apartment",
		"address": "Sumska Street",
		"lat": 49.988358,
		"lng": 36.232845,
		"rent": 1500
	},
	{
		"id": 2,
		"image": require("../assets/images/apartment-2.png"),
		"description": "Rent a 2-room apartment",
		"address": "Pohulianka Street",
		"lat": 49.842957,
		"lng": 24.031111,
		"rent": 2500
	},
	{
		"id": 3,
		"image":  require("../assets/images/apartment-3.png"),
		"description": "Rent a 3-room apartment",
		"address": "Khreschatyk Street",
		"lat": 50.450001,
		"lng": 30.523333,
		"rent": 3000
	}
];

export { Apartments }