import React from 'react'
import {Link} from 'react-router-dom';

import font from '../assets/font';

const Welcome = (props) => {
    return (
        <div style={{position: 'absolute', top: '100px', left: '250px', height: '15vh', width: '70vw', backgroundColor: '#9FBEA0'}}>
            <div style={{fontFamily: font, fontSize: '24px', color: '#000', textShadow: '2px 2px #fff', margin: '0px auto'}}>
                Welcome to the world of Golarion. Pathfinder Society (PFS) is the organized play campaign for the Pathfinder Roleplaying Game. This is a system for tracking a player's characters, which scenarios they played, and which scenarios are available for play. Please see either <Link to='/characters'>Characters</Link> or <Link to='/scenarios'>Scenarios</Link> to get started.
            </div>
        </div>
    )
}
export default Welcome;