import React, { Component } from 'react';
import { Form, Button, Container, Card} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { browserHistory } from 'react-router';

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

    handleProceed = () => {
        browserHistory.push('/loops');
    }

    handleBack = () => {
        browserHistory.push('/');
    }
    
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
        <Container >
            <br/>
            <h2 style={{textAlign: "center"}}>Conditionals Activity</h2>
            <hr/>
            <Row style={{width:"100%"}}className="justify-content-md-center">
                <Col >
                    <Row className="justify-content-md-center">
                        <Form.Label><h4>Enter three numbers:</h4></Form.Label>
                    </Row>
                    <Row className="justify-content-md-center">
                    <Form.Group >
                        <Form.Control
                        className="variableExample"
                        placeholder="Number One"
                        style={{marginTop: "10px"}}
                        value={this.state.numberOne}
                        onChange={e => this.setState({ numberOne: e.target.value })}
                        type="text"
                        />
                        <Form.Control
                        className="variableExample"
                        placeholder="Number Two"
                        style={{marginTop: "10px"}}
                        value={this.state.numberTwo}
                        onChange={e => this.setState({ numberTwo: e.target.value })}
                        type="text"
                        />
                        <Form.Control
                        className="variableExample"
                        placeholder="Number Three"
                        style={{marginTop: "10px"}}
                        value={this.state.numberThree}
                        onChange={e => this.setState({ numberThree: e.target.value})}
                        type="text"
                        />
                        <Row className="justify-content-md-center">
                        <Button
                        className="btnFormSend"
                        style={{marginTop: "30px"}}
                        onClick={this.compareNumbers}
                        >
                        Compare
                        </Button>
                        </Row>
                    </Form.Group> 
                    </Row> 
                </Col>
            </Row>
            <hr/>
            <Row style={{width:"100%", color: "white"}}className="justify-content-md-center">
                <h4>Greatest = <span style={{color: "#7FFF00"}}>{this.state.greatest}</span></h4>    
            </Row>
            <Row style={{width:"100%", color: "white"}}className="justify-content-md-center"> 
                <h4>Least = <span style={{color: "#7FFF00"}}>{this.state.least}</span></h4>
            </Row>

            <Button onClick={this.handleBack} className={'my-navigation-button'} >
                Go To Previous Activity!
            </Button>
            <Button onClick={this.handleProceed} className={'my-navigation-button'} >
                Proceed To Next Activity!
            </Button>
        </Container>

        );
      }
}

export default ConditionalActivity;