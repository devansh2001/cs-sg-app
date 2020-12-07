import React, { Component } from 'react';
import { Form, Button, Container, Card} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

    /*
    * Step 1:
    * Add a variable in the state that is called "name"
    * Set the variable to have a default of ""
    * Look at the slides if you forget how to declare a state variable!
    */
    state = {
        textBoxValue: "",
        phrase: "",
        // add the new variable here
    };
    
    /*
    * Step 2:
    * Change the value of the state variable "name" to this.state.textBoxValue
    * this.state.textBoxValue is the variable that holds the value you typed into thet textbox on the page
    * This exercise also has you practicing how to call a state variable with this.state.textBoxValue!
    * Look at the slides if you forget how to change state!
    * 
    * Learning note for onSubmit:
    * This particular method is called whenever the "Go!" button is pressed
    * What it is doing is assigning the value in the text box to your name variable
    * This variable is accessed to be displayed for you to see in the JSX code below
    */
    onSubmit = () => {
        // change the value of name here
    };
    
    /*
    * Step 3:
    * Add your name variable to the phrase passed in and then change the value of phrase to this new string
    * Look at the slides if you forget how to change state or make a regular variable!
    * Remember: you are able to access parameters like they are regular variables
    */
    getRandomPhrase = (phrase) => {

        // create a new regular variable that takes the name variable and adds the parameter phrase to the end of it
        // You will need to access the state variable name and the phrase parameter
        // Remember: we can add strings together using concatenation (+)
        // Play around with this by adding extra spaces, changing the order, etc.

        /* Step 4:
        * Create and assign new variable here
        */
        
        // Now, you will need to change the value of the state variable phrase to the new phrase you made above
        // You will need to use the setState({}) method to change phrase
        // Remember how to access regular variables you made!

        /* Step 5:
        * Change the value of phrase to the new phrase here
        */
    }

    render() {
        return (
        <Container >
            <br/>
            <h2 style={{textAlign: "center"}}>Variables Activity</h2>
            <hr/>
            <Row style={{textAlign: "center"}} className="justify-content-md-center">
                <Col >
                    <Row className="justify-content-md-center">
                    <Form.Label><h4>Enter Your Variable Below!</h4></Form.Label>
                    </Row>  
                    <Row className="justify-content-md-center">
                    <Form.Group >
                        <Form.Control
                        placeholder="Your Name Here"
                        value={this.state.textBoxValue}
                        onChange={e => this.setState({ textBoxValue: e.target.value})}
                        type="text"
                        />
                        <Button
                        className="btnFormSend"
                        onClick={this.onSubmit}
                        >
                        Go!
                        </Button>
                        <br/>
                    </Form.Group> 
                    </Row> 
                </Col>
            </Row>
            <Row style={{color: "white"}} className="justify-content-md-center">
                    <h4> Name = <span style={{color: "#7FFF00"}}>{this.state.name}</span></h4>     
            </Row>
            <hr/>
            <Row style={{color: "white"}} className="justify-content-md-center">
                <h4>Make a random phrase with your variable name!</h4>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Button
                className="btnFormSend"
                onClick={() => {
                    let newPhrase = this.phrases[this.currentPhraseIndex]
                    this.currentPhraseIndex += 1
                    this.currentPhraseIndex %= 7
                    this.getRandomPhrase(newPhrase)
                }}
                >
                Make my random phrase!
                </Button>
            </Row>
            <br/>
            <Row style={{color: "#7FFF00"}} className="justify-content-md-center">
                <div>
                    <h4>{this.state.phrase}</h4>
                </div>
               
            </Row>
        </Container>

        );
      }
}

export default VariableActivity;