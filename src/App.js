import  { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
          
  render(){

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input 
          className='search-box' 
          type="search" 
          placeholder="search monsters" 
          onChange={e => {
            const searchField = e.target.value.toLowerCase();
            this.setState({ searchField });
          }}
        />
        <h1>Monster Rolodex</h1>
        {
          filteredMonsters.map(monster => (
            <h1 key={monster.id}>
              {monster.name}
            </h1>
          ))
        }

      <button onClick={() => this.setState()}>Change Text</button>
      <h1>{this.state.string}</h1>
      </div>
    );
  }
  
}

export default App;
