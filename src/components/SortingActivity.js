import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
class SortingActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentList: []
        }
    }

    // TASK: Complete the 'myBubbleSort' method below
    myBubbleSort = (list) => {
        return list;
    }

    bubbleSort = (list) => {
        return list;
    }

    onRunSortClick = () => {
        console.log("Running Student's Code");
        let list = this.state.currentList;
        let sorted = this.myBubbleSort(list);
    }

    onSimulateSortClick = () => {
        console.log("Running Actual Bubble Sort");
        let list = this.state.currentList;
        let sorted = this.bubbleSort(list);
    }

    render() {
        return (
            <div>
                Hello World

                <Container>
                    <h2>Sorting Activity</h2>
                    <hr/>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    Inputs
                                </Col>
                                <Col>
                                    Accept Params Here
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col>
                                    <Button onClick={this.onRunSortClick}>
                                        Run My Sort
                                    </Button>
                                </Col>
                                <Col>
                                    <Button onClick={this.onSimulateSortClick}>
                                        Simulate Bubble Sort  
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            My Sort Results
                        </Col>
                        <Col>
                            Simulation Results
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SortingActivity;