import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Row, Col} from 'reactstrap';

import * as charActions from './actions/action_character';
import * as scenarioActions from './actions/action_scenarios';
import Welcome from './components/Welcome';
import NavB from './components/Navbar';
import CharacterList from './components/CharacterList';
import Character from './components/Character'
import Scenarios from './components/ScenarioList';

class App extends Component {
  componentDidMount() {
    this
      .props
      .actions
      .getAllChars();
    this
      .props
      .actions
      .getAllScenarios();
  }

  render() {
    return (
      <div>
        <NavB/>
        <Row>
          <Col>
            <Route exact path='/' component={Welcome}/>
            <Route path='/characters' component={CharacterList}/>
          </Col>
            <Route exact path='/scenarios' component={Scenarios}/>
          <Col>
            <Route exact path='/characters/:id' component={Character}/>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, charActions, scenarioActions), dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
