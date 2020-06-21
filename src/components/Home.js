import React from 'react';
import '../Homepg.css';
import UserInput from './UserInput';
import Ocean from './Ocean'

 class Home extends React.Component{
 

   handleSubmit=(e)=>{
      e.preventDefault()
     let {name} = this.props
     if(name.length > 0){
     fetch('https://jacksjourney-backend.herokuapp.com/users',{
       method:'POST',
       headers:{
         'Content-Type':'application/json',
         'Accept':'application/json'
       },
       body:JSON.stringify({name})
     })
     .then((resp)=>resp.json())
     .then((data)=>{
      // this.props.setUser(data); 
      this.props.routerProps.history.push('/journey')})
    }
   }
 

render(){
return (
 <>
 <div className="bg"></div>
<h1 className='entrancetitle'>Jack's Journey</h1>
<UserInput name={this.props.name} handleSubmit={this.handleSubmit} handleChange={this.props.handleChange}/>
 <img className='fish-sec-s home'src={ require('../img/fish.png')} alt=''/>
<Ocean/>
</>
 );
}
}
export default Home;