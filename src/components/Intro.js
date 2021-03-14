import React from 'react';

export default class Intro extends React.Component {
	render() {
        // console.log('name',this.props.name)
		return (
            <>
				<div className="blob blue">
					<div className="center">
						<div className="mouseLayout"></div>
							<p className="scrolltextentrance">Scroll To Explore</p>
					</div>
				</div>
				
        <div className="bubbletext bubble-bottom-left" >Hi {this.props.name.charAt(0).toUpperCase()+ this.props.name.slice(1)},
          I'm Jack the seaturtle! Let's go on a journey together to learn why plastic is harming me
          and my other marine friends and find out how <b>you</b> can make a change.
		</div>
            </>
		);
	}
}
