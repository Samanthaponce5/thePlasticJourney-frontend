import React from 'react'
import '../App.css';


export default class Fishes extends React.Component{
  handleMouseOver=(e)=>{
    if(e.target.className === 'floatingfish t5'){
      document.body.querySelector('.speech-bubble.fish3').style.opacity = 1
      document.body.querySelector('.hover.forfishes').style.opacity = 0

    }
    if(e.target.className === 'floatingfish t52'){
      document.body.querySelector('.speech-bubble.fish1').style.opacity = 1
      document.body.querySelector('.hover.forfishes').style.opacity = 0

    }
    if(e.target.className === 'floatingfish t53'){
      document.body.querySelector('.speech-bubble.fish2').style.opacity = 1
      document.body.querySelector('.hover.forfishes').style.opacity = 0


    }
  }

  handleMouseOut=(e)=>{
    if(e.target.className === 'floatingfish t5'){
      document.body.querySelector('.speech-bubble.fish3').style.opacity = 0
    }
    if(e.target.className === 'floatingfish t52'){
      document.body.querySelector('.speech-bubble.fish1').style.opacity = 0
    }
    if(e.target.className === 'floatingfish t53'){
      document.body.querySelector('.speech-bubble.fish2').style.opacity = 0

    }
  }

    render(){
      let fish=require("../img/section5.png")
      let sec5= ['floatingfish t5','floatingfish t52','floatingfish t53']
        return(
          <>
           <h3 className='hover forfishes'>Hover Over us!</h3>
            {sec5.map((name,index)=> <img key={index} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className={name} src={fish} alt=''/> )}
              <div className="speech-bubble fish1" >{this.props.plastics.map((plastic)=>{ if(plastic.id === 11){return plastic.info}})}</div>
              <div className="speech-bubble fish2" >{this.props.plastics.map((plastic)=>{ if(plastic.id === 12){return plastic.info}})}</div>
              <div className="speech-bubble fish3" >{this.props.plastics.map((plastic)=>{ if(plastic.id === 13){return plastic.info}})}</div>

          </>
        )
    }
}