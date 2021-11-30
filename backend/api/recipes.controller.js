import RecipesDAO from "../dao/recipesDAO.js"

export default class RecipesController {
    static async apiGetRecipes(req, res, next) {
        const recipesPerPage = req.query.recipesPerPage ? parseInt(req.query.recipesPerPage, 10) : 50
        const page = req.query.page ? parseInt(req.query.page, 10) : 0
    
    let filters = {}
    if (req.query.recipeName) {
        filters.recipeName = req.query.recipeName
    }

    const { recipesList, totalNumRecipes } = await RecipesDAO.getRecipes({
        filters,
        page, 
        recipesPerPage,
    })

    let response = {
        recipes: recipesList,
        page: page,
        filters: filters,
        entries_per_page: recipesPerPage,
        total_results: totalNumRecipes
    }
    res.json(response)
    }


static async apiGetRecipesByIngredient(req, res, next) {
    try {
        let ingredient = req.params.ingredient || {}
        let recipe = await RecipesDAO.apiGetRecipesByIngredient(ingredient)
        if (!recipe) {
            res.status(404).json({ error: "Not Found" })
            return
        }
        res.json(recipe)
    } catch (e) {
        console.log(`api, ${e}`)
        res.status(500).json({ error: e})
    }
}


static async apiGetRecipesByQuantity(req, res, next) {
    try {
        let quantity = req.params.ingredient || {}
        let recipe = await RecipesDAO.apiGetRecipesByQuantity(quantity)
        if (!recipe) {
            res.status(404).json({ error: "Not Found" })
            return
        }
        res.json(recipe)
    } catch (e) {
        console.log(`api, ${e}`)
        res.status(500).json({ error: e})
    }
}

}