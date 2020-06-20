import React from 'react';

export default class Intro extends React.Component {
	render() {
        // console.log('name',this.props.name)
		return (
            <>
			<div class="blob blue">
				<div class="center">
					<div class="mouseLayout"></div>
					<p class="text2">Scroll  To Explore</p>
				</div>
			</div>

        <div class="bubbletext bubble-bottom-left" contenteditable>Hi {this.props.name.charAt(0).toUpperCase()+ this.props.name.slice(1)},
          I'm Jack the seaturtle! Let's go on a journey together to learn why plastic is harming me
         and my other marine friends and find out how <b>you</b> can make a change.</div>
            </>
		);
	}
}
