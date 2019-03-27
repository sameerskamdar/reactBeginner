import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
  useEffect(() => { 
      console.log('[Cockpit.js useEffect]')
      /* setTimeout(()=>{
        alert('Saved data to cloud!');
      }, 1000); */
      //toggleBtnRef.current.click();
      return()=>{
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
    }, []);

    useEffect(() => { 
      console.log('[Cockpit.js 2nd useEffect]');
      return()=>{
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      }
    });
      
    let btnClass = "";
    if(props.showClubs){
        btnClass = classes.Red;
    }
    let assignedClasses = [];
        if(props.personsLength <= 2){
          assignedClasses.push( classes.red);
        } 
        if(props.personsLength <= 1){
          assignedClasses.push( classes.bold );
        }
    return(
        <div className={classes.Cockpit}>
            <h1>Hi, React</h1>
            <p className={assignedClasses.join(' ')}>its working</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>toggle</button>
           {/*  <AuthContext.Consumer>
              {context => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer> */
            }
             <button onClick={authContext.login}>Log in</button>
        </div>
        );
};
export default React.memo(cockpit);
