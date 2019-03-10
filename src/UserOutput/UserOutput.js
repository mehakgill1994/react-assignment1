import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return <div className="UserOutput">
                <p>Welcome {props.username}</p>
                <p>How are you {props.username}?</p>
            </ div>
};

export default UserOutput;