import React, {Component} from 'react';
import './index.css';
import {Route, Router, Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Row, Col, Button} from 'reactstrap';
import createHistory from 'history/createBrowserHistory';

import * as charActions from './actions/action_character';
import * as scenarioActions from './actions/action_scenarios';
import * as raceActions from './actions/action_races';
import * as classActions from './actions/action_classes';
import * as alignmentActions from './actions/action_alignments';
import font from './assets/font'

import Welcome from './components/Welcome';
import NavB from './components/Navbar';
import CharacterList from './components/CharacterList';
import Character from './components/Character'
import ScenarioList from './components/ScenarioList';
import Scenario from './components/Scenario';
import EditCharacter from './components/EditCharacter';
import NewCharacter from './components/NewCharacter';

const addCharButton = () =>{
  return (
      <div style={{fontFamily: font, color: '#000', textShadow: '2px 2px #fff'}}>
        <br />
      <Link to='/characters/new'>
          <Button color='info'>
              Add a character</Button>
              </Link>
      </div>
)
}

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
    const style = {
      // backgroundColor: "#A7B599",
      height: '100vh',
      width: '100vw'
    }
    return (
      <Router history={history}>
      <div style={style}>
        <NavB/>
        <Row>
          <Col sm='8' md='8' lg='4'>
            <Route exact path='/' component={Welcome}/>
            <Route path='/scenarios' component={ScenarioList}/>
            <Route path='/characters' component={CharacterList}/>
            <Route exact path='/characters' component={addCharButton}/>
          </Col>
          <Col sm='4' md='4' lg='8'>
            <Route exact path='/scenarios/:id' component={Scenario} />
            <Route exact path='/characters/:id' component={Character}/>
            <Route exact path='/characters/:id/edit' component={EditCharacter} />
            <Route exact path='/characters/new' component={NewCharacter} />
          </Col>
        </Row>
        <footer 
          id='footer'
          style={{
            position: 'fixed', 
            bottom: '0px', 
            width: '100vw', 
            backgroundColor: "#9FBEA0",
            fontFamily: font,
            color: '#000',
            textShadow: '2px 2px #fff'}}
        >
          <div 
            style={{
              position: 'relative',
              left: '50px'
            }}
          >
            ©Tom Martin
          </div>
          <div style={{position: 'absolute', top: '0px', left: '250px'}}>
             <Link style={{color: '#000'}} to='https://github.com/tommartinaz/pfs-character-tracker'>PFS Character Tracker on Github</Link>
          </div>
        </footer>
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
