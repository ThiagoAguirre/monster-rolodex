import  { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState({ searchField });
  }
          
  render(){

    const { monsters, searchField } = this.state;
    const { onSearchChange} = this; 

    const filteredMonsters = monsters.filter((monster) => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
    <SearchBox onChangeHandler={onSearchChange} placeholder="Search monsters" className="monster-search-box" />
      <h1>Monster Rolodex</h1>
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  
}

export default App;
