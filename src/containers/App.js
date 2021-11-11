import React, {Component} from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
//import {robots} from './robots';
import './App.css';



class App extends Component{
    constructor()
    {
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }

componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")      //ajax call
    .then(response=>  response.json())
    .then(users=>this.setState({robots:users}));
    
    
}

    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value});
        
    }

    render()
    {
        const {robots, searchfield}=this.state;
        const filteredRobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (!robots.length)?                     //ternary operator (condition)?option1:option2
        <h1>Loading</h1>:
        (
            <div className="tc">
                <h1 className="f1 ">robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
                </Scroll>
            </div>
            
        );
        
    }
   
}

export default App;