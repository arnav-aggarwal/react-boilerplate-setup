import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import testAction from '../actions/test-action.js';
import '../styles/sample-container.less';

class SampleContainer extends Component {
    constructor() {
        super();
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() { 
        this.props.testAction(this.props.testValue + 1);
    }

    render() {
        return (
            <div className="sample-container">
                <h1>Sample Container</h1>
                <p>Sample redux flow can be observed below.</p>
                <h3>Value: { this.props.testValue }</h3>
                <button onClick={ this.incrementCounter }>Increment</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { testValue: state.testValue };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ testAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);
