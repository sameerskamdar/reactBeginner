import React from 'react';
const person = (props) => {
    return (
        <div>
            <p onClick={props.click}> club: {props.club} and 
            rank: {props.position}
            </p>
            <p>{props.children}</p>
        </div>
    )
};
export default person;