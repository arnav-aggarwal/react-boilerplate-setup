import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import testReducer from '../reducers/test-reducer.js';
import testAction from '../actions/test-action.js';
import '../styles/app.less';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>React Starter Package</h1>

                <p>This is your React boilerplate. Configuration includes:</p>
                <ul>
                    <li>Webpack</li>
                    <li>
                        Babel
                        <ul>
                            <li>babel-preset-react</li>
                            <li>babel-preset-latest</li>
                        </ul>
                    </li>
                    <li>Redux</li>
                    <li>Less</li>
                    <li>CSS Autoprefixer</li>
                </ul>
                <p>This is runnning on a basic Node server using Express.</p>

                <p>Sample redux flow can be observed below.</p>
                <h3>Redux Value: { this.props.testValue }</h3>
                <button onClick={ () => this.props.testAction(this.props.testValue + 1) }>Increment</button>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { testValue: state.testValue };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ testAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
