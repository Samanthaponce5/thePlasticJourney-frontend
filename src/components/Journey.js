import React from 'react'
import '../Turtle.css'
import '../Journey.css'
import '../Chart.css'
import '../Ocean.css'
import '../PlasticParticles.css'
import Ocean from './Ocean'
import Turtle from './Turtle'
import Charts from './Charts'
import Jelly from './Jelly'
import PlasticStats from './PlasticStats'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Intro from './Intro'
import Collected from './Collected'


export default class Journey extends React.Component{

    state={
        lastScroll:null,
        plastics:[],
        comparePlastics:[],
        collect:true,
        collected:0,
        modalIsOpen:false,
        mapPlastic:[]
    
        
     

    }
  

    handleClose=()=>{
this.setState({modalIsOpen:false})
    }

    componentDidMount(){
        let options = {
            // threshold:.25,
            //  rootMargin: "-150px"
        
        }
        let sections=document.querySelectorAll('.donut-chart')
        let observer=  new IntersectionObserver(function(entries, observer){
            entries.forEach(entry=>{
                if(!entry.isIntersecting){
                    return
                }
                // console.log(entry.target);
                entry.target.classList.toggle("chart3");
                observer.unobserve(entry.target)

            })
        },options)
    
        sections.forEach(section=>{
            observer.observe(section)
        })


        fetch('http://localhost:3000/plastics')
        .then(resp=>resp.json())
        .then((plastics)=> this.setState({plastics}))
        .then(
            fetch('http://localhost:3000/compare_plastics')
            .then((dta)=>dta.json())
            .then((plastic)=>this.setState({comparePlastics:plastic}))
        )
      }


      


listenScrollEvent=()=> {
    let{lastScroll}=this.state
    let wrapper = document.body.querySelector('.outer-wrapper')
    let currentScroll = wrapper.scrollTop
  this.setState({lastScroll:currentScroll})

    if(currentScroll > 0 && lastScroll <= currentScroll){
        document.body.getElementsByClassName("seaturtle")[0].style.transform = "rotateY(180deg)";;

    // console.log('Scroll down event detected!', wrapper.scrollTop);
    }else {
        document.body.getElementsByClassName("seaturtle")[0].style.transform = "rotateY(360deg)";;

        // console.log('Scroll up event detected!', wrapper.scrollTop);
    }
    if(currentScroll> 50){
        // console.log('greater')
        document.body.querySelector('.blob').style.opacity = '0'
        document.body.querySelector('.bubbletext').style.opacity = '0'
    }else{
         document.body.querySelector('.blob').style.opacity = '1'
         document.body.querySelector('.bubbletext').style.opacity = '1'

}
if(currentScroll === 0 ){
    document.body.getElementsByClassName("seaturtle")[0].style.transform = "rotateY(180deg)";;

}


}
handleClickfeedback=()=>{
    // console.log(this.props)
    this.props.routerProps.history.push('/feedback')
}
    handleClick=(e)=>{
        const{ collected}=this.state
        // e.target.style.opacity = "0";
        // this.setState({collect:false, collected:true})
        if(e.target.className==='plastic bottle' ||e.target.className=== "img b-bottle " ){
            // console.log('plastic2')
            document.body.querySelector('.firstinst').style.opacity='0'
            document.body.querySelector('.plastic.bottle').style.left = "92.3%";
            document.body.querySelector('.plastic.bottle').style.top = "62%";
            document.body.querySelector('.plastic.bottle').classList.add('afterBottle')
            document.body.querySelector('.img.b-bottle').classList.add('afterBottleImg')
            this.setState({collected:collected+1})

        }
        if(e.target.className==='plastic can' || e.target.className === "img b-can"){
            // console.log('plastic5',e.target)
            document.body.querySelector('.plastic.can').style.left = " 95%";
            document.body.querySelector('.plastic.can').style.top = "23%";

            document.body.querySelector('.plastic.can').classList.add('afterCan')
            document.body.querySelector('.img.b-can').classList.add('afterCanImg')
            this.setState({collected:collected+1})

        }

        if(e.target.className==='plastic cups' ||e.target.className=== "img b-cup" ){
            // console.log('plastic4',e.target)
            document.body.querySelector('.plastic.cups').style.left = "97.6%";
            document.body.querySelector('.plastic.cups').style.top = "62%";

            document.body.querySelector('.plastic.cups').classList.add('afterCup')
            document.body.querySelector('.img.b-cup').classList.add('afterCupImg')
            this.setState({collected:collected+1})

        }

        if(e.target.className==='plastic straw' ||e.target.className === "img b-straw" ){
            // console.log('plastic3', e.target)
            document.body.querySelector('.plastic.straw').style.left = " 96.5%";
            document.body.querySelector('.plastic.straw').style.top = "34%";

            document.body.querySelector('.plastic.straw').classList.add('afterStraw')
            document.body.querySelector('.img.b-straw').classList.add('afterStrawImg')
            this.setState({collected:collected+1})

        }

        if(e.target.className==='plastic bag'|| e.target.className=== "img b-bag " ){
            // console.log(e.target)
            document.body.querySelector('.plastic.bag').style.left = "93.3%";
            document.body.querySelector('.plastic.bag').style.top = " 34%";

            document.body.querySelector('.plastic.bag').classList.add('afterBag')
            document.body.querySelector('.img.b-bag').classList.add('afterBagImg')
            this.setState({collected:collected+1})

        }
        

    }

    handleMousedown=(e)=>{
         if(e.target.className==='plastic bottle afterBottle' ||e.target.className=== "img b-bottle afterBottleImg" ){
            this.setState({modalIsOpen:true})
           this.state.comparePlastics.filter(plastic=> plastic.id===3? this.setState({mapPlastic:plastic}):null)
          
        }

        if(e.target.className==='plastic bag afterBag' ||e.target.className=== "img b-bag afterBagImg" ){
            this.setState({modalIsOpen:true})
            this.state.comparePlastics.filter(plastic=> plastic.id===2? this.setState({mapPlastic:plastic}):null)

        }

        if(e.target.className==='plastic straw afterStraw' ||e.target.className=== "img b-straw afterStrawImg" ){
            this.setState({modalIsOpen:true})
            this.state.comparePlastics.filter(plastic=> plastic.id===1? this.setState({mapPlastic:plastic}):null)

        }

        if(e.target.className==='plastic cups afterCup' ||e.target.className=== "img b-cup afterCupImg" ){
            this.setState({modalIsOpen:true})
            this.state.comparePlastics.filter(plastic=> plastic.id===4? this.setState({mapPlastic:plastic}):null)

        }

        if(e.target.className==='plastic can afterCan' ||e.target.className=== "img b-can afterCanImg" ){
            this.setState({modalIsOpen:true})
            this.state.comparePlastics.filter(plastic=> plastic.id===5? this.setState({mapPlastic:plastic}):null)

            // this.state.comparePlastics.filter(plastic=> plastic.id===3? this.setState({mapPlastic:plastic}):null)

        }
    }

 
 
    render(){
        let plasticInfo=this.state.mapPlastic.plasticInfo + ""
        let alternativeInfo=this.state.mapPlastic.alternativeInfo + ""
        let singleRock=require("../img/singlerock.png")
        let greenRock=require("../img/grassrocks.png")
        let seaRock=require("../img/searock.png")
        let bluecoral=require("../img/bluecoral.png")
        let greyfish=< img className='fishy' src={require("../img/greyFish.png")}/>
        let bottle=require("../img/bottle.png")
        let bag=require("../img/bag.png")
        let can=require("../img/can.png")
        let cup=require("../img/cup.png")
        let straw=require("../img/straw.png")
        let pebble=require('../img/pebble.png')
        let crab=<img className='crab' src={require("../img/crab.gif")}/>
        let three=require('../img/three.png')
        let nobttm = require('../img/nobottom.png')
        let leaves = ['seaone','seatwo', 'seathree']
        let threesingles = ['single', 'single2', 'single3', 'single4']
        let thethrees = threesingles.map((name)=><img className={name} src={singleRock}/>)
        let allthree = leaves.map((name)=><img className={name} src={three}/>)
let pebbles = ['p','e','b','v','l','i','s']
let allpebbles = pebbles.map((name)=><img className={name} src={pebble}/>)
            let nobottomr = ['sing1','sing2','sing3','sing4']
            let sings = nobottomr.map((name)=><img className={name} src={nobttm}/>)
        let seaRocks=["frock","srock","trock",'fourthrock','fifthrock',"sixrock"]
        let seaRocksthree = seaRocks.map((name)=> <img className={name} src={seaRock}/>)
        let baginfo = this.state.plastics.map((plastic)=>{if(plastic.name==='Plastic bag info'){
        return<h1 className='bageffect'>{plastic.info}</h1>
        }})
        let turtleStyle=document.body.querySelector('.seaturtle')
        //Style isn't working??????
        let greenrocks= ['uno','dos','thirdgrass','fourthgrass','fifthgrass','sixthgrass']
       let firstpg= greenrocks.map((name)=>{
        return <img className={name} src={greenRock}/>
        })
        let blue= ['unoazul','dosazul','tresazul']

        let bluecorals= blue.map((name)=>{
            return <img className={name} src={bluecoral}/>
        })

        return(
            <>
             <Modal overlayClassName="Overlay" className="Modal" isOpen={this.state.modalIsOpen} onRequestClose={this.handleClose}>
                      
                       <h2 className='plasticName'>{this.state.mapPlastic.plastic}</h2>

            <div className='main'>
                <div className='inner'>
        <div className='plasticInfo'><img className="img b-bottle " src={bottle} alt=""/> {plasticInfo.split("/").map(plastic=><li>{plastic}</li>)}</div>
        <div className="vl"></div>
        <div className='alternativeInfo'><img className="img b-bag " src={bag} alt=""/> { alternativeInfo.split("/").map(plastic=><li>{plastic}</li>)}</div>
        </div>
        </div>


                       <div>
                           <button className='modalbtn' onClick={this.handleClose}>X</button>
                       </div>
                      </Modal>
                
                   <Collected {...this.state}/>  
                 
                        

                <Turtle/>

            <div className='sand'></div>
            <div className='outer-wrapper' onScroll={this.listenScrollEvent}>
                <div className='wrapper'>
            
                <div className='plastic bag'onMouseDown={this.handleMousedown} onClick={this.handleClick}><img className="img b-bag " src={bag} alt=""/></div><br/>
                <div className='plastic bottle' onMouseDown={this.handleMousedown} onClick={this.handleClick}>  <img className="img b-bottle " src={bottle} alt=""/></div><br/>
                <div className='plastic straw' onMouseDown={this.handleMousedown} onClick={this.handleClick}>  <img className="img b-straw" src={straw} alt=""/></div><br/>
                <div className='plastic cups' onMouseDown={this.handleMousedown} onClick={this.handleClick}>  <img className="img b-cup" src={cup} alt=""/></div><br/>
                <div className='plastic can'onMouseDown={this.handleMousedown} onClick={this.handleClick}> <img className="img b-can" src={can} alt=""/></div>
                   
                    <div className='slide one'><Intro name={this.props.name}/> {firstpg} {greyfish} {thethrees}{allpebbles}<Ocean/></div>
                    {/* <hr/> */}

        <div className='slide two'><p className='firstinst'>collect me!→</p> {allthree}{crab} {bluecorals} {seaRocksthree} <PlasticStats plastics={this.state.plastics}/>  <Ocean/></div>
                    {/* <hr/> */}
                    <div className='slide three'> <Jelly {...this.state}/>   <Ocean/></div>
                    {/* <hr/> */}
                    <div className='slide four'><Charts  {...this.state} /> <Ocean/></div>
                    {/* <hr/> */}
                    <div className='slide five'> section 5 <Ocean/></div>
                    {/* <hr/> */}
                    <div className='slide six'> {sings} <button onClick={this.handleClickfeedback} >Continue</button></div>
                    

                </div>
            </div>
            </>
        )
    }
}




