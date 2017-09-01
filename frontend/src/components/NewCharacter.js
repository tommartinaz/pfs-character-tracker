import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {Button, Card, CardTitle, Col} from 'reactstrap';
import * as characterActions from '../actions/action_character';
import _ from 'lodash';
import font from '../assets/font';

class EditCharacter extends Component {
    onSubmit(values, props) {
        this
            .props
            .actions
            .newChar({
                name: values.name,
                class_id: parseInt(values.class, 10),
                alignment_id: parseInt(values.alignment, 10),
                race_id: parseInt(values.race, 10),
                level: values.level
            })
        this
            .props
            .history
            .push(`/characters`)
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
            <div style={{fontFamily: font, color: '#000', textShadow: '2px 2px #fff'}}>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    {this.props.alignments && <Col sm='4' md='4' lg='6'>
                        <h4>New Character</h4>
                        <Card
                            style={{
                            backgroundColor: '#9FBEA0',
                            opacity: 0.75,
                            border: '1px solid black',
                            fontFamily: font,
                            textShadow: '2px 2px #fff'
                        }}>
                            <CardTitle>
                                Name:
                                <br/>
                                <Field name='name' component='input' type='text'/>
                            </CardTitle>
                            Level:
                            <Field name='level' component='input' type='number'/>
                            Class:
                            <Field name='class' component='select'>
                                <option/> {this.classes()};
                            </Field>
                            Race:
                            <Field name='race' component='select'>
                                <option/> {this.races()};
                            </Field>
                            Alignment:
                            <Field name='alignment' component='select'>
                                <option/> {this.alignments()};
                            </Field>
                        </Card>
                        <Button color='success' type='submit'>Submit</Button>
                        <Link to='/characters'>
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