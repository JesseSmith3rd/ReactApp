import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [{name: 'Jesse', age: 25},
              {name: 'Roshonda', age: 26},
              {name: 'Laila', age: 1}],
    otherState: 'Some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked')
    this.setState ({persons: [{name: newName, age: 39},
              {name: 'Roshonda D. Smith', age: 40},
              {name: 'Laila R. Smith', age: 11}]
      }
    )
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [{name: 'Jesse III', age: 25},
              {name: event.target.value, age: 26},
              {name: 'Laila Rochelle Smith', age: 1}]
      })
  }
  render() {
    const style = {
      backgroundColor:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I am engineering</h1>
        <button style={style}
        onClick={this.switchNameHandler.bind(this,'Jesse Smith III' )}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'RoRo')}
          changed={this.nameChangedHandler}>My Hobbies: Writing</Person>
        <Person
          name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>

    );
    //return React.createElement('div', {className: 'App'}, 'h1', React.createElement('h1', null, 'Does this work ?' ) );
  }
}

export default App;
