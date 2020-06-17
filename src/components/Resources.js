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
    // console.log(this.state.sites)
  return (
    <>
    <h1 className="sourcetitle">Sources</h1>
  <div className='resource'>
{this.state.sites.map((site)=><li className='links'><a href={site.weblink}>{site.weblink}</a></li>)}
</div>
</>
 
    );
  }
}

export default Resources;