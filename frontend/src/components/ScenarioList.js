import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Card, CardTitle} from 'reactstrap'

class ScenarioList extends Component {
    ScenarioList() {
        return _.map(this.props.scenarios, scenario => {
            return (
                <div key={scenario.id}>
                    {scenario.name &&< Card
                        block
                        style = {{
                                opacity: 0.75,
                                backgroundColor: '#bbb'
                        }}
                    > 
                        <CardTitle
                            style={{
                            textDecoration: 'line-through'
                        }}>
                            <Link to={`/scenarios/${scenario.id}`}>
                                {scenario.title}
                            </Link>
                        </CardTitle> 
                    </Card>}
                    {!scenario.name && <Card
                        style={{
                        backgroundColor: '#9FBEA0',
                        opacity: 0.75
                    }}
                        key={scenario.id}>
                        <CardTitle>
                            <Link to={`/scenarios/${scenario.id}`}>
                                {scenario.title}
                            </Link>
                        </CardTitle>
                    </Card>}
                </div>
            )
        })
    }
    render() {
        return (
            <Row>
                <Col>
                    <h4>All scenarios</h4>
                    <ul
                        style={{
                        overflowY: 'scroll',
                        height: '600px'
                    }}>
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