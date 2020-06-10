import  React from 'react'
import CountUp from 'react-countup';

export default class PlasticStats extends React.Component{


   

    render(){
        
      let filtered = this.props.plastics.filter((plastic)=> {
        if(plastic.id === 5 || plastic.id===6 || plastic.id===7){
            return plastic
        }
      })
     
        return(
            <>
                 { filtered.map((plastic)=>{ return <>  <h1><CountUp delay={3} end={plastic.stats} /> {plastic.info}</h1><br/> </>})}
            </>
        )
    }
}