import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button} from 'reactstrap'
import * as scenarioActions from '../actions/action_scenarios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

class CharacterSelector extends Component {

    onSubmit(values) {
        this
            .props
            .actions
            .addCharToScenario({scenario_id: this.props.scenario_id, values})
        this
            .props
            .history()           
    }

    chars() {
        return _.map(this.props.characterList, char => {
            return (
                <option key={char.id} value={char.id}>{char.name}</option>
            )
        })
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name='char_id' component='select'>
                        <option/> 
                        {this.chars()}
                    </Field>
                    <Button className='btn btn-primary' type='submit'>Add Character</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {characterList: state.characters}
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(scenarioActions, dispatch)
    }
}

const Char = reduxForm({form: 'charSelector'})(CharacterSelector);

export default connect(mapStateToProps, mapDispatchToProps)(Char);