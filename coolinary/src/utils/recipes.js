import engRecipes from '../assets/language/recipes/eng.json'
import srRecipes from '../assets/language/recipes/sr.json'

export const getRecipes = () => {
	if (!window.localStorage.getItem('engRecipes')) {
		const { mainDishes, appetizers, desserts, snacks } = engRecipes
		window.localStorage.setItem(
			'engRecipes',
			JSON.stringify({ mainDishes, appetizers, desserts, snacks })
		)
	}

	if (!window.localStorage.getItem('srRecipes')) {
		const { mainDishes, appetizers, desserts, snacks } = srRecipes
		window.localStorage.setItem(
			'srRecipes',
			JSON.stringify({ mainDishes, appetizers, desserts, snacks })
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

export const getRecipesForLanguageAndType = (language, payloadType) => {
    const type = payloadType === 'main-dishes' ? 'mainDishes' : payloadType
    return getRecipesForLanguage(language)[type];
}

const getUpdatedRecipes = (recipes, recipe, payloadType) => {
    const type = payloadType === 'main-dishes' ? 'mainDishes' : payloadType
    return { ...recipes, [type]: [...recipes.type, recipe ] }
}

// Accepts data object { name, instructions, time, level, video, photo } and type
export const saveRecipeForType = (data, payloadType) => {
    const userId = JSON.parse(window.localStorage.getItem('user')).id
    const type = payloadType === 'main-dishes' ? 'mainDishes' : payloadType

    const [serbianRecipes, englishRecipes] = getRecipes()
    
    const recipe = { ...data, userId }

    const updatedSerbianRecipes = getUpdatedRecipes(serbianRecipes, recipe, type)
    const updatedEnglishRecipes = getUpdatedRecipes(englishRecipes, recipe, type)

    window.localStorage.setItem('srRecipes', JSON.stringify(updatedSerbianRecipes))
    window.localStorage.setItem('engRecipes', JSON.stringify(updatedEnglishRecipes))
}
