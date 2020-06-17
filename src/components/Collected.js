import React from 'react'

export default class Collected extends React.Component{

    render(){
        return(
            <div className="collected">
                        { this.props.collected}/5
                        <p className="collected2">collected plastic</p>
            </div>
        )
    }
}