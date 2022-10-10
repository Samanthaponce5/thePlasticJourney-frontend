import React from 'react'
import Intro from './Intro'

export default class Turtle extends React.Component {
  render() {
    return (
      <div className={`background ${this.props.class}`}>
        <Intro name={this.props.name} class={this.props.class}/>
        <div className="seaturtle">
          <div className="head">
            <div className="eye"></div>
          </div>
          <div className="casc"></div>
          <div className="hands"></div>
          <div className="feets"></div>
        </div>
      </div>
    )
  }
}
