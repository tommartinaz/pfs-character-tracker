import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardTitle, CardText, Col} from 'reactstrap';

import CharacterSelector from './CharacterSelector';

class Scenario extends Component {
    updateHistory() {
        this.props.history.push(`/scenarios/${this.props.scenario.id}`)
    }
    render() {
        return (
            <div>
                <Col sm='6' md='6' lg='9'>
                    <h4>Details</h4>
                    {this.props.scenario && <div>
                        <Card
                            style={{
                            backgroundColor: '#bbb'
                        }}>
                            <CardTitle>
                                {this.props.scenario.title}
                            </CardTitle>
                            {this.props.scenario.name && <CardText>
                                Played by: {this.props.scenario.name}
                            </CardText>}
                            {!this.props.scenario.name && <CardText>
                                Available for Play
                            </CardText>}
                        </Card>
                        {!this.props.scenario.name && 
                            <CharacterSelector 
                                scenario_id={this.props.scenario.id} 
                                history={this.updateHistory.bind(this)}
                            />
                        }
                    </div>}
                </Col>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        scenario: state.scenarios[props.match.params.id]
    }
}

export default connect(mapStateToProps, null)(Scenario);