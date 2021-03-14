import React from 'react'
import '../UserInput.css'
export default class UserInput extends React.Component{


    render(){
        return(
             <div className='homeform'>
                <form onSubmit={this.props.handleSubmit}>
                    <input required className='userform' name='name' type='text' placeholder='Enter Name' value={this.props.name.name} onChange={this.props.handleChange}  />
                    <button className='userbtn'>Start Journey</button>
                 </form>
            </div>
        )
    }
}