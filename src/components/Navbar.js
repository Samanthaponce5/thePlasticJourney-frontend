import React from 'react';
import {Link} from 'react-router-dom'
import About from '../components/About'
import '../Nav.css';


 class Navbar extends React.Component{
   state={
       addClass:false
   }
   toggle=()=>{
       this.setState({addClass: !this.state.addClass})
   }
    

  render(){
   
    let changeClass = ['navbar']
    if(this.state.addClass){
        changeClass.push('change')
    }
  return (
      <>
      <div className='container'>
<nav className={changeClass.join(' ')} >
  <div className='hamburger-menu' onClick={this.toggle} >
    <div className='line line-1'></div>
     <div className='line line-2'></div>
     <div className='line line-3'></div>
  </div>
  
    <ul className="nav-list">
      <li className='nav-item'><a href='#' className='nav-link'>Home</a></li>
         <li className='nav-item'><a href='#' className='nav-link'>About</a></li>
          <li className='nav-item'><a href='#' className='nav-link'>How to help</a></li>
    </ul>
  </nav>
</div>
</>





    );
  }
}

export default Navbar;
{/* <div class="menu">
    <div class="title">MENU</div>
    <ul class="nav">
    <Link to='/'><li>Home</li></Link>
    <Link to='/about'><li>About</li></Link>
    <Link to='/howtohelp'><li>How to help</li></Link>
    </ul>
</div>
 */}
