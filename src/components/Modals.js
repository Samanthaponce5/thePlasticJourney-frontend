import React from 'react';
import Modal from 'react-modal';


export default class Modals extends React.Component {




    
	render() {
        let plasticInfo=this.props.mapPlastic.plasticInfo + ""
        let alternativeInfo=this.props.mapPlastic.alternativeInfo + ""
        
        let garbage
        if(this.props.mapPlastic.id===1)
        garbage=require("../img/badstraw.png")
        if(this.props.mapPlastic.id===2)
        garbage=require("../img/goodbag.png")
        if(this.props.mapPlastic.id===3)
        garbage=require("../img/badbottle.png")
        if(this.props.mapPlastic.id===4)
        garbage=require("../img/badcup.png")
        if(this.props.mapPlastic.id===5)
        garbage=require("../img/badcan.png")
        let trash
        if(this.props.mapPlastic.id===1)
        trash=require("../img/goodstraw.png")
        if(this.props.mapPlastic.id===2)
        trash=require("../img/badbag.png")
        if(this.props.mapPlastic.id===3)
        trash=require("../img/goodbottle.png")
        if(this.props.mapPlastic.id===4)
        trash=require("../img/goodcup.png")
        if(this.props.mapPlastic.id===5)
        trash=require("../img/goodcan.png")

		return (
			<>
				<Modal
					overlayClassName="Overlay"
					className="Modal"
					isOpen={this.props.modalIsOpen}
					onRequestClose={this.props.handleClose}
				>
					<h2 className="plasticName">{this.props.mapPlastic.plastic}</h2>
					<div className="main">
						<div className="inner">
							<div className="plasticInfo">
								<img
									className={`img ${this.props.mapPlastic.plastic}b`}
									src={garbage}
									alt=""
								/>{' '}
								{plasticInfo.split('/').map((plastic,index) => (
									<li key={index}>{plastic}</li>
								))}
							</div>
							<div className="vs"></div>
							<div className="alternativeInfo">
								<img
									className={`img ${this.props.mapPlastic.plastic}b`}
									src={trash}
									alt=""
								/>{' '}
								{alternativeInfo.split('/').map((plastic,index) => (
									<li key={index}>{plastic}</li>
								))}
							</div>
						</div>
					</div>
					<div>
						<button className="modalbtn" onClick={this.props.handleClose}>
							X
						</button>
					</div>
				</Modal>
			</>
		);
	}
}
