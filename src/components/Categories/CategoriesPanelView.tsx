import CategoryCardView from "./CategoryCardView";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

interface CategoriesPanelView extends React.HTMLAttributes<HTMLElement> {
    categories: any;
}

function CategoriesPanelView(props: CategoriesPanelView) {

    const categoriesComponents = [];

    if (props.categories !== null) {
        for (const current in props.categories) {
            categoriesComponents.push(
                <CategoryCardView key={current} name={current} balance={props.categories[current]} />
            );
        }
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