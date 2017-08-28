import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Card, CardTitle, Row, Col} from 'reactstrap';
import _ from 'lodash';
import * as characterActions from '../actions/action_character';

class CharacterList extends Component {

    charList() {
        console.log("State", this.props)
        return _.map(this.props.characters, character => {
            return (
                <Link to={`/characters/${character.id}`} key={character.id}>
                    <Row>
                        <Col>
                            <Card light style={{backgroundColor: '#bbb'}}>
                                {character.name}
                            </Card>
                        </Col>
                    </Row>
                </Link>
            )
        })
    }

    render() {
        console.log("STATE IN CHARS", this.state)
        return (
            <div>
                <ul>
                    {this.charList()}
                </ul>
            </div>
        )
    }
}
// const mapDispatchToProps = (dispatch) => {     return {         actions:
// bindActionCreators(characterActions, dispatch)     } }

const mapStateToProps = (state) => {
    return {characters: state.characters}
}
export default connect(mapStateToProps, null)(CharacterList);