import React from 'react';
import '../App.css'
import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";


 class Resources extends React.Component{
   state={
    sites:[], 
    loading:true
   }
  componentDidMount(){
    fetch('https://jacksjourney-backend.herokuapp.com/sites')
    .then((resp)=>resp.json())
    .then((data)=>this.setState({sites:data, loading:false}) )
  }
  render(){
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  opacity:0.5;
`;
    let names=['firsts-s','seconds-s','thirds-s','fourths-s','fifths-s','sixths-s']
    // console.log(this.state.sites)
  return (
    <>
     <img className='seahorse blues'src={ require('../img/horse.gif')} alt=''/>
    {names.map((name,index)=>
<img className={`see ${name}`}key ={index}src={ require('../img/seeweed.gif')} alt=''/>
)}

    <h1 className="sourcetitle">Sources</h1>
  <div className='resource'>
{this.state.loading ? <> <DotLoader
          css={override}
          size={150}
          color={"#FFFFFF"}
          loading={this.state.loading}
        /> <h1>Loading...</h1></> :this.state.sites.map((site)=><li className='links'><a href={site.weblink}>{site.weblink}</a></li>)}
</div>
</>
    );
  }
}



export default Resources;