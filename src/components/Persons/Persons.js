import React from 'react';
import Person from './Person/Person';

const persons = (props) =>  {
    console.log('[Persons.js] rendering...');
    return props.persons.map( (person, index) => {
        return (
            <Person click={()=>props.clicked(index)} 
                                  club={person.club} 
                                  position={person.position}
                                  key={person.id}
                                  changed={(event)=>props.changed(event, person.id)}
                                  />
      )})
    };

export default persons;