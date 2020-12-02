import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

const OriginalPattern  = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {    
        for (let j = 0; j <= i; j++) {
            stars.push("* ");
        }
        stars.push(<br/>);
    }
    console.log("entered");
    return (  
        <div className="star-pattern">  
            {stars} 
        </div>
    )
}
class LoopsActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPattern: [],
            isPatternPresent: true
        }
    }

    // TODO: Complete the completePattern method below using a nested for loop

    completePattern = () => {
        let pattern = [];
        for (let i = 0; i < 5; i++) {    
        for (let j = 0; j <= i; j++) {
            pattern.push("* ");
        }
        pattern.push(<br/>);
    }
        
        this.setState ({ userPattern: pattern });
    }

    displayPattern = () => {
        this.completePattern();
        let studentPattern = this.state.userPattern;
        return (  
            <div className="star-pattern">  
                {studentPattern} 
            </div>
        )
    }

    
    render() {
        // let stars = [];
        // for (let i = 0; i < 5; i++) {    
        //     for (let j = 0; j <= i; j++) {
        //         stars.push("* ");
        //     }
        //     stars.push(<br/>);
        // }
        return (
            <Container style={{textAlign: 'center'}}>
                <br/>
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
                                <h5>Write a nested for loop to display the same pattern on the right hand side.
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
                                <Container style={{color: 'blue', width: '20%'}}>
                                    <Col>
                                    <Row >
                                        <OriginalPattern/>      
                                    </Row>
                                    </Col>
                                </Container>
                            </Container>
                        </Col>
                        <Col>
                            <Container>
                                <h5>Your Pattern</h5>
                                <Container >
                                    <Col>
                                        <Row >
                                            {this.state.userPattern}      
                                        </Row>
                                        <hr/>
                                        <Button disabled={!this.state.isPatternPresent} onClick={this.displayPattern}>
                                            Display pattern
                                        </Button>

                                    </Col>
                                </Container>
                            </Container>
                        </Col>
                    </Row>
                </Col>

            </Container>
            
        );
    }
}

export default LoopsActivity;