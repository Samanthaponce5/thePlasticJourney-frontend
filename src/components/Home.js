import React from 'react';
import '../Homepg.css';
import UserInput from './UserInput';
import Ocean from './Ocean'
import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";

 class Home extends React.Component{

    state={
      loading:false

    }

   handleSubmit=(e)=>{
     this.setState({loading:true})
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
  const override = css`
  display: block;
  margin: 0 auto;
  
  
`;
return (
 <>
 <div className="bg"></div>

{this.state.loading ? <> <DotLoader
          css={override}
          size={150}
          color={"#FFFFFF"}
          loading={this.state.loading}
        />
        <h1 className='entrancetitle load'>Loading...</h1></>
        :
        <>
        <h1 className='entrancetitle'>Jack's Journey</h1>
<UserInput name={this.props.name} handleSubmit={this.handleSubmit} handleChange={this.props.handleChange}/>
 <img className='fish-sec-s home'src={ require('../img/fish.png')} alt=''/>
 </>
 }
<Ocean/>
</>
 );
}
}
export default Home;
