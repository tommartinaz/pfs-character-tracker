import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardTitle, CardText, Col, CardSubtitle} from 'reactstrap';

import CharacterSelector from './CharacterSelector';

class Scenario extends Component {
    updateHistory() {
        this.props.history.push(`/scenarios/${this.props.scenario.id}`)
    }
    render() {
        const style = this.props.scenario ? 
            (this.props.scenario.name ? 
                {backgroundColor: '#bbb', opacity: 0.75} : {backgroundColor: '#9FBEA0', opacity: 0.75}) 
                : {};
        return (
            <div>
                <Col sm='6' md='6' lg='9'>
                    <h4>Details</h4>
                    {this.props.scenario && <div>
                        <Card
                            style={style}
                        >
                            <CardTitle>
                                {this.props.scenario.season}-{this.props.scenario.scenario_num}:  
                                {this.props.scenario.title}
                            </CardTitle>
                            <CardSubtitle>
                                For character levels {this.props.scenario.low_level}-{this.props.scenario.high_level}
                            </CardSubtitle>
                            {this.props.scenario.name && <CardText>
                                <br/>
                                {this.props.scenario.description} 
                                <br/>
                                <br/>
                                Played by: {this.props.scenario.name}
                            </CardText>}
                            {!this.props.scenario.name && <CardText>
                                <br/>
                                {this.props.scenario.description} 
                                <br/>
                                <br/>
                                Available for Play
                            </CardText>}
                        </Card>
                        {!this.props.scenario.name && 
                            <CharacterSelector 
                                scenario={this.props.scenario} 
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
    console.log(state.scenarios[props.match.params.id])
    return {
        scenario: state.scenarios[props.match.params.id]
    }
}

export default connect(mapStateToProps, null)(Scenario);