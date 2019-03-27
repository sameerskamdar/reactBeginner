import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/CockPit/Cockpit'
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import Auth from '../context/auth-context'
//import Radium, {StyleRoot} from 'radium';
 
class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: 'adsdf', club:'barcelona', position: 1},
      { id: 'gbsbg', club:'real madrid', position: 2},
      { id: 'ujett', club:'atletico madrid', position: 3},
      { id: 'mry6y', club:'sevilla', position: 4}
    ],
    showClubs: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  } 

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

 /*  componentWillMount(){
    console.log('[App.js] componentWillMount');
  } */

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProp, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js componentDidUpdate]');
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
    this.setState((prevState, props)=>{
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }; 
    });
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

  loginHandler = () => {
    this.setState({authenticated: true});
  }
   
  render() {
    console.log('[App.js render]');
    let persons = null;
         if(this.state.showClubs){
          persons = <Persons persons={this.state.persons}
                     clicked={this.deleteClub}
                     changed={this.clubChanged}
                     isAuthenticated={ this.state.authenticated}
                    />;
        }
        
        
    return (
      //<StyleRoot>
        <Aux classes={classes.App}>
          <button onClick={()=>{this.setState({showCockpit: false});}}>Remove Cockpit</button>
          <Auth.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
          {this.state.showCockpit ? 
          (<Cockpit showClubs={this.state.showClubs}
                   personsLength={this.state.persons.length}
                   clicked={this.toggleClubs}
          />) : null
          }
          {persons}
          </Auth.Provider>
        </Aux>
     // </StyleRoot>
    );
  }
}

export default withClass(App, classes.App);
