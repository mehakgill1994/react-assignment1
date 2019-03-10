import React from 'react';

const UserInput = (props) => {

    const inputStyle = {
        width: "10%",
        margin: "12px auto",
        border: "1px solid red",
        padding: "8px"
      }

    return <input 
                style={inputStyle}
                type="text" 
                onChange={props.changeName} 
                value={props.name} />   
};

export default UserInput;