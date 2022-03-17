import CardList from "../../components/CardList"
import { Container, Row } from "react-bootstrap"
import './portofolio.css'

function Portofolio() {
    return (

        <div id="portofolio-container">
            <Container>
                <Row>
                    <CardList />
                </Row>
            </Container>
        </div>
    )
}

export default Portofolio