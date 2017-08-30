import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Card, CardTitle, Row, Col, Button} from 'reactstrap';
import _ from 'lodash';

class CharacterList extends Component {

    charList() {
        return _.map(this.props.characters, character => {
            return (
                <Card
                    key={character.id}
                    style={{
                    backgroundColor: '#bbb'
                }}>
                    <CardTitle>
                        <Link to={`/characters/${character.id}`}>
                            {character.name}
                        </Link>
                    </CardTitle>
                </Card>
            )
        })
    }

    render() {
        return (
            <div>
                <Col sm='4' md='4' lg='9'>
                    <h4>My Characters</h4>
                    <div
                        style={{
                        height: '400px',
                        overflowY: "scroll"
                    }}>
                        <ul>
                            {this.charList()}
                        </ul>
                    </div>
                </Col>
                <Col>
                <Link to='/characters/new'>
                    <Button outline color='info'>
                        Add a character</Button>
                        </Link>
                </Col>
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