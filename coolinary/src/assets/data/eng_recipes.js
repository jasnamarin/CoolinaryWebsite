export default [
	{
		id: 0,
		userId: 0,
		name: 'Apetizer1',
		type: 'appetizers',
		instructions: '',
		thumbnail: 'appetizers',
		time: '',
		level: '',
		video: [],
		photo: ['exampleImage1', 'exampleImage2', 'exampleImage3'],
		ratings: [
			{
				userId: 0,
				rating: 2,
                recipeId: 0,
                recipeName: 'Apetizer1'
			},
		],
		comments: [
			{
				userId: 0,
				comment: "Awesome meal!",
                recipeId: 0,
                recipeName: 'Apetizer1'
			},
		],
	},
	{
		id: 1,
		name: 'Apetizer2',
		instructions: 'Apetizer2',
		thumbnail: 'appetizers',
		type: 'appetizers',
		time: '',
		level: '',
		video: [],
		photo: [],
		rating: 0,
		userId: 1,
		ratings: [
			{
				userId: 0,
				rating: 5,
                recipeId: 1,
                recipeName: 'Apetizer2'
			},
		],
		comments: [
			{
				userId: 0,
				comment: "A bit too much salt but alright.",
                recipeId: 1,
                recipeName: 'Apetizer2'
			},
		],
	},
	{
		id: 3,
		name: 'Main Dish 1',
		type: 'main-dishes',
		thumbnail: 'main-dishes',
		instructions: 'Some long instruction to make this dish',
		time: '30min',
		level: '4',
		video: [],
		photo: [],
        userId: 0,
		rating: 2,
		ratings: [],
		comments: [],
	},
	{
		id: 4,
		type: 'main-dishes',
		name: 'Main Dish 2',
		thumbnail: 'main-dishes',
		instructions: 'Some long instruction to make this dish',
		time: '20min',
		level: '3',
		video: [],
        userId: 1,
		photo: [],
		rating: 4,
		ratings: [
			{
				userId: 0,
				rating: 4,
                recipeId: 4,
                recipeName: 'Main Dish 2'
			},
		],
		comments: [
			{
				userId: 1,
				comment: "Perfect.",
                recipeId: 4,
                recipeName: 'Main Dish 2'
			},
		],
	},
	{
		id: 5,
		type: 'main-dishes',
        userId: 0,
		name: 'Main Dish 3',
		thumbnail: 'main-dishes',
		instructions: 'Some long instruction to make this dish',
		time: '20min',
		level: '3',
		video: [],
		photo: [],
		rating: 4,
		ratings: [
			{
				userId: 0,
				rating: 1,
                recipeId: 5,
                recipeName: 'Main Dish 3'
			},
		],
		comments: [
			{
				userId: 0,
				comment: "Instructions are a bit unclear.",
                recipeId: 5,
                recipeName: 'Main Dish 3'
			},
		],
	},
	{
		id: 6,
		type: 'main-dishes',
		name: 'Main Dish 4',
        userId: 0,
		thumbnail: 'main-dishes',
		instructions: 'Some long instruction to make this dish',
		time: '20min',
		level: '3',
		video: [],
		photo: [],
		rating: 4,
		ratings: [
		],
		comments: [
		],
	},
	{
		id: 7,
		type: 'desserts',
		name: 'Dessert1',
        userId: 0,
		thumbnail: 'desserts',
		instructions: '',
		time: '',
		level: '',
		video: [],
		photo: [],
		rating: 3,
		ratings: [
		],
		comments: [
		],
	},
	{
		id: 8,
		type: 'desserts',
		name: 'Dessert2',
        userId: 1,
		thumbnail: 'desserts',
		instructions: '',
		time: '',
		level: '',
		video: [],
		photo: [],
		rating: 3,
		ratings: [
		],
		comments: [
		],
	},
	{
		id: 9,
		type: 'snacks',
		name: 'Snack1',
        userId: 0,
		thumbnail: 'snacks',
		instructions: '',
		time: '',
		level: '',
		video: [],
		photo: [],
		rating: 3,
		ratings: [
		],
		comments: [
		],
	},
	{
		id: 10,
		type: 'snacks',
		name: 'Snack2',
        userId: 0,
		thumbnail: 'snacks',
		instructions: '',
		time: '',
		level: '',
		video: [],
		photo: [],
		rating: 3,
		ratings: [
		],
		comments: [
		],
	},
]
