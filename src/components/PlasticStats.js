import  React from 'react'
import CountUp from 'react-countup';

export default class PlasticStats extends React.Component{


   

    render(){
        
      
        return(
            <>
                 { this.props.plastics.map((plastic)=>{ return <>  <h3><CountUp delay={1} end={plastic.stats} /> {plastic.info}</h3><br/> </>})}
            </>
        )
    }
}