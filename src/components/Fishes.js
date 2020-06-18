import React, { Component } from 'react'
import '../App.css';


export default class Fishes extends React.Component{
  handleMouseOver=(e)=>{
    if(e.target.className === 'par t5'){
      document.body.querySelector('.speech-bubble.fish3').style.opacity = 1
      document.body.querySelector('.hover.f').style.opacity = 0

    }
    if(e.target.className === 'par t52'){
      document.body.querySelector('.speech-bubble.fish1').style.opacity = 1
      document.body.querySelector('.hover.f').style.opacity = 0

    }
    if(e.target.className === 'par t53'){
      document.body.querySelector('.speech-bubble.fish2').style.opacity = 1
      document.body.querySelector('.hover.f').style.opacity = 0


    }
  }

  handleMouseOut=(e)=>{
    if(e.target.className === 'par t5'){
      document.body.querySelector('.speech-bubble.fish3').style.opacity = 0
    }
    if(e.target.className === 'par t52'){
      document.body.querySelector('.speech-bubble.fish1').style.opacity = 0
    }
    if(e.target.className === 'par t53'){
      document.body.querySelector('.speech-bubble.fish2').style.opacity = 0

    }
  }

    render(){
      let fish=require("../img/section5.png")
      let sec5= ['par t5','par t52','par t53']
        return(
          <>
           <h3 className='hover f'>Hover Over us!</h3>
          {sec5.map((name)=> <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className={name} src={fish}/> )}
 <div class="speech-bubble fish1" contenteditable>{this.props.plastics.map((plastic)=>{ if(plastic.id === 11){return plastic.info}})}</div>
 <div class="speech-bubble fish2" contenteditable>{this.props.plastics.map((plastic)=>{ if(plastic.id === 12){return plastic.info}})}</div>
 <div class="speech-bubble fish3" contenteditable>{this.props.plastics.map((plastic)=>{ if(plastic.id === 13){return plastic.info}})}</div>

</>
        )
    }
}