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


export default class Journey extends React.Component{

    state={
        lastScroll:null,
        plastics:[],
        comparePlastics:[],
        collect:true,
        collected:false,
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
            document.body.querySelector('.plastic.bottle').classList.add('afterBottle')
            document.body.querySelector('.img.b-bottle').classList.add('afterBottleImg')


        }
        if(e.target.className==='plastic can' || e.target.className === "img b-can"){
            console.log('plastic5',e.target)
            document.body.querySelector('.plastic.can').style.left = " 95%";
            document.body.querySelector('.plastic.can').style.top = "23%";

            document.body.querySelector('.plastic.can').classList.add('afterCan')
            document.body.querySelector('.img.b-can').classList.add('afterCanImg')

        }

        if(e.target.className==='plastic cups' ||e.target.className=== "img b-cup" ){
            console.log('plastic4',e.target)
            document.body.querySelector('.plastic.cups').style.left = "97.6%";
            document.body.querySelector('.plastic.cups').style.top = "62%";

            document.body.querySelector('.plastic.cups').classList.add('afterCup')
            document.body.querySelector('.img.b-cup').classList.add('afterCupImg')

        }

        if(e.target.className==='plastic straw' ||e.target.className === "img b-straw" ){
            console.log('plastic3', e.target)
            document.body.querySelector('.plastic.straw').style.left = " 96.5%";
            document.body.querySelector('.plastic.straw').style.top = "34%";

            document.body.querySelector('.plastic.straw').classList.add('afterStraw')
            document.body.querySelector('.img.b-straw').classList.add('afterStrawImg')

        }

        if(e.target.className==='plastic bag'|| e.target.className=== "img b-bag " ){
            console.log(e.target)
            document.body.querySelector('.plastic.bag').style.left = "93.3%";
            document.body.querySelector('.plastic.bag').style.top = " 34%";

            document.body.querySelector('.plastic.bag').classList.add('afterBag')
            document.body.querySelector('.img.b-bag').classList.add('afterBagImg')

        }
        

    }

    handleHover=(e)=>{
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
            // this.state.comparePlastics.filter(plastic=> plastic.id===3? this.setState({mapPlastic:plastic}):null)

        }
    }
 
    render(){
        console.log(this.state.mapPlastic.name
            )
        let bottle=require("../img/bottle.png")
        let bag=require("../img/bag.png")
        let can=require("../img/can.png")
        let cup=require("../img/cup.png")
        let straw=require("../img/straw.png")
        console.log('compare',this.state.comparePlastics)
        return(
            <>
             <Modal  className="Modal" isOpen={this.state.modalIsOpen} onRequestClose={this.handleClose}>
                      
                       <h2>{this.state.mapPlastic.plastic}</h2>
                       <p>{this.state.mapPlastic.info1}</p>
                       <div>
                           <button onClick={this.handleClose}>Close</button>
                       </div>
                      </Modal>

                {this.state.modalIsOpen ? null:<Turtle/>}
            <div className='outer-wrapper' onScroll={this.listenScrollEvent}>
                <div className='wrapper'>

                <div className='plastic bag'onMouseDown={this.handleHover} onClick={this.handleClick}><img className="img b-bag " src={bag} alt=""/></div><br/>
                <div className='plastic bottle' onMouseDown={this.handleHover} onClick={this.handleClick}>  <img className="img b-bottle " src={bottle} alt=""/></div><br/>
                <div className='plastic straw' onMouseDown={this.handleHover} onClick={this.handleClick}>  <img className="img b-straw" src={straw} alt=""/></div><br/>
                <div className='plastic cups' onMouseDown={this.handleHover} onClick={this.handleClick}>  <img className="img b-cup" src={cup} alt=""/></div><br/>
                <div className='plastic can'onMouseDown={this.handleHover} onClick={this.handleClick}> <img className="img b-can" src={can} alt=""/></div>
                   
                    <div className='slide one'><h1>slide 1</h1><Ocean/></div>
                    <hr/>

                    <div className='slide two'><h1>slide 2</h1><PlasticStats plastics={this.state.plastics}/>  <Ocean/></div>
                    <hr/>
                    <div className='slide three'><h1>slide 3</h1> <Jelly/>   <Ocean/></div>
                    <hr/>
                    <div className='slide four'><h1>slide 4</h1><Charts {...this.state} /> <Ocean/></div>
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
