import React, { Component } from 'react';
import { Form, Button, Container, Card} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { browserHistory } from 'react-router';

class VariableActivity extends Component {
    constructor(props) {
        super(props);
        this.currentPhraseIndex = 0
        this.phrases = [
            "loves coding!",
            "is awesome!",
            "can do anything they set their mind to!",
            "is powerful!",
            "is inspirational!",
            "is a genius!",
            "is hardworking!"
        ]
    }

    state = {
        textBoxValue: "",
        name: "",
        phrase: ""
    };
    
    onSubmit = () => {
        this.setState({
            name: this.state.textBoxValue
        })

    };

    // we should explain state really high level to them before we begin
    // maybe explain state as a collection of variables that define the current values for all of the application or something idk
    // three ways to do this -> use easiest
    // make it an instance variable this.myName
    // use state this.state.displayName
    // or pass in parameter
    // we need to add methods and params into the variable talk then
    // also add a slide for string concat and placement
    // and arrays and indexing if we're feelxing fancy
    // if we don't want to add this to the slides can alwasy explain it in comments and tell them what to do
    getRandomPhrase = () => {
        // this line will be partially commented out and spelled out how to do
        console.log('here')
        let ourPhrase = this.state.name + " " + this.phrases[this.currentPhraseIndex]

        this.currentPhraseIndex += 1
        this.currentPhraseIndex %= 7
        console.log(this.currentPhraseIndex)
        this.setState({
            phrase: ourPhrase
        })
    }

    handleProceed = () => {
        browserHistory.push('/conditional');
    }

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
                    <Form.Label>Enter Your Variable Here!</Form.Label>
                    <Form.Group className="m-0">
                        <Form.Control
                        className="variableExample"
                        placeholder="Your Name Here"
                        value={this.state.textBoxValue}
                        onChange={e => this.setState({ textBoxValue: e.target.value})}
                        type="text"
                        />
                        <Button
                        className="btnFormSend"
                        variant="outline-success"
                        onClick={this.onSubmit}
                        >
                        Go!
                        </Button>
                    </Form.Group>  
                </Col>
            </Row>
            <Row style={{width:"100%"}}className="justify-content-md-center">
                <Col xs={6} md={8}>
                    <Card>
                        <Card.Body>Name = {this.state.name}</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{width:"100%"}}className="justify-content-md-center">
                <Col xs={6} md={8}>
                    <Card>
                        <Card.Body>Make a random phrase with your variable name!</Card.Body>
                        <Button
                        className="btnFormSend"
                        variant="outline-success"
                        onClick={this.getRandomPhrase}
                        >
                        Make my random phrase!
                        </Button>
                    </Card>
                </Col>
                <Col xs={6} md={8}>
                    <Card>
                        <Card.Body>{this.state.phrase}</Card.Body>
                    </Card>
                </Col>
            </Row>

            <Button onClick={this.handleProceed} className={'my-navigation-button'} >
                Proceed To Next Activity!
            </Button>
        </Container>

        );
      }
}

export default VariableActivity;