import React from 'react'

export default class Collected extends React.Component{

    render(){
        return(
            <div className="collected">
                       <div className='collected1'> { this.props.collected}/5</div>
                        <p className="collected2">collected plastic</p>
            </div>
        )
    }
}