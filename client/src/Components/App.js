import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.scss';
import * as actions from './../store/actions/index';
import Landing from './Landing/Landing';

class App extends Component {
    componentDidMount() {
        this.props.onGetTasks();
    }

    render() {
        return <Landing></Landing>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetTasks: () => dispatch(actions.getTasks())
    };
};

export default connect(null, mapDispatchToProps)(App);
