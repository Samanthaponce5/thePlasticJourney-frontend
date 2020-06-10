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
export default class Journey extends React.Component{

    state={
        lastScroll:null,
        plastics:[],

        collect:true,
        collected:false,

     

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
                console.log(entry.target);
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
      }


      


listenScrollEvent=()=> {
    let{lastScroll}=this.state
    let wrapper = document.body.querySelector('.outer-wrapper')
    let currentScroll = wrapper.scrollTop
  this.setState({lastScroll:currentScroll})

    if(currentScroll > 0 && lastScroll <= currentScroll){
        document.body.getElementsByClassName("seaturtle")[0].style.transform = "rotateY(180deg)";;

    // console.log('Scroll down event detected!', wrapper.scrollTop);
    }else{
        document.body.getElementsByClassName("seaturtle")[0].style.transform = "rotateY(360deg)";;

        // console.log('Scroll up event detected!', wrapper.scrollTop);

    }
}

    handleClick=(e)=>{
        // e.target.style.opacity = "0";
        // this.setState({collect:false, collected:true})
        if(e.target.className==='plastic bottle' ||e.target.className=== "img b-bottle " ){
            console.log('plastic2')
            document.body.querySelector('.plastic.bottle').style.left = "92.3%";

            document.body.querySelector('.plastic.bottle').style.top = "62%";

        }
        if(e.target.className==='plastic can' || e.target.className === "img b-can"){
            console.log('plastic5',e.target)
            document.body.querySelector('.plastic.can').style.left = " 95%";

            document.body.querySelector('.plastic.can').style.top = "23%";

        }

        if(e.target.className==='plastic cups' ||e.target.className=== "img b-cup" ){
            console.log('plastic4',e.target)
            document.body.querySelector('.plastic.cups').style.left = "97.6%";

            document.body.querySelector('.plastic.cups').style.top = "62%";

        }

        if(e.target.className==='plastic straw' ||e.target.className=== "img b-straw" ){
            console.log('plastic3', e.target)
            document.body.querySelector('.plastic.straw').style.left = " 96.5%";

            document.body.querySelector('.plastic.straw').style.top = "34%";

        }

        if(e.target.className==='plastic bag'||e.target.className=== "img b-bag " ){
            console.log(e.target)
            document.body.querySelector('.plastic.bag').style.left = "93.3%";

            document.body.querySelector('.plastic.bag').style.top = " 34%";

        }
        

    }
    
    render(){
        let bottle=require("../img/bottle.png")
        let bag=require("../img/bag.png")
        let can=require("../img/can.png")
        let cup=require("../img/cup.png")
        let straw=require("../img/straw.png")
   
        return(
            <>
           
             <Turtle/>
            <div className='outer-wrapper' onScroll={this.listenScrollEvent}>
                <div className='wrapper'>

                   <div className='plastic bag' onClick={this.handleClick}>Plastic1<img className="img b-bag " src={bag} alt=""/></div><br/>
                <div className='plastic bottle' onClick={this.handleClick}>Plastic2 <img className="img b-bottle " src={bottle} alt=""/></div><br/>
                <div className='plastic straw' onClick={this.handleClick}>Plastic3 <img className="img b-straw" src={straw} alt=""/></div><br/>
                <div className='plastic cups' onClick={this.handleClick}>Plastic4 <img className="img b-cup" src={cup} alt=""/></div><br/>
                <div className='plastic can'onClick={this.handleClick}>Plastic5 <img className="img b-can" src={can} alt=""/></div>
                   
                    <div className='slide one'><h1>slide 1</h1> <Jelly/><Ocean/></div>
                    <hr/>

                    <div className='slide two'><h1>slide 2</h1><PlasticStats plastics={this.state.plastics}/>  <Ocean/></div>
                    <hr/>
                    <div className='slide three'><h1>slide 3</h1>  <Ocean/></div>
                    <hr/>
                    <div className='slide four'><h1>slide 4</h1><Charts/> <Ocean/></div>
                    <hr/>
                    <div className='slide five'><h1>slide 5</h1>  <Ocean/></div>
                    <hr/>
                    <div className='slide six'><h1>slide 6</h1>  </div>
                    

                </div>
            </div>
            </>
        )
    }
}




{/* <div className='plastic bag' onClick={this.handleClick}>Plastic1</div><br/>
<div className='plastic bottle' onClick={this.handleClick}>Plastic2</div><br/>
<div className='plastic straw' onClick={this.handleClick}>Plastic3</div><br/>
<div className='plastic cups' onClick={this.handleClick}>Plastic4</div><br/>
<div className='plastic microBeads'onClick={this.handleClick}>Plastic5</div> */}
