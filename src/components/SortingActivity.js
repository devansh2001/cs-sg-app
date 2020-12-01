import React, { Component } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
class SortingActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentList: [],
            currentString: ''
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

    onCurrentStringChange = async (e) => {
        const curr = e.target.value;
        await this.setState({
            currentString: curr
        });
        await console.log(this.state.currentString);
    }

    parseStringToList = () => {
        const currentString = this.state.currentString;
    }

    render() {
        return (
            <div>
                <Container>
                    <h2>Sorting Activity</h2>
                    <hr/>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    Input a list separated by commas 
                                </Col>
                                <Col>
                                    <InputGroup className='mb-3'>
                                        <FormControl onChange={this.onCurrentStringChange} placeholder='Example: 10,7,6,9,1' />
                                    </InputGroup>
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
