// Author: themanpreetsingh.github.io
import './CategoriesComponent.css'

function CategoriesComponent({onCategorySelect}) {
    return (
        <div className="categoriesContainer">
            <button onClick={() => onCategorySelect('All Items')}>All Items</button>
            <button onClick={() => onCategorySelect('drinks')}>Drinks</button>
            <button onClick={() => onCategorySelect('fruit')}>Fruit</button>
            <button onClick={() => onCategorySelect('bakery')}>Bakery</button>
            <button onClick={() => onCategorySelect('offers')}>Offers</button>
        </div>
    )
}

export default CategoriesComponent
