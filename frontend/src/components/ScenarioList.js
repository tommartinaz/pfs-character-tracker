import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Card, CardTitle} from 'reactstrap'

class ScenarioList extends Component {
    ScenarioList() {
        return _.map(this.props.scenarios, scenario => {
            return (
                <div key={scenario.id}>
                {scenario.name &&<Card
                    style={{
                        backgroundColor: '#bbb'
                    }}
                >
                    <Link to={`/scenarios/${scenario.id}`}>
                        <CardTitle style={{textDecoration: 'line-through'}}>
                        {scenario.title}
                        </CardTitle>
                    </Link>
                </Card> }
                {!scenario.name && 
                    <Card
                    style={{
                        backgroundColor: '#3e7'
                    }}
                    key={scenario.id}
                >
                    <Link to={`/scenarios/${scenario.id}`}>
                        <CardTitle>
                        {scenario.title}
                        </CardTitle>
                    </Link>
                </Card>
}
                </div>
            )
        })
    }
    render() {
        return (
            <Row>
                <Col>
                    <h4>All scenarios</h4>
                    <ul  style={{overflowY: 'scroll', height: '600px'}}>
                        {this.ScenarioList()}
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