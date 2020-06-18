import React from 'react'

export default class Ocean extends React.Component{

  render(){
    // Green seaweed with Rocks
    let greenRock=require("../img/grassrocks.png")
    let greenrocks= ['uno','dos','thirdgrass','fourthgrass','fifthgrass','sixthgrass']
       let firstpg= greenrocks.map((name)=>{
        return <img className={name} src={greenRock}/>
        })

        
    return(
       <>

        <div className="bubbles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {firstpg}
        <div className='sand'></div>
        </>

        
     
    )
}
}