import React from 'react'
import '../UserInput.css'
export default class UserInput extends React.Component{

    render(){
        console.log('userinput',this.props.name)
        return(
            <form className='userform' onSubmit={this.props.handleSubmit}>
            <input name='name' type='text' placeholder='Enter Name' value={this.props.name} onChange={this.props.handleChange}  />
            <button className='userbtn'>Start</button>
            </form>
        )
    }
}