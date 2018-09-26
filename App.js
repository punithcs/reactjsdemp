import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const list = [
  {
title: 'Punith',
url: 'https://facebook.github.io/react/',
points: 4,
authpor: 'puni',
objectID: 1,
  },
  {
title: 'Nike',
url: 'https://amazon.in/',
points: 25,
authpor: 'amazon',
objectID: 2,
  },
];
function isSearched(query){
  return function(item){
    return !query || item.title.toLowerCase().indexOf(query.toLowerCase()) !== - 
    1;
   }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state={
       list,
       query:' ',
    };
    this.onSearchChange= this.onSearchChange.bind(this);
  }
  onSearchChange(event){
    this.setState({query: event.target.value});
  }
  render() {
    const query = this.state.query;
    return (

     <div className="App" >
             <form>
        <input type="text" value={query} onChange={this.onSearchChange}/>
        </form>
     {
      this.state.list.filter(isSearched(query)).map((item)=>

       
        <div key={item.objectID}>
        <span><a href={item.url} >{item.title}</a></span>
        </div>
      
   )}
     </div>
    );
  }
}

export default App;
