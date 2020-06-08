import React from 'react';
import Turtle from './components/Turtle';
import About from './components/About';
import Home from './components/Home';
import Help from './components/Help';
import Navbar from './components/Navbar';
import './App.css';
import './Turtle.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Journey from './components/Journey';


 class App extends React.Component{
  state={
    name:''
  }
  handleChange=(e)=>{
    let {value, name}= e.target
    this.setState({[name]:value})
  }



  componentDidMount(){
    let options = {
        // threshold:.25,
         rootMargin: "-150px"
    
    }
    let sections=document.querySelectorAll('.donut-chart')
    let observer=  new IntersectionObserver(function(entries, observer){
        entries.forEach(entry=>{
            if(!entry.isIntersecting){
                return
            }
            console.log(entry.target);
            entry.target.classList.add("chart1");
            observer.unobserve(entry.target)
        })
    },options)

    
    sections.forEach(section=>{
        observer.observe(section)
    })
  }
  

  render(){
  return (

<Router >
<Navbar/>
<Switch>
<Route exact path="/" render={(routerProps)=><Home handleChange={this.handleChange} name={this.state.name} routerProps={routerProps} />}/>
<Route exact path='/about' render={(routerProps)=><About/>}/>
<Route exact path='/howtohelp' render={(routerProps)=><Help/>}/>
{/* {this.state.name.length>0? */}
<Route exact path="/journey"  render={(routerProps)=><Journey />}/>
{/* <h1>Not Found</h1>
  } */}

</Switch>
</Router >
    
    
  
    );
  }
}

export default App;
