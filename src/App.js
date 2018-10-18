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
    ]
  }

  switchClubName = () =>{
    //console.log('clicked');
    //this.state.persons[1].club = 'RM';
    this.setState({
      persons: [
        { club:'barcelona', position:'1'},
        { club:'RM', position:'2'},
        { club:'atletico madrid', position:'3'},
        { club:'sevilla', position:'5'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, React</h1>
        <button onClick={this.switchClubName}>switch name</button>
        <Person club={this.state.persons[0].club} position={this.state.persons[0].position}/> 
        <Person club={this.state.persons[1].club} position={this.state.persons[1].position} click={this.switchClubName}/> 
        <Person club={this.state.persons[2].club} position={this.state.persons[2].position}> 2nd fav </Person> 
        <Person club={this.state.persons[3].club} position={this.state.persons[3].position}/>
      </div>
    );
  }
}

export default App;
