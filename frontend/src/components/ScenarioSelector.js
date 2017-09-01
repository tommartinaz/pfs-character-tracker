import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button} from 'reactstrap'
import * as characterActions from '../actions/action_character';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

class ScenarioSelector extends Component {

    onSubmit(values) {
        this
            .props
            .actions
            .addScenarioToChar({id: values.scenario, char_id: this.props.char.id})
        this
            .props
            .history()           
    }

    scenarios() {
        return _.map(this.props.scenarioList, scenario => {
            return (
                <option key={scenario.id} value={scenario.id}>{scenario.title} Levels {scenario.low_level}-{scenario.high_level}</option>
            )
        })
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div>
                {this.props.scenarioList.length !== 0 && <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name='scenario' component='select'>
                        <option/> 
                        {this.scenarios()}
                    </Field>
                    <Field name='char_id' component='hidden' value={this.props.char.id} />
                    <Button className='btn btn-primary' type='submit'>Mark as played</Button>
                </form>}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {scenarioList: _.filter(state.scenarios, (scenario) => {
        return (!scenario.char_id && (scenario.low_level <= props.char.level && scenario.high_level >= props.char.level))
    })
}}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(characterActions, dispatch)
    }
}

const Scenario = reduxForm({form: 'charSelector'})(ScenarioSelector);

export default connect(mapStateToProps, mapDispatchToProps)(Scenario);