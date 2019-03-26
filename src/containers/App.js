import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/CockPit/Cockpit'
//import Radium, {StyleRoot} from 'radium';
 
class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: 'adsdf', club:'barcelona', position:'1'},
      { id: 'gbsbg', club:'real madrid', position:'2'},
      { id: 'ujett', club:'atletico madrid', position:'3'},
      { id: 'mry6y', club:'sevilla', position:'4'}
    ],
    showClubs: false
  } 

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount(){
    console.log('[App.js] componentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
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

  clubChanged = (event, id) => { 
    const clubIndex = this.state.persons.findIndex( c => {
      return c.id === id;
    });

    const club = {
      ...this.state.persons[clubIndex]
    };

    club.club = event.target.value;

    const persons = [...this.state.persons];
    persons[clubIndex] = club;
    this.setState({
      persons: persons
    })
  }
  deleteClub = (clubIndex) => {
    //const clubs = this.state.persons.slice();
    const clubs = [...this.state.persons]; 
    clubs.splice(clubIndex,1);
    this.setState({persons:clubs});
  }

  toggleClubs = () =>
  {
    //const doesShow = this.state.showClubs;
    this.setState({
      showClubs: ! this.state.showClubs
    });
  }

  render() {
    console.log('[App.js render]');
    let persons = null;
         if(this.state.showClubs){
          persons = <Persons persons={this.state.persons}
                     clicked={this.deleteClub}
                     changed={this.clubChanged}
                    />;
        }
        
        
    return (
      //<StyleRoot>
        <div className={classes.App}>
          <Cockpit showClubs={this.state.showClubs}
                   persons={this.state.persons}
                   clicked={this.toggleClubs}
          />
          {persons}
        </div>
     // </StyleRoot>
    );
  }
}

export default App;
