import engRecipes from '../assets/data/eng_recipes.js'
import srRecipes from '../assets/data/sr_recipes.js'

export const getRecipes = () => {
	if (!window.localStorage.getItem('engRecipes')) {
		window.localStorage.setItem(
			'engRecipes',
			JSON.stringify(engRecipes)
		)
	}

	if (!window.localStorage.getItem('srRecipes')) {
		window.localStorage.setItem(
			'srRecipes',
			JSON.stringify(srRecipes)
		)
	}

	const englishRecipes = JSON.parse(window.localStorage.getItem('engRecipes'))
	const serbianRecipes = JSON.parse(window.localStorage.getItem('srRecipes'))

	return [serbianRecipes, englishRecipes]
}

export const getRecipesForLanguage = language => {
    const [serbianRecipes, englishRecipes] = getRecipes()

    return language === 'english' ? englishRecipes : serbianRecipes
}

export const getRecipesForLanguageAndType = (language, type) => {
    return getRecipesForLanguage(language).filter(recipe => recipe.type === type);
}

// Accepts data object { name, instructions, time, level, video, photo, type }
export const saveRecipeForType = (data) => {
    const userId = JSON.parse(window.localStorage.getItem('user')).id

    const [serbianRecipes, englishRecipes] = getRecipes()
    
    const recipe = { ...data, userId, rating: 0, ratings: [], comments: [] }

    const updatedSerbianRecipes = [...serbianRecipes, recipe]
    const updatedEnglishRecipes = [...englishRecipes, recipe]

    window.localStorage.setItem('srRecipes', JSON.stringify(updatedSerbianRecipes))
    window.localStorage.setItem('engRecipes', JSON.stringify(updatedEnglishRecipes))
}
