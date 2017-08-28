import React, {Component} from 'react';
import {Card, CardTitle, CardText, Row, Col} from 'reactstrap';
import _ from 'lodash';
import {connect} from 'react-redux';

class Character extends Component {
    render() {
        console.log("PROPS", this.props)
        const scenarioList = _.map(this.props.scenarios, scenario => <li key={scenario.id}>{scenario.title}</li>
        )
        return (
            <div>
                <Row>
                    <Col sm='8' md='8' lg='6'>
                        <Card>
                            <CardTitle>
                                Character Name {/* {this.props.character.name ? this.props.character.name : ''} ({this.props.character.alignment ? this.props.character.alignment : ''}) */}
                            </CardTitle>
                            <CardText>
                                <p>Race</p>
                                <p>Class</p>
                                {/* <p>{this.props.character.race ? this.props.character.race : ''}</p>
                    <p>{this.props.character.class ? this.props.character.class : ''}</p> */}
                            </CardText>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <h5>Scenairos played by this character</h5>
                    <ul>
                        {scenarioList}
                    </ul>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    console.log("CHARACTER_PROPS", props)
    return {
        character: _.filter(state.characters, character => character.id === parseInt(props.match.params.id, 10)),
        scenarios: _.filter(state.scenarios, scenario => scenario.char_id === parseInt(props.match.params.id, 10))
    }
}
export default connect(mapStateToProps, null)(Character);