import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Col} from 'reactstrap'
const test = (props) =>{
    return (
        <Col>
        <Link to='/characters/new'>
            <Button outline color='info'>
                Add a character</Button>
                </Link>
        </Col>
)
}
export default test;