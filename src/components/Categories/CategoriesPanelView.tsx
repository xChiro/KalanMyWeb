import CategoryCardView from "./CategoryCardView";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";

interface CategoriesPanelView  extends React.HTMLAttributes<HTMLElement>  {
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
        <Container>
            <Row>
                <Col>
                    {categoriesComponents}
                </Col>
            </Row>
        </Container>
    );
}

export default CategoriesPanelView; 