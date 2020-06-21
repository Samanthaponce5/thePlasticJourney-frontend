import React from 'react'

export default class Plants extends React.Component{

    render(){
        let singleRock=require("../img/singlerock.png")
        let seaRock=require("../img/searock.png")
        let bluecoral=require("../img/bluecoral.png")
        let greyfish=< img className='fishy' src={require("../img/greyFish.png")} alt=''/>     
        let pebble=require('../img/pebble.png')
        let crab=<img className='crab' src={require("../img/crab.gif")} alt=''/>
        let three=require('../img/three.png')
        let nobttm = require('../img/nobottom.png')
        let leaves = ['seaone','seatwo', 'seathree']
        let threesingles = ['single', 'single2', 'single3', 'single4']
        let thethrees = threesingles.map((name,index)=><img key={index} className={name} src={singleRock} alt=''/>)
        let allthree = leaves.map((name,index)=><img key={index} className={name} src={three} alt=''/>)
        let pebbles = ['p','e','b','v','l','i','s']
        let allpebbles = pebbles.map((name,index)=><img key={index} className={name} src={pebble} alt=''/>)
        let nobottomr = ['sing1','sing4']
        let sings = nobottomr.map((name,index)=><img key={index} className={name} src={nobttm} alt=''/>)
        let seaRocks=["frock","srock","trock",'fourthrock','fifthrock',"sixrock"]
        let seaRocksthree = seaRocks.map((name,index)=> <img key={index} className={name} src={seaRock} alt=''/>)
        let baginfo = this.props.plastics.map((plastic)=>{if(plastic.name==='Plastic bag info'){
        return<h1 className='bageffect'>{plastic.info}</h1>
        }})
   
       let slide2 = < img className='fam' src={require("../img/fam.gif")} alt=''/>
       let slide22 =< img className='fam triple'  src={require("../img/fam.gif")} alt=''/>
       let grey =  < img className='squid' src={require("../img/greyFish.png")} alt=''/>
        let blue= ['unoazul','dosazul','tresazul']
        let bluecorals= blue.map((name,index)=>{
            return <img key={index} className={name} src={bluecoral} alt=''/>
        })
        return(
            <>
            {grey} {slide2} {slide22} {greyfish} {allthree}{crab} {bluecorals} {seaRocksthree} {sings} {thethrees}{allpebbles}
            
            </>
        )
    }
}