import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}> club: {props.club} and 
            rank: {props.position}
            </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.club}/>
        </div>
    )
};
export default person;