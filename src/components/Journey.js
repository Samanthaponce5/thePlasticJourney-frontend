import React from 'react'
import '../Turtle.css'
import '../Journey.css'
import '../Chart.css'

import Turtle from './Turtle'
import Charts from './Charts'
export default class Journey extends React.Component{

    state={
        lastScroll:null
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
    render(){
        // console.log(this.sections)
        return(
            <>
           
             <Turtle/>
            
            <div className='outer-wrapper' onScroll={this.listenScrollEvent}>
                
                <div className='wrapper'>
                   
                    <div className='slide one'></div>
                    <div className='slide two'></div>
                    <div className='slide three'><h1 className='text'>?</h1></div>
                    <div className='slide four'><Charts/></div>
                    <div className='slide five'></div>
                    <div className='slide six'></div>
                    {/* <div className='slide seven'></div>
                    <div className='slide eight'></div>    
                    <div className='slide nine'></div>    
                    <div className='slide ten'></div>    
                    <div className='slide eleven'></div>    
                    <div className='slide twelve'></div>     */}

                </div>
            </div>
            </>
        )
    }
}