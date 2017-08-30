import React, {Component} from 'react';
import {
    Card,
    CardTitle,
    CardSubtitle,
    CardText,
    Row,
    Col,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {connect} from 'react-redux';

class Character extends Component {
    updateHistory() {
        this.props.history.push(`/characters`)
    }

    render() {
        console.log("PROPS", this.props)
        const scenarioList = _.map(this.props.scenarios, scenario => <li key={scenario.id}>{scenario.title}</li>
        )
        return (
            <div>
                {this.props.character && <Row>
                    <Col>
                        <Card>
                            <CardTitle>
                                Name: {this.props.character.name}
                            </CardTitle>
                            <CardSubtitle>
                                Alignment: {this.props.character.alignment}
                            </CardSubtitle>
                            <CardText>
                                {this.props.character.race}
                                <br/> {this.props.character.class}
                            </CardText>
                            <Link 
                                to={`/characters/${this.props.character.id}/edit`}
                            >
                                <Button color='info' size='sm'>Edit</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col>
                        <h4>Scenairos played by this character</h4>
                        <ul>
                            {scenarioList}
                        </ul>
                    </Col>
                </Row>
}

            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    console.log("CHARACTER_PROPS", props)
    return {
        character: state.characters[props.match.params.id],
        scenarios: _.filter(state.scenarios, scenario => scenario.char_id === parseInt(props.match.params.id, 10))
    }
}
export default connect(mapStateToProps, null)(Character);