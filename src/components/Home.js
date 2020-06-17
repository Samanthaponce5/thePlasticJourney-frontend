import React from 'react';
import '../Homepg.css';
import UserInput from './UserInput';
import Ocean from './Ocean'

 class Home extends React.Component{
 

   handleSubmit=(e)=>{
      e.preventDefault()
     let {name} = this.props
     if(name.length > 0){
     fetch('http://localhost:3000/users',{
       method:'POST',
       headers:{
         'Content-Type':'application/json',
         'Accept':'application/json'
       },
       body:JSON.stringify({name})
     })
     .then((resp)=>resp.json())
     .then(()=>this.props.routerProps.history.push('/journey'))
    }
   }
 

  render(){
    
// console.log('Home',this.props.name)

  return (
    <>
<h1 className='entrancetitle'>Jack's tales</h1>
<UserInput name={this.props.name} handleSubmit={this.handleSubmit} handleChange={this.props.handleChange}/>
</>
    );
  }
}

export default Home;