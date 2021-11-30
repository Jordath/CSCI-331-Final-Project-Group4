let recipes

export default class recipesDAO {
    static async injectDB(conn) {
        if (recipes) {
            return
        }
        try {
            recipes = await conn.db(process.env.RESTREVIEWS_NS).collection("Recipes")
        } catch (e) {
            console.error(
                'Unable to establish a collection handle in recipesDAO: ${e}',
            )
        }
    }

    static async getRecipes({
        filters = null,
        page = 0,
        recipesPerPage = 20,
    } = {}) {
        let query
        if (filters) {
            if ("recipeName" in filters) {
                query = { $text: { $search: filters["recipeName"] } }
            }
        }
        
        let cursor

        try {
            cursor = await recipes
                .find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`,)
            return { recipesList: [], totalNumRecipes: 0 }
        }

        const displayCursor = cursor.limit(recipesPerPage).skip(recipesPerPage * page)

        try {
            const recipesList = await displayCursor.toArray()
            const totalNumRecipes = await recipes.countDocuments(query)

            return { recipesList, totalNumRecipes }
        } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`,
            )
            return { recipesList: [], totalNumRecipes: 0 }
        }
    }
}