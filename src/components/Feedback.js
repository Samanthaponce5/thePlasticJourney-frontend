import React from 'react'


export default class Feedback extends React.Component{

    state={
        text:'',
        user_id:this.props.name.id
    }

handlesubmit=(e)=>{
    e.preventDefault()
    let {text,user_id} = this.state
    fetch('http://localhost:3000/comments',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({text,user_id})
    })
    .then((resp)=>resp.json())
    .then((data)=>console.log('???????????????'))
    .catch((error) => {
        console.error('Error:', error);
      });
}
handleChange=(e)=>{
    const {name,value}=e.target
    this.setState({[name]:value})
}

    render(){
        console.log(this.state.user_id)
        return(
            <>
            <h1>Comment Section</h1>
        <h3>Hey {this.props.name.name} </h3>
            <form onSubmit={this.handlesubmit}>
            <textarea onChange={this.handleChange} name='text' value={this.state.text}></textarea>
            <button type='submit'>Submit</button>
            </form>
            </>
        )
    }
}