import React from 'react'
import '../Turtle.css'
import '../Journey.css'
import '../Chart.css'
import '../Ocean.css'
import Ocean from './Ocean'

import Turtle from './Turtle'
import Charts from './Charts'
import Jelly from './Jelly'
export default class Journey extends React.Component{

    state={
        lastScroll:null
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
      }
      


listenScrollEvent=()=> {
    let{lastScroll}=this.state
    let wrapper = document.body.querySelector('.outer-wrapper')
    let currentScroll = wrapper.scrollTop
  this.setState({lastScroll:currentScroll})

    if(currentScroll > 0 && lastScroll <= currentScroll){
        document.body.getElementsByClassName("seaturtle")[0].style.transform = "rotateY(180deg)";;

    console.log('Scroll down event detected!', wrapper.scrollTop);
    }else{
        document.body.getElementsByClassName("seaturtle")[0].style.transform = "rotateY(360deg)";;

        console.log('Scroll up event detected!', wrapper.scrollTop);

    }
}
    render(){
        // console.log(this.sections)
        return(
            <>
           
             <Turtle/>
            <div className='outer-wrapper' onScroll={this.listenScrollEvent}>
                
                <div className='wrapper'>

           
                   
                    <div className='slide one'><h1>slide 1</h1>  <Ocean/></div>
                    <hr/>

                    <div className='slide two'><h1>slide 2</h1>  <Ocean/></div>
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