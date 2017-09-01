import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {Button, Card, CardTitle, Col} from 'reactstrap';
import * as characterActions from '../actions/action_character';
import _ from 'lodash';

class EditCharacter extends Component {
    onSubmit(values, props) {
        this
            .props
            .actions
            .updateChar({id: this.props.character.id, 
                name: values.name,
                class_id: parseInt(values.class, 10), 
                alignment_id: parseInt(values.alignment, 10), 
                race_id: parseInt(values.race, 10)})
        this.props.history.push(`/characters/${this.props.character.id}`)
    }

    classes() {
        return _.map(this.props.classes, classes => {
            return (
                <option value={classes.id}>{classes.class}</option>
            )
        })
    }

    races() {
        return _.map(this.props.races, race => {
            return (
                <option value={race.id}>{race.race}</option>
            )
        })
    }

    alignments() {
        return _.map(this.props.alignments, alignment => {
            return (
                <option value={alignment.id}>{alignment.alignment}</option>
            )
        })
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    {this.props.character && 
                    <Col sm='4' md='4' lg='6'>
                    <Card style={{backgroundColor: '#9FBEA0', opacity: 0.75, border: '1px solid black'}}>
                        <CardTitle>
                            Name: 
                            <Field
                                name='name'
                                component='input'
                                type='text'
                                placeholder={this.props.character.name}/>
                        </CardTitle>
                        Class: 
                        <Field name='class' defaultValue={this.props.character.class_id} component='select'>
                            <option/> {this.classes()};
                        </Field>
                        Race:
                        <Field name='race' defaultValue={this.props.character.race_id} component='select'>
                            <option/> {this.races()};
                        </Field>
                        Alignment:
                        <Field name='alignment' defaultValue={this.props.character.alignment_id} component='select'>
                            <option/> {this.alignments()};
                        </Field>
                    </Card>
                    <Button color='info' type='submit'>Submit</Button>
                    <Link to={`/characters/${this.props.character.id}`}>
                        <Button color='warning'>Cancel</Button>
                    </Link>
                    </Col>}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        character: state.characters[props.match.params.id],
        classes: state.classes,
        alignments: state.alignments,
        races: state.races
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(characterActions, dispatch)
    }
}

const Char = reduxForm({form: 'charSelector'})(EditCharacter);

export default connect(mapStateToProps, mapDispatchToProps)(Char);