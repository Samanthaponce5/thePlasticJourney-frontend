import React from 'react'

export default class Lastpgmessage extends React.Component{

    render(){
        return(
        <>
        <h2 className='lastmessage'>You made it to the end of the journey {this.props.name.charAt(0).toUpperCase()+ this.props.name.slice(1)}</h2>
        <h3 className='lastmessage pa1'>plastics were collected</h3>
        <h4 className='lastmessage pa2'>Click on the plastics to learn more!</h4>
        </>
        )
    }
}