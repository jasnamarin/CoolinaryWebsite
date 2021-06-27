import engRecipes from '../assets/data/eng_recipes.js'
import srRecipes from '../assets/data/sr_recipes.js'

import { defaultThumbnails } from '../assets/data/defaults'

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
}

export const getMyRecipesForLanguage = (language) => {
	const userId = JSON.parse(window.localStorage.getItem('user'))?.id ?? -1
	console.log(userId)
	return getRecipesForLanguage(language).filter(
		(recipe) => recipe.userId === userId
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
