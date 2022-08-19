import {Col, Row, Container} from "react-bootstrap";

function AccountBalanceView() {
    return (
        <Container>
            <Row>
                <Col>
                    <h5>$-12.45</h5>
                    <span style={{fontSize: "15px"}}>Outcome</span>
                </Col>
                <Col>
                    <h2>$38.45</h2>
                    <span style={{fontSize: "20px"}}>Balance</span>
                </Col>
                <Col>
                    <h5>$50.00</h5>
                    <span style={{fontSize: "15px"}}>Incomes</span>
                </Col>
            </Row>
        </Container>
    );
}

export default AccountBalanceView;