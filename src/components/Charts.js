import React from 'react'

export default class Charts extends React.Component{

  handleMouseEnter=(e)=>{
    if(e.target.className==='chart-center1'){
      document.body.querySelector('.plasinfo.part1').style.opacity='1'
      document.body.querySelector('.hover.char').style.opacity='0'

    }
    if(e.target.className==='chart-center3'){
      document.body.querySelector('.plasinfo.part2').style.opacity='1'
      document.body.querySelector('.hover.char').style.opacity='0'

    }
    if(e.target.className==='chart-center4'){
      document.body.querySelector('.plasinfo.part3').style.opacity='1'
      document.body.querySelector('.hover.char').style.opacity='0'

    }
    if(e.target.className==='chart-center2'){
      document.body.querySelector('.plasinfo.part4').style.opacity='1'
      document.body.querySelector('.hover.char').style.opacity='0'

    }
  }

  handleMouseOut=(e)=>{
    if(e.target.className==='chart-center1'){
      document.body.querySelector('.plasinfo.part1').style.opacity='0'
    }
    if(e.target.className==='chart-center3'){
      document.body.querySelector('.plasinfo.part2').style.opacity='0'
    }
    if(e.target.className==='chart-center4'){
      document.body.querySelector('.plasinfo.part3').style.opacity='0'
    }
    if(e.target.className==='chart-center2'){
      document.body.querySelector('.plasinfo.part4').style.opacity='0'
    }
  }

 render(){
  let inf;
  let inf1;
  let inf2;
  let inf3;

    return(
        <>
 
 <h3 className='hover char'>Hover Over us!</h3>

 <div className="card1">
  <div className="donut-chart f">
    <div className="quad1 one"></div>
    <div className="quad1 two"></div>
    <div className="quad1 three"></div>
    <div className="quad1 four"></div>
    <div className="quad1 top"></div>
    {this.props.plastics.map((plastic)=> {
       if(plastic.id ===1){
         {inf=plastic.stats +'%' + ' ' + plastic.info}
         return(<><div onMouseOut={this.handleMouseOut} onMouseEnter={this.handleMouseEnter} className="chart-center1">{plastic.stats}%</div> 
         </>)
     }})}
  </div>
</div>
    <h1 className='plasinfo part1'>{inf}</h1>



<div className="card3">
  <div className="donut-chart s">
    <div className="quad3 one"></div>
    <div className="quad3 two"></div>
    <div className="quad3 three"></div>
    <div className="quad3 four"></div>
    <div className="quad3 top"></div>
    {this.props.plastics.map((plastic)=> {
       if(plastic.id ===2){
        {inf1=plastic.stats +'%' + ' ' + plastic.info}

         return <div className="chart-center3" onMouseOut={this.handleMouseOut} onMouseEnter={this.handleMouseEnter}>{plastic.stats}%</div>
     }})}
  </div>
</div>
<h1 className='plasinfo part2'>{inf1}</h1>



<div className="card4">
  <div className="donut-chart t">
    <div className="quad4 one"></div>
    <div className="quad4 two"></div>
    <div className="quad4 three"></div>
    <div className="quad4 four"></div>
    <div className="quad4 top"></div>
    {this.props.plastics.map((plastic)=> {
       if(plastic.id ===3){
        {inf2=plastic.stats +'%' + ' ' + plastic.info}
         return <div className="chart-center4" onMouseOut={this.handleMouseOut} onMouseEnter={this.handleMouseEnter}>{plastic.stats}%</div>
     }})}
  </div>
</div>
<h1 className='plasinfo part3'>{inf2}</h1>

<div className="card2">
  <div className="donut-chart fo">
    <div className="quad2 one"></div>
    <div className="quad2 two"></div>
    <div className="quad2 three"></div>
    <div className="quad2 four"></div>
    <div className="quad2 top"></div>
    {this.props.plastics.map((plastic)=> {
       if(plastic.id ===4){
        {inf3='Only' + ' ' + plastic.stats +'%' + ' ' + plastic.info}
         return <div className="chart-center2" onMouseOut={this.handleMouseOut} onMouseEnter={this.handleMouseEnter}>{plastic.stats}%</div>
     }})}
  </div>
</div>
<h1 className='plasinfo part4'>{inf3}</h1>
        </>
    )



    
}
}