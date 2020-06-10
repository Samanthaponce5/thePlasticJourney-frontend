import React from 'react'

export default class Charts extends React.Component{

    

 render(){
    let filter = this.props.plastics.filter((plastic)=> {
        if(plastic.id ===1 || plastic.id===2 || plastic.id===3 || plastic.id===4){
            return plastic
        }
      })
let mapped = filter.map((plastic)=>  plastic.stats)
  
    return(
        <>
   
<div className="card1">
  <div className="donut-chart ">
    <div className="quad1 one"></div>
    <div className="quad1 two"></div>
    <div className="quad1 three"></div>
    <div className="quad1 four"></div>
    <div className="quad1 top"></div>
    <div className="chart-center1">{mapped[0]}%</div>
  </div>
</div>



<div className="card3">
  <div className="donut-chart ">
    <div className="quad3 one"></div>
    <div className="quad3 two"></div>
    <div className="quad3 three"></div>
    <div className="quad3 four"></div>
    <div className="quad3 top"></div>
    <div className="chart-center3">{mapped[1]}%</div>
  </div>
</div>




<div className="card4">
  <div className="donut-chart ">
    <div className="quad4 one"></div>
    <div className="quad4 two"></div>
    <div className="quad4 three"></div>
    <div className="quad4 four"></div>
    <div className="quad4 top"></div>
    <div className="chart-center4">{mapped[2]}%</div>
  </div>
</div>

<div className="card2">
  <div className="donut-chart ">
    <div className="quad2 one"></div>
    <div className="quad2 two"></div>
    <div className="quad2 three"></div>
    <div className="quad2 four"></div>
    <div className="quad2 top"></div>
    <div className="chart-center2">{mapped[3]}%</div>
  </div>
</div>


        </>
    )



    
}
}