import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return { message: "Person snapshot!"};
    }

    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    componentDidUpdate(){
        console.log('[Person.js] componentDidUpdate')
    }
    render(){
    console.log('[Person.js] rendering...')
    return (
        <Aux>
            {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p>}
            <p onClick={this.props.click}> club: {this.props.club} and 
            rank: {this.props.position}
            </p>
            <p>{this.props.children}</p>
            <input type='text' onChange={this.props.changed} value={this.props.club} 
                   //ref={(inputEl) => {this.inputElement = inputEl}}
                   ref={this.inputElementRef}
            />
        </Aux>
    );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    club: PropTypes.string,
    position: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);