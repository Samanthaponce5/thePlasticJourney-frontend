import  React from 'react'
import CountUp from 'react-countup';

export default class PlasticStats extends React.Component{

  handleMouseDown(e){
    if(e.target.className === 'statstar PlasticInfo5'){
      document.body.querySelector('.textPlasticInfo6').style.opacity = 1
    }
    if(e.target.className === 'statstar PlasticInfo6'){
      document.body.querySelector('.textPlasticInfo7').style.opacity = 1
    }
  }
   

    render(){
        
      let filtered = this.props.plastics.filter((plastic)=> {
        if(plastic.id === 6 || plastic.id===7 || plastic.id===8){
            return plastic
        }
      })
     
        return(
            <>
                 { filtered.map((plastic,index)=>{ return  <h2 key={index} className={'all' +' '+'text' + plastic.name}><CountUp  end={plastic.stats}>{({ countUpRef, start }) => (
    <div>
      <span  ref={countUpRef} />
      <img  className={'statstar' + ' ' + plastic.name} src={require("../img/starFish.png")} onMouseDown={this.handleMouseDown} onClick={start} alt=''/> 
    </div>
  )}</CountUp> {plastic.info}</h2> })}
            </>
        )
    }
}

