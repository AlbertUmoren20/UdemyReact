import { Component } from 'react'; // functionality that the react has alrady built for us. A class component
import logo from './logo.svg';
import CardList from './components/Card-List/cardList';
import SearchBar from './components/Search-bars/searchBar';
import './App.css';



class App extends Component {
  //component is something that governs everything in the UI
  // Our entire application lives inside one application
  constructor(){
    super();

    this.state = { 
      //Now we create monsters, 
      // having object that contains names as a string
     monsters : [],
     searchField: "",
     
    };

  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) // In a Json format
    // .then(users => console.log(users)); // where by it is stored in "users".
    // Only reason why a function was mentioned, so that a call back can also be mentioned!
    .then(users => this.setState(() => {
      return{ monsters: users};
    },

    ))
  }

  onSearchChange = (event) => {
// console.log(event.target.value); // A search string
//gives us the string that's typed into that search box in the console
const searchField = event.target.value.toLocaleLowerCase();
this.setState(() =>{ //Pass in a functoion. And then return something!
  return {searchField};
});
};


  render(){

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster) =>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    
    return(
      <div className="App">  
      <h1 className='app-title'>Monsters Rolodex</h1>
 

     {/* filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}><h1>{monster.name}</h1></div> )
        })
      */ }
      <SearchBar onChangeHandler = {onSearchChange} placeHolder = {"Search Monsters"}/>
      <CardList monsters = {filteredMonsters} />
      
      </div>
    
    
    );
  }

  
}

export default App;
