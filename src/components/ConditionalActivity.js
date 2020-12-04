import React, { Component } from 'react';
import { Form, Button, Container, Card} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ConditionalActivity extends Component {
    constructor(props) {
        super(props);
        
    }

    state = {
        numberOne: null,
        numberTwo: null,
        numberThree: null,
        greatest: "",
        least: ""
    };
    
    compareNumbers = () => {
        if (!this.state.numberOne || !this.state.numberTwo || !this.state.numberThree) {
            // invalid input
            return
        }

        let number1 = parseInt(this.state.numberOne)
        let number2 = parseInt(this.state.numberTwo)
        let number3 = parseInt(this.state.numberThree)

        if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
            // invalid input
            return
        }

        let greatest = ""
        let least = ""

        // logic for comparing
        if (number1 >= number2 && number1 >= number3) {
            greatest = number1
        } else if (number2 >= number1 && number2 >= number3) {
            greatest = number2
        } else if (number3 >= number1 && number3 >= number1) {
            greatest = number3
        }

        if (number1 <= number2 && number1 <= number3) {
            least = number1
        } else if (number2 <= number1 && number2 <= number3) {
            least = number2
        } else if (number3 <= number1 && number3 <= number2) {
            least = number3
        }

        this.setState({
            greatest: greatest,
            least: least
        })
    };


    render() {
        return (
        <Container 
        style={{width: "80%",
        paddingLeft: 100,
        paddingRight: 200,
        paddingTop: 30,
        paddingBottom: 30,
        border: "3px solid lightGray"}}>
            <Row style={{width:"100%"}}className="justify-content-md-center">
                <Col xs={6} md={8}>
                    <Form.Label>Enter three numbers:</Form.Label>
                    <Form.Group className="m-0">
                        <Form.Control
                        className="variableExample"
                        placeholder="Number One"
                        value={this.state.numberOne}
                        onChange={e => this.setState({ numberOne: e.target.value })}
                        type="text"
                        />
                        <Form.Control
                        className="variableExample"
                        placeholder="Number Two"
                        value={this.state.numberTwo}
                        onChange={e => this.setState({ numberTwo: e.target.value })}
                        type="text"
                        />
                        <Form.Control
                        className="variableExample"
                        placeholder="Number Three"
                        value={this.state.numberThree}
                        onChange={e => this.setState({ numberThree: e.target.value})}
                        type="text"
                        />
                        <Button
                        className="btnFormSend"
                        variant="outline-success"
                        onClick={this.compareNumbers}
                        >
                        Compare
                        </Button>
                    </Form.Group>  
                </Col>
            </Row>
            <Row style={{width:"100%"}}className="justify-content-md-center">
                <Col xs={6} md={8}>
                    <Card>
                        <Card.Body>Greatest = {this.state.greatest}</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{width:"100%"}}className="justify-content-md-center">
                <Col xs={6} md={8}>
                    <Card>
                        <Card.Body>Least = {this.state.least}</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        );
      }
}

export default ConditionalActivity;