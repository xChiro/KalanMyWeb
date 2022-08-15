import CategoryCardView from "./CategoryCardView";

interface CategoriesPanelView {
    categories: Category[];
}

interface Category {
    name: string;
    balance: number;
}

function CategoriesPanelView(props: CategoriesPanelView) {

    const categoriesComponents = [];

    for (const current of props.categories) {
        categoriesComponents.push(
            <CategoryCardView key={current.name} name={current.name} balance={current.balance}/>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {categoriesComponents}
                </div>
            </div>
        </div>
    );
}

export default CategoriesPanelView; 