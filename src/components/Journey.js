import React from 'react'
import Ocean from './Ocean'
import Turtle from './Turtle'
import Charts from './Charts'
import Jelly from './Jelly'
import PlasticStats from './PlasticStats'
import Intro from './Intro'
import Collected from './Collected'
import Fishes from './Fishes'
import Lastpgmessage from './Lastpgmessage'
import Plants from './Plants'
import Modals from './Modals'


export default class Journey extends React.Component{

    state={
        lastScroll:null,
        plastics:[],
        comparePlastics:[],
        collected:0,
        modalIsOpen:false,
        mapPlastic:[]
    }
  

    handleClose=()=>{
    this.setState({modalIsOpen:false})
    }

    componentDidMount(){
        let options = {
            // threshold:1
            //  rootMargin: "-150px"
        }

        let sections=document.querySelectorAll('.donut-chart')
        let observer=  new IntersectionObserver(function(entries, observer){
            entries.forEach(entry=>{
                if(!entry.isIntersecting){
                    return
                }
                entry.target.classList.toggle("chart3");
                observer.unobserve(entry.target)

            })
        },options)
    
        sections.forEach(section=>{
            observer.observe(section)
        })


        fetch('https://jacksjourney-backend.herokuapp.com/plastics')
        .then(resp=>resp.json())
        .then((plastics)=> this.setState({plastics}))
        .then(
            fetch('https://jacksjourney-backend.herokuapp.com/compare_plastics')
            .then((dta)=>dta.json())
            .then((plastic)=>this.setState({comparePlastics:plastic}))
        )
      }


      


listenScrollEvent=()=> {
    let{lastScroll}=this.state
    let wrapper = document.body.querySelector('.outer-wrapper')
    let currentScroll = wrapper.scrollTop
    let maxScrollTop = wrapper.scrollHeight - wrapper.offsetHeight
    this.setState({lastScroll:currentScroll})
    if(currentScroll > 0 && lastScroll <= currentScroll){
        document.body.getElementsByClassName("seaturtle")[0].style.transform = "rotateY(180deg)";;

    }else {
        document.body.getElementsByClassName("seaturtle")[0].style.transform = "rotateY(360deg)";;
    }
    if(currentScroll> 50){
        document.body.querySelector('.blob').style.opacity = '0'
        document.body.querySelector('.bubbletext').style.opacity = '0'
    }else{
         document.body.querySelector('.blob').style.opacity = '1'
         document.body.querySelector('.bubbletext').style.opacity = '1'

    }
    if(currentScroll === 0 ){
    document.body.getElementsByClassName("seaturtle")[0].style.transform = "rotateY(180deg)";

    }
    if(currentScroll == maxScrollTop){
    document.body.getElementsByClassName("lastmessage")[0].style.opacity = "1";
    document.body.querySelector(".lastmessage.pa2").style.opacity = "1";
    document.body.querySelector(".lastmessage.pa1").style.opacity = "1";
    document.body.querySelector(".collected2").style.opacity = "0";
    document.body.querySelector(".collected").style.left = "36%";
    document.body.querySelector(".collected").style.top = "4.7%";
    }else{
    document.body.getElementsByClassName("lastmessage")[0].style.opacity = "0";
    document.body.querySelector(".lastmessage.pa2").style.opacity = "0";
    document.body.querySelector(".lastmessage.pa1").style.opacity = "0";
    document.body.querySelector(".collected2").style.opacity = "1";
    document.body.querySelector(".collected").style.left = "94%";
    document.body.querySelector(".collected").style.top = "8%";
    }
}


    handleClickfeedback=()=>{
        this.props.routerProps.history.push('/feedback')
    }

    handleClick=(e)=>{
        const{ collected}=this.state
       
        if(e.target.className==='plastic bottle' ||e.target.className=== "img b-bottle " ){
            document.body.querySelector('.collectfirstplastic').style.opacity='0'
            document.body.querySelector('.plastic.bottle').style.left = "92.3%";
            document.body.querySelector('.plastic.bottle').style.top = "62%";
            document.body.querySelector('.plastic.bottle').classList.add('afterBottle')
            document.body.querySelector('.img.b-bottle').classList.add('afterBottleImg')
            this.setState({collected:collected+1})
        }

        if(e.target.className==='plastic can' || e.target.className === "img b-can"){
            document.body.querySelector('.plastic.can').style.left = " 95%";
            document.body.querySelector('.plastic.can').style.top = "23%";

            document.body.querySelector('.plastic.can').classList.add('afterCan')
            document.body.querySelector('.img.b-can').classList.add('afterCanImg')
            this.setState({collected:collected+1})
        }

        if(e.target.className==='plastic cups' ||e.target.className=== "img b-cup" ){
            document.body.querySelector('.plastic.cups').style.left = "97.6%";
            document.body.querySelector('.plastic.cups').style.top = "62%";

            document.body.querySelector('.plastic.cups').classList.add('afterCup')
            document.body.querySelector('.img.b-cup').classList.add('afterCupImg')
            this.setState({collected:collected+1})
        }

        if(e.target.className==='plastic straw' ||e.target.className === "img b-straw" ){
            document.body.querySelector('.plastic.straw').style.left = " 96.5%";
            document.body.querySelector('.plastic.straw').style.top = "34%";
            document.body.querySelector('.plastic.straw').classList.add('afterStraw')
            document.body.querySelector('.img.b-straw').classList.add('afterStrawImg')
            this.setState({collected:collected+1})
        }

        if(e.target.className==='plastic bag'|| e.target.className=== "img b-bag " ){
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
                <Modals {...this.state} handleClose={this.handleClose}/>
                <Collected {...this.state}/>  
                <Turtle/>
            <div className='outer-wrapper' onScroll={this.listenScrollEvent}>
                <div className='wrapper'>
                    <Plants {...this.state}/>
                    <div className='plastic bag'onMouseDown={this.handleMousedown} onClick={this.handleClick}><img className="img b-bag " src={bag} alt=""/></div><br/>
                    <div className='plastic bottle' onMouseDown={this.handleMousedown} onClick={this.handleClick}>  <img className="img b-bottle " src={bottle} alt=""/></div><br/>
                    <div className='plastic straw' onMouseDown={this.handleMousedown} onClick={this.handleClick}>  <img className="img b-straw" src={straw} alt=""/></div><br/>
                    <div className='plastic cups' onMouseDown={this.handleMousedown} onClick={this.handleClick}>  <img className="img b-cup" src={cup} alt=""/></div><br/>
                    <div className='plastic can'onMouseDown={this.handleMousedown} onClick={this.handleClick}> <img className="img b-can" src={can} alt=""/></div>
                    <div className='slide one'><Intro name={this.props.name}/>  <Ocean/></div>
                    <div className='slide two'><p className='collectfirstplastic'>collect me!→</p> <PlasticStats plastics={this.state.plastics}/>  <Ocean/></div>
                    <div className='slide three'> <Jelly {...this.state}/>   <Ocean/></div>
                    <div className='slide four'><Charts  {...this.state} /> <Ocean/></div>
                    <div className='slide five'> <Fishes {...this.state}/>  <Ocean/></div>
                    < img className='fishy twin' src={require("../img/greyFish.png")} alt=''/>
                    <div className='slide six'><Lastpgmessage name={this.props.name} /> </div>
                    {/* <button onClick={this.handleClickfeedback} >Continue</button> */}
                </div>
            </div>
        </>
        )
    }
}


