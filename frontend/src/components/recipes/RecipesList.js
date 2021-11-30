import classes from './RecipesList.module.css';
import RecipeItem from './RecipeItem';

const RecipesList = ( {data} ) => {
    return (
        <div>
            {data.map((recipes, key) => (
                <div>
                    <h2>{recipes.recipeName}</h2>
                </div>
            ))}
        </div>
    );
};

export default RecipesList