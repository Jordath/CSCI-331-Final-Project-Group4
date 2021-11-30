import classes from './RecipeItem.module.css';

function RecipeItem(props) {
    return <li>
        <div>
            <h3>{props.title}</h3>

        </div>
    </li>
}

export default RecipeItem;