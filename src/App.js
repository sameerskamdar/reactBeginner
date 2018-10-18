import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  
  state = {
    persons: [
      { club:'barcelona', position:'1'},
      { club:'real madrid', position:'2'},
      { club:'atletico madrid', position:'3'},
      { club:'sevilla', position:'4'}
    ],
    showClubs: false
  }

  switchClubName = (newClub) =>{
    //console.log('clicked');
    //this.state.persons[1].club = 'RM';
    this.setState({
      persons: [
        { club:'barcelona', position:'1'},
        { club:'RM', position:'2'},
        { club:'atletico madrid', position:'3'},
        { club: newClub, position:'5'}
      ]
    })
  }

  clubChanged = (event) => {
    this.setState({
      persons: [
        { club:'barcelona', position:'1'},
        { club:'RM', position:'2'},
        { club:'atletico madrid', position:'3'},
        { club: event.target.value, position:'5'}
      ]
    })
  }

  toggleClubs = () =>
  {
    const doesShow = this.state.showClubs;
    this.setState({
      showClubs: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }
    let persons = null;

        if(this.state.showClubs){
          persons = (
            <div>

            {
              this.state.persons.map( person => {
                return <Person club={person.club} position={person.position}/>
              })
              /* <Person club={this.state.persons[0].club} position={this.state.persons[0].position}/> 
            <Person club={this.state.persons[1].club} position={this.state.persons[1].position} click={this.switchClubName.bind(this, 'girona')}/> 
            <Person club={this.state.persons[2].club} position={this.state.persons[2].position}> 2nd fav </Person> 
            <Person club={this.state.persons[3].club} position={this.state.persons[3].position} changed={this.clubChanged}/> */
            }
          </div>
          );
        }
    return (
      <div className="App">
        <h1>Hi, React</h1>
        <button onClick={this.toggleClubs} style={style}>toggle</button>
        {persons}
      </div>
    );
  }
}

export default App;
