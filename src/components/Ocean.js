import React from 'react'

export default class Ocean extends React.Component{

  render(){
    // Green seaweed with Rocks
    let greenRock=require("../img/grassrocks.png")
    let greenrocks= ['uno','dos','thirdgrass','fourthgrass','fifthgrass','sixthgrass','seventhgrass','eighthgrass']
       let firstpg= greenrocks.map((name,index)=>{
        return <img key={index} className={name} src={greenRock} alt=''/>
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