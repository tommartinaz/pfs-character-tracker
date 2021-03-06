import React, {Component} from 'react';
import {
    Card,
    CardTitle,
    CardText,
    Row,
    Col,
    Button,
    CardBlock
} from 'reactstrap';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import font from '../assets/font'

import * as charActions from '../actions/action_character';
import ScenarioSelector from './ScenarioSelector';

class Character extends Component {
    updateHistory() {
        this.props.history.push(`/characters`)
    }

    newHistory() {
        this.props.history.push(`/characters/${this.props.character.id}`)
    }

    handleDelete(id) {
        this.props.actions.delChar(id)
    }

    render() {
        const scenarioList = _.map(this.props.scenarios, scenario => <li style={{fontSize: '1.1em'}} key={scenario.id}>{scenario.title}</li>
        )
        return (
            <div style={{fontFamily: font, color: '#000', textShadow: '2px 2px #fff'}}>
                {this.props.character && <Row>
                    <Col>
                    <h4>Character details</h4>
                        <Card style={{
                            backgroundColor: '#9FBEA0',
                            opacity: 0.75,
                            border: '1px solid black'
                        }}>
                            <CardBlock>
                            <CardTitle>
                                Name: {this.props.character.name}<br />
                                Level: {this.props.character.level}
                            </CardTitle>
                            <CardText>
                                <span style={{fontWeight: 'bold'}}>Class:</span> {this.props.character.class}
                                <br/>
                                <span style={{fontWeight: 'bold'}}>Race:</span> {this.props.character.race}
                                <br/> 
                                <span style={{fontWeight: 'bold'}}>Alignment:</span> {this.props.character.alignment}
                            </CardText>
                            <Link 
                                to={`/characters/${this.props.character.id}/edit`}
                            >
                                <Button  color='info' size='sm'>Edit</Button>
                            </Link>
                            <Button  color='danger' size='sm' onClick={() => {this.handleDelete(this.props.character.id)}}>Delete</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col>
                        <h4>Scenairos played by this character</h4>
                        <ul style={{backgroundColor: '#9FBEA0', border: '1px solid black', opacity: 0.75}}>
                            {scenarioList}
                        </ul>
                        <ScenarioSelector 
                        char={this.props.character}
                        history={this.newHistory.bind(this)}/>
                    </Col>
                </Row>
}

            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        character: state.characters[props.match.params.id],
        scenarios: _.filter(state.scenarios, scenario => scenario.char_id === parseInt(props.match.params.id, 10))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(charActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Character);