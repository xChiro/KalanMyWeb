import CategoryCardView from "./CategoryCardView";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

interface CategoriesPanelViewProps extends React.HTMLAttributes<HTMLElement> {
    categories: any;
}

function CategoriesPanelView(props: CategoriesPanelViewProps) {

    const categoriesComponents = [];

    if (props.categories !== null) {
        for (const current in props.categories) {
            categoriesComponents.push(
                <CategoryCardView    key={current} name={current} balance={props.categories[current]} />
            );
        }
    }

    return (
        <Container>
            <Row>
                <Col style={{maxHeight: "35vh", overflow: "auto"}}>
                    {categoriesComponents}
                </Col>
            </Row>
        </Container>
    );
}

export default CategoriesPanelView; 