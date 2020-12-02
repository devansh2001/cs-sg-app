import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const OriginalPattern  = () => {
    let boxes = [];
    for (let i = 0; i < 5; i++) {    
        for (let j = 0; j <= i; j++) {
            boxes.push("* ");
        }
        boxes.push(<br/>);
    }
    console.log("entered");
    return (
        <div >  
            {boxes} 
        </div>
    )
}
class LoopsActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPattern: '',
        }
    }
    render() {
        // let boxes = [];
        // for (let i = 0; i < 5; i++) {    
        //     for (let j = 0; j <= i; j++) {
        //         boxes.push("* ");
        //     }
        //     boxes.push(<br/>);
        // }
        return (
            <Container style={{textAlign: 'center'}}>
                <h2>Loops Activity</h2>
                <Col>
                    <Row>
                        <Col>
                            <div>
                                <h4>We can use this activity to understand how for loops work. </h4>
                            </div>
                            <hr/>
                            <div>
                                <h5>Given below on the left hand side is a pattern of stars obtained from
                                    using nested for loops. The first for loop specifies the row number 
                                    for the pattern which in this case runs from 1 to 5. The second for loop 
                                    specifies the number of stars needed on each row of the pattern, which again
                                    ranges from 1 to 5. 
                                </h5>
                                <br></br>
                                <h5>Wite a nested for loop to display the same pattern on the right hand side.
                                    Hit submit to test your code periodically and compare your pattern with the correct 
                                    one of the left hand side.
                                </h5>
                            </div>
                            <hr/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Container>
                                <h5>Correct Pattern</h5>
                                <Container >
                                    <Col>
                                    <Row className="star-pattern">
                                        <OriginalPattern/>      
                                    </Row>
                                    </Col>
                                </Container>
                            </Container>
                        </Col>
                        <Col>
                            <Container>
                                <h5>Your Pattern</h5>
                            </Container>
                        </Col>
                    </Row>
                </Col>

            </Container>
            
        );
    }
}

export default LoopsActivity;