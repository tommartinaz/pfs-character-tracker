import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Nav, NavItem, NavLink} from 'reactstrap'

class ScenarioList extends Component {
    constructor() {
        super();
    }
    ScenarioList() {
        return _.map(this.props.scenarios, scenario => {
            return (
                <NavLink href={`/scenarios/${scenario.id}`} key={scenario.id}>
                        <li>{scenario.title}</li>
                    </NavLink>
            )
        })
    }
    availableScenarios() {
        let availScenario = _.filter(this.props.scenarios, scenario => !scenario.name)
        console.log("AVAIL", availScenario);
        return _.map(availScenario, scenario => {
            return (
                <NavLink href={`/scenarios/${scenario.id}`}><li key={scenario.id}>
                    {scenario.title}
                </li>
                </NavLink>
            )
        })
    }
    render() {
        return (
            <Row>
                <Col>
                    <h3>All scenarios</h3>
                    <ul>
                        {this.ScenarioList()}
                    </ul>
                </Col>
                <Col>
                    <h3>Scenarios available to play</h3>
                    <ul>
                        {this.availableScenarios()}
                    </ul>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {scenarios: state.scenarios}
}
export default connect(mapStateToProps, null)(ScenarioList);