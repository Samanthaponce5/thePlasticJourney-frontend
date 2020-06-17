import React from 'react'
import '../Jelly.css'


export default class Jelly extends React.Component{
    handleMouseEnter=(e)=>{
      
        if( e.target.className=== 'jellyletters numerodos' ){
            // document.body.cursor = 'pointer'
            document.body.querySelector('.fact.facttwo').style.opacity='1'

          document.body.querySelector('.hover').style.opacity='0'
        }
        if(e.target.className==='jellyletters numerotres'){
          document.body.querySelector('.fact.factthree').style.opacity='1'
          document.body.querySelector('.hover').style.opacity='0'

        }
        if(e.target.className==='jellyletters numerouno'){
            // document.body.querySelector('#containers3').style.animation='paused'
          document.body.querySelector('.fact.factone').style.opacity='1'
          document.body.querySelector('.hover').style.opacity='0'

        }
        
      }
    
      handleMouseOut=(e)=>{
       
        if( e.target.className=== 'jellyletters numerodos' ){
            // document.body.cursor = 'pointer'
          document.body.querySelector('.fact.facttwo').style.opacity='0'
        }
        if(e.target.className==='jellyletters numerotres'){
          document.body.querySelector('.fact.factthree').style.opacity='0'
        }
        if(e.target.className==='jellyletters numerouno'){
            // document.body.querySelector('#containers3').style.animation='containers3 9s linear infinite'

          document.body.querySelector('.fact.factone').style.opacity='0'
        }
        
      }
    // Plastic bag info1
    render(){
        
        let fact1;
        let fact2;
        let fact3;
        this.props.plastics.map((plastic)=>{if(plastic.name==='Plastic bag info1'){
            fact1 = plastic.info
            }else if(plastic.name==='Plastic bag info2'){
                fact2 = plastic.info
            }else if(plastic.name==='Plastic bag info3'){
                fact3 = plastic.info
            }
        })
    return(
        <>
        <h3 className='hover'>Hover Over us!</h3>
        <div  id="containers" >
    <div className="fish f1">
        <div  className="bell " ><h1 onMouseEnter={this.handleMouseEnter} onMouseOut={this.handleMouseOut} className='jellyletters numerodos'>Fact 2</h1></div>
        <div className="tentacle ones"></div>
        <div className="tentacle twos"></div>
        <div className="tentacle threes"></div>
        <div className="tentacle fours"></div>
    </div>
  </div>
  <h1 className='fact facttwo'>{fact2}</h1>


<div id="containers2">
<div className="fish2 f1 ">
    <div  className="bell "><h1 onMouseEnter={this.handleMouseEnter} onMouseOut={this.handleMouseOut} className='jellyletters numerotres'>Fact 3</h1></div>
    <div className="tentacle ones"></div>
    <div className="tentacle twos"></div>
    <div className="tentacle threes"></div>
    <div className="tentacle fours"></div>
</div>
</div>
<h1 className='fact factthree'>{fact3}</h1>

<div id="containers3">
<div className="fish3 f1 ">
    <div  className="bell "><h1 onMouseEnter={this.handleMouseEnter} onMouseOut={this.handleMouseOut} className='jellyletters numerouno'>Fact 1</h1></div>
    <div className="tentacle ones"></div>
    <div className="tentacle twos"></div>
    <div className="tentacle threes"></div>
    <div className="tentacle fours"></div>
</div>

</div>
    <h1 className='fact factone'>{fact1}</h1>
</>
    )
}
}