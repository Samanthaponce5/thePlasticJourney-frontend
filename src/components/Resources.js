import React from 'react';
import '../App.css'



 class Resources extends React.Component{
   state={
    sites:[]
   }
  componentDidMount(){
    fetch('http://localhost:3000/sites')
    .then((resp)=>resp.json())
    .then((data)=>this.setState({sites:data}))
  }
  render(){
    let names=['firsts-s','seconds-s','thirds-s','fourths-s','fifths-s','sixths-s']
    // console.log(this.state.sites)
  return (
    <>
    {names.map((name,index)=>
<img className={`see ${name}`}key ={index}src="https://images.squarespace-cdn.com/content/v1/57e6b422f5e23123e59360e9/1587578761365-UXVZ8U91KJP4JHI4EKJC/ke17ZwdGBToddI8pDm48kNzZ-zcgtvZFpwwFWdpSltZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpylMLGiNBwWDu7Rm8ZOgC0TmMfolEvrjqOJv2FJwTCsrP1sTOcbrz0hM_jN7frStCo/single-seaweed.gif"/>
)}
    <img className='fish-sec-s'src={ require('../img/fish.png')}/>
    <img className='fish-sec-s another'src={ require('../img/fish.png')}/>
    <h1 className="sourcetitle">Sources</h1>
  <div className='resource'>
{this.state.sites.map((site)=><li className='links'><a href={site.weblink}>{site.weblink}</a></li>)}
</div>
</>
    );
  }
}


//   render(){
//     // console.log(this.state.sites)
//   return (
//     <>
//     <h1 className="sourcetitle">Sources</h1>
//   <div className='resource'>
// {this.state.sites.map((site)=><li className='links'><a href={site.weblink}>{site.weblink}</a></li>)}
// </div>
// </>
 
//     );
//   }
// }

export default Resources;