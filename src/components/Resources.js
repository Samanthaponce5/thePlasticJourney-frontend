import React from 'react';
import '../App.css'



 class Resources extends React.Component{
   state={
    sites:[]
   }
  componentDidMount(){
    fetch('https://jacksjourney-backend.herokuapp.com/sites')
    .then((resp)=>resp.json())
    .then((data)=>this.setState({sites:data}))
  }
  render(){
    let names=['firsts-s','seconds-s','thirds-s','fourths-s','fifths-s','sixths-s']
    // console.log(this.state.sites)
  return (
    <>
     <img className='seahorse blues'src={ require('../img/horse.gif')} alt=''/>
    {names.map((name,index)=>
<img className={`see ${name}`}key ={index}src={ require('../img/seeweed.gif')} alt=''/>
)}
    {/* <img className='fish-sec-s'src={ require('../img/fish.png')}/> */}
    {/* <img className='fish-sec-s another'src={ require('../img/fish.png')}/> */}
    <h1 className="sourcetitle">Sources</h1>
  <div className='resource'>
{this.state.sites.map((site)=><li className='links'><a href={site.weblink}>{site.weblink}</a></li>)}
</div>
</>
    );
  }
}



export default Resources;