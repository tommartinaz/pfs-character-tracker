import React, {Component} from 'react';
import './App.css';
import {Route, Router} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Row, Col} from 'reactstrap';
import createHistory from 'history/createBrowserHistory';

import * as charActions from './actions/action_character';
import * as scenarioActions from './actions/action_scenarios';
import * as raceActions from './actions/action_races';
import * as classActions from './actions/action_classes';
import * as alignmentActions from './actions/action_alignments';

import Welcome from './components/Welcome';
import NavB from './components/Navbar';
import CharacterList from './components/CharacterList';
import Character from './components/Character'
import ScenarioList from './components/ScenarioList';
import Scenario from './components/Scenario';
import EditCharacter from './components/EditCharacter';
import NewCharacter from './components/NewCharacter';

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
    this.props.actions.getAlignments();
    this.props.actions.getClasses();
    this.props.actions.getRaces();
  }
  
  render() {
    const history = createHistory();
    return (
      <Router history={history}>
      <div>
        <NavB/>
        <Row>
            <Route exact path='/' component={Welcome}/>
          <Col sm='8' md='8' lg='4'>
            <Route path='/scenarios' component={ScenarioList}/>
            <Route path='/characters' component={CharacterList}/>
          </Col>
          <Col sm='4' md='4' lg='8'>
            <Route exact path='/scenarios/:id' component={Scenario} />
            <Route exact path='/characters/:id' component={Character}/>
            <Route exact path='/characters/:id/edit' component={EditCharacter} />
            <Route exact path='/characters/new' component={NewCharacter} />
          </Col>
        </Row>
      </div>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, charActions, scenarioActions, classActions, alignmentActions, raceActions), dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
