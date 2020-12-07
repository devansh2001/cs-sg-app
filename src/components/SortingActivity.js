import React, { Component } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { browserHistory } from 'react-router';

class SortingActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentList: [],
            currentString: '',
            isInputValid: false,
            simulationSteps: [],
            userCodeOutput: []
        }
    }

    // TASK: Complete the 'myBubbleSort' method below
    bubbleSort = (list) => {
        

        return list;
    }

    simulateCompletedBubbleSort = (list) => {
        if (list === undefined || list === null || list.length === 0 || list.length === 1) {
            return;
        }
        for (let i = 0; i < list.length - 1; i++) {
            for (let j = 0; j < list.length - i - 1; j++) {
                // on every iteration, show simulated states
                let currentSimulatedStates = this.state.simulationSteps;
                // adding a deepcopy of the list
                currentSimulatedStates.push({
                    'array': list.map(element => element),
                    'i': j,
                    'j': j + 1
                });
                this.setState({
                    simulationSteps: currentSimulatedStates
                })

                if (list[j] > list[j + 1]) {
                    console.log("Sorting");
                    let temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                }

                
            }
        }
        console.log(list);
        return list;
    }

    onRunSortClick = async () => {
        console.log("Running Student's Code");
        let listCopy = this.state.currentList.map(element => element);
        let sorted = this.bubbleSort(listCopy);
        await this.setState({
            userCodeOutput: sorted
        })

        await console.log(this.state.userCodeOutput)
    }

    onSimulateSortClick = async () => {
        console.log("Running Actual Bubble Sort");
        console.log(this.state.simulationSteps);
        let listCopy = this.state.currentList.map(element => element);
        const initialSteps = [{
            'array': listCopy.map(element => element),
            'i': 0,
            'j': 1
        }]
        await this.setState({
            simulationSteps: initialSteps
        })
        let sorted = this.simulateCompletedBubbleSort(listCopy);
        console.log(listCopy);
        console.log(sorted);
        console.log(this.state.simulationSteps);

        
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

    showSimulatedSteps = (steps) => {
        if (steps === null || steps === undefined || steps.length === 0) {
            return;
        }
        let display = [];
        for (let i = 0; i < steps.length; i++) {
            const currentState = <li> { steps[i]['array'].toString() } </li>
            display.push(currentState);
        }

        return display;
    }

    formatSimulationStates = (states) => {
        if (states === undefined || states === null) {
            return;
        }

        let formattedStates = [];
        for (let i = 0; i < states.length; i++) {
            let formattedArray = this.formatArray(states[i]);
            formattedStates.push(<li> { formattedArray } </li>);
        }
        return formattedStates;
    }

    formatArray = (state) => {
        if (state === null || state === undefined) {
            return;
        }

        const array = state['array']
        if (array === null || array === undefined || array.length === 0) {
            return;
        }

        const redColor = '#FF0000';
        const greenColor = '#00FF00';
        const i = state['i'];
        const j = state['j'];

        let out = [];
        for (let x = 0; x < array.length; x++) {
            let styledElement;
            if (x === i) {
                styledElement = (<span style={{color: redColor}}> { array[x] } </span>);
            } else if (x === j) {
                styledElement = (<span style={{color: greenColor}}> { array[x] } </span>);
            } else {
                styledElement = ( <span> { array[x] } </span>)
            }

            out.push(<span> { styledElement } </span>)
            out.push(<span>,</span>)
        }

        out.pop();
        return out;
    }

    handleBack = () => {
        browserHistory.push('/loops');
    }

    render() {
        return (
            <div>
                <Container style={{textAlign: 'center'}}>
                    <br/>
                    <h2>Sorting Activity</h2>
                    <hr/>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <h4>Please Input a List of Numbers to Sort</h4>
                                </Col>
                                <Col>
                                    <InputGroup className='mb-3'>
                                        <FormControl onChange={this.onCurrentStringChange} placeholder='Example: 10,7,6,9,1' />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <h4>Your Input List is</h4>
                                </Col>
                                <Col>
                                    <h4>
                                        [ {this.state.currentList.toString()} ]
                                    </h4>
                                </Col>
                            </Row>
                            
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
                    <br/>
                    <hr/>
                    <Row>
                        <Col>
                            <h4>My Sort Results</h4>
                                <ul className={'sim-list'}>
                                    <h4>
                                        <li>
                                            {
                                                this.formatArray({
                                                    'array': this.state.userCodeOutput,
                                                    'i': null,
                                                    'j': null
                                                })
                                            }
                                        </li>
                                    </h4>
                                </ul>
                        </Col>
                        <Col>
                               <h4> Simulation Results</h4>
                                <ul className={'sim-list'}>
                                    <h4>
                                        { this.formatSimulationStates(this.state.simulationSteps) }
                                    </h4>
                                </ul>

                        </Col>
                    </Row>

                    <Button onClick={this.handleBack} className={'my-navigation-button'}  >
                        Go To Previous Activity!
                    </Button>
                </Container>
            </div>
        )
    }
}

export default SortingActivity;
