import React, { Component } from 'react';
import { Form, Button, Container} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class VariableActivity extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        name: ""
    };
    
    onSubmit = () => {
    console.log(this.state.name);
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
                    <Form.Label>Enter Your Variable Here!</Form.Label>
                    <Form.Group className="m-0">
                        <Form.Control
                        className="variableExample"
                        placeholder="Your Name Here"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
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
                {/* </Col>
                <Col xs={6} md={8}> */}
                    
                </Col>
            </Row>
        </Container>

        );
      }
}

export default VariableActivity;