import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    let btnClass = "";
    if(props.showClubs){
        btnClass = classes.Red;
    }
    let assignedClasses = [];
        if(props.persons.length <= 2){
          assignedClasses.push( classes.red);
        } 
        if(props.persons.length <= 1){
          assignedClasses.push( classes.bold );
        }
    return(
        <div className={classes.Cockpit}>
            <h1>Hi, React</h1>
            <p className={assignedClasses.join(' ')}>its working</p>
            <button className={btnClass} onClick={props.clicked}>toggle</button>
        </div>
        );
};
export default cockpit;
