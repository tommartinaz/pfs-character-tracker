import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button} from 'reactstrap'
import * as scenarioActions from '../actions/action_scenarios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import font from '../assets/font'

class CharacterSelector extends Component {

    onSubmit(values) {
        this
            .props
            .actions
            .addCharToScenario({scenario_id: this.props.scenario.id, values})
        this
            .props
            .history()           
    }

    chars() {
        return _.map(this.props.characterList, char => {
            return (
                <option key={char.id} value={char.id}>{char.name} Level {char.level}</option>
            )
        })
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div style={{fontFamily: font, color: '#000', textShadow: '2px 2px #fff'}}>
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

const mapStateToProps = (state, props) => {
    return {characterList: _.filter(state.characters, character => {
        return character.level >= props.scenario.low_level && character.level <= props.scenario.high_level
    })
}
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(scenarioActions, dispatch)
    }
}

const Char = reduxForm({form: 'charSelector'})(CharacterSelector);

export default connect(mapStateToProps, mapDispatchToProps)(Char);