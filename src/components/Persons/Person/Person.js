import React from 'react';
//import '../../containers/App.css';
import classes from './Person.css';
const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)':{
    //         width:'450px'
    //     }
    // }
    console.log('[Person.js] rendering...')
    return (

        <div className={classes.Person}>
            <p onClick={props.click}> club: {props.club} and 
            rank: {props.position}
            </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.club}/>
        </div>
    )
};
export default person;