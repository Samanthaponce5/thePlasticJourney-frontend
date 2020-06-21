import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Resources from './components/Resources';
import Navbar from './components/Navbar';
import './App.css';

import {BrowserRouter as Router,Switch,Route,HashRouter} from 'react-router-dom';
import Journey from './components/Journey';
import Feedback from './components/Feedback';


 class App extends React.Component{
  state={
    name:''
  }
  handleChange=(e)=>{
    let {value, name}= e.target
    this.setState({[name]:value})
  }


  // setUser = (name) => {
  //   this.setState({ name: name })
  // }

  

  render(){

    

  return (

<HashRouter >
<Navbar/>
<Switch>
<Route exact path="/" render={(routerProps)=><Home  setUser={this.setUser} handleChange={this.handleChange} name={this.state.name} routerProps={routerProps} />}/>
<Route exact path='/about' render={(routerProps)=><About/>}/>
<Route exact path='/sources' render={(routerProps)=><Resources/>}/>
{/* {this.state.name.length>0? */}
<Route exact path="/journey"  render={(routerProps)=><Journey {...this.state} routerProps={routerProps} />}/>
{/* //  <h1>Not Found</h1>
//  } */}
<Route exact path='/feedback' render={(routerProps)=><Feedback {...this.state} routerProps={routerProps}/>}/>

</Switch>
</HashRouter >
    
    
  
    );
  }
}

export default App;
