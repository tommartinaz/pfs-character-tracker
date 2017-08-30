import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {Button, Card, CardTitle, CardText} from 'reactstrap';
import * as characterActions from '../actions/action_character';
import _ from 'lodash';

class EditCharacter extends Component {
    onSubmit(values, props) {
        this
            .props
            .actions
            .newChar({ 
                name: values.name,
                class_id: parseInt(values.class), 
                alignment_id: parseInt(values.alignment), 
                race_id: parseInt(values.race)})
        this.props.history.push(`/characters`)
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
                    {this.props.alignments && <Card>
                        <CardTitle>
                            <Field
                                name='name'
                                component='input'
                                type='text'
                            />
                        </CardTitle>
                        <Field name='class' component='select'>
                            <option/> {this.classes()};
                        </Field>
                        <Field name='race' component='select'>
                            <option/> {this.races()};
                        </Field>
                        <Field name='alignment' component='select'>
                            <option/> {this.alignments()};
                        </Field>
                    </Card>}
                    <Button type='submit'>Submit</Button>
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