import React, { Component } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
class SortingActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentList: [],
            currentString: '',
            isInputValid: false
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
        const isValid = this.parseStringToList();
        await console.log(this.state.currentString);
    }

    parseStringToList = () => {
        const currentString = this.state.currentString;
        // If current string is empty, input is invalid
        if (currentString === '') {
            this.setState({
                isInputValid: false,
                currentList: []
            })
        }

        // if current string is non empty, but has no commas, input is invalid so return
        let split = currentString.split(",");
        if (split === undefined || split === null) {
            this.setState({
                isInputValid: false
            })
            return false;
        }

        // if current string is non-empty and input has commas, but has non-numbers, input is invalid so return
        let numList = [];
        for (let i = 0; i < split.length; i++) {
            const number = parseInt(split[i]);
            if (isNaN(number)) {
                this.setState({
                    isInputValid: false
                })
                return false;
            }
            numList.push(parseInt(split[i]));
        }

        // if input is perfectly valid, set state and return
        this.setState({
            currentList: numList,
            isInputValid: true
        });

        console.log({numList: numList});
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
                            <Row>
                                <Col>
                                    List to sort
                                </Col>
                                <Col>
                                    [ {this.state.currentList.toString()} ]
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col>
                                    <Button disabled={!this.state.isInputValid} onClick={this.onRunSortClick}>
                                        Run My Sort
                                    </Button>
                                </Col>
                                <Col>
                                    <Button disabled={!this.state.isInputValid} onClick={this.onSimulateSortClick}>
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
