import engRecipes from '../assets/data/eng_recipes.js'
import srRecipes from '../assets/data/sr_recipes.js'

import { defaultThumbnails } from '../assets/data/defaults'
import { getUsers } from './users.js'

export const getRecipes = () => {
	if (!window.localStorage.getItem('engRecipes')) {
		window.localStorage.setItem('engRecipes', JSON.stringify(engRecipes))
	}

	if (!window.localStorage.getItem('srRecipes')) {
		window.localStorage.setItem('srRecipes', JSON.stringify(srRecipes))
	}

	const englishRecipes = JSON.parse(window.localStorage.getItem('engRecipes'))
	const serbianRecipes = JSON.parse(window.localStorage.getItem('srRecipes'))

	return [serbianRecipes, englishRecipes]
}

export const getRecipesForLanguage = (language) => {
	const [serbianRecipes, englishRecipes] = getRecipes()

	return language === 'english' ? englishRecipes : serbianRecipes
}

export const getRecipesForLanguageAndType = (language, type) => {
	return getRecipesForLanguage(language).filter(
		(recipe) => recipe.type === type
	)
}

// Accepts data object { name, instructions, time, level, video, photo, type }
export const saveRecipeForType = (data) => {
	const userId = JSON.parse(window.localStorage.getItem('user')).id

	const [serbianRecipes, englishRecipes] = getRecipes()

	const id = (serbianRecipes.slice(-1)[0].id ?? 0) + 1

	const thumbnail = data.photo?.[0] ?? defaultThumbnails[data.type]

	const recipe = {
		...data,
		userId,
		rating: 0,
		ratings: [],
		comments: [],
		id,
		thumbnail,
	}

	const updatedSerbianRecipes = [...serbianRecipes, recipe]
	const updatedEnglishRecipes = [...englishRecipes, recipe]

	window.localStorage.setItem(
		'srRecipes',
		JSON.stringify(updatedSerbianRecipes)
	)
	
	window.localStorage.setItem(
		'engRecipes',
		JSON.stringify(updatedEnglishRecipes)
	)

	return recipe
}

export const getMyRecipesForLanguage = (language) => {
	const userId = JSON.parse(window.localStorage.getItem('user'))?.id ?? -1
	return getRecipesForLanguage(language).filter(
		(recipe) => recipe.userId === userId
	)
}

export const deleteRecipe = id => {
	const [srRecipes, engRecipes] = getRecipes()

	const updatedSerbianRecipes = srRecipes.filter(recipe => recipe.id !== id)
	const updatedEnglishRecipes = engRecipes.filter(recipe => recipe.id !== id)

	window.localStorage.setItem(
		'srRecipes',
		JSON.stringify(updatedSerbianRecipes)
	)
	window.localStorage.setItem(
		'engRecipes',
		JSON.stringify(updatedEnglishRecipes)
	)
}

export const getMyCommentsForLanguage = (language) => {
	const userId = JSON.parse(window.localStorage.getItem('user'))?.id ?? -1
	return getRecipesForLanguage(language).reduce((acc, recipe) => {
		return [
			...acc,
			...(recipe?.comments?.filter(
				(comment) => comment.userId === userId
			) ?? []),
		]
	}, [])
}

export const getMyRatingsForLanguage = (language) => {
	const userId = JSON.parse(window.localStorage.getItem('user'))?.id ?? -1
	return getRecipesForLanguage(language).reduce((acc, recipe) => {
		return [
			...acc,
			...(recipe?.ratings?.filter((rating) => rating.userId === userId) ??
				[]),
		]
	}, [])
}

const arrSum = arr => (arr ?? []).reduce((acc, curr) => acc + curr, 0)

const leaveRatingForRecipeCB = (recipe, rating) => {
	const userId = JSON.parse(window.localStorage.getItem('user'))?.id ?? -1
	const user = getUsers().find(u => u.id === userId)

	const recipeRatings = (recipe.ratings ?? []).filter(r => r.userId !== userId)
	const ratings = [...recipeRatings, { rating, userId, recipeName: recipe.name, user: `${user.firstName} ${user.lastName}` }]
	const avgRating = arrSum(ratings.map(r => r.rating)) / ratings.length

	return { ...recipe, ratings, rating: avgRating }
}

export const leaveRatingForRecipe = (recipeId, rating) => {
	updateRecipe(recipeId, 'srRecipes', leaveRatingForRecipeCB, rating)
	updateRecipe(recipeId, 'engRecipes', leaveRatingForRecipeCB, rating)
}

const leaveCommentForRecipeCB = (recipe, comment) => {
	const userId = JSON.parse(window.localStorage.getItem('user'))?.id ?? -1
	const user = getUsers().find(u => u.id === userId)

	const userComment = { comment, userId, user: `${user.firstName} ${user.lastName}` } 

	return { ...recipe, comments: [...(recipe.comments ?? []), userComment] }
}

export const leaveACommentForRecipe = (recipeId, comment) => {
	updateRecipe(recipeId, 'srRecipes', leaveCommentForRecipeCB, comment)
	updateRecipe(recipeId, 'engRecipes', leaveCommentForRecipeCB, comment)
}

const updateRecipe = (recipeId, language, callback, ...args) => {
	const recipes = JSON.parse(window.localStorage.getItem(language));
	const recipe = recipes.find(r => r.id === recipeId) ?? {}

	const updatedRecipe = callback(recipe, ...args);

	window.localStorage.setItem(
		language,
		JSON.stringify(recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r))
	)
}

export const getBest3RecipesForLanguage = (language) => {
	return getRecipesForLanguage(language).sort((a, b) => b.rating - a.rating).slice(0, 3)
}