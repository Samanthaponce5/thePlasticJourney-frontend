import React from 'react';
import Turtle from './components/Turtle';
import About from './components/About';
import Home from './components/Home';
import Help from './components/Help';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


 class App extends React.Component{

  render(){
  return (

<Router >
<Navbar/>
<Switch>
<Route exact path="/"><Home /></Route>
<Route exact path='/about'><About/></Route>
<Route exact path='/howtohelp'><Help/></Route>
</Switch>
</Router >
    
    
  
    );
  }
}

export default App;
