import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {


    state = {

        errorText: ''
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        // debugger
        if (value < 1 || value > 32) {
            this.setState({

                errorText: 'Please enter a number between 1 and 32',
            })
        } else {

            console.log('number of events', value)
            this.props.updateNumberofEvents(value);
        }
    };

    render() {

        return (
            <div className='numberOfEvents'>
                <div className='numberOfEventsAlert'>
                    <ErrorAlert text={this.state.errorText} />
                </div>
                <input
                    type='number'
                    className='inputNumberOfEvents'
                    onChange={this.handleInputChanged}
                    value={this.props.numberOfEvents}
                />
            </div>
        )
    }
}

export default NumberOfEvents;