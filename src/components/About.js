import React from 'react';
import '../App.css';



 class About extends React.Component{


render(){
  let names=['firsts-s','seconds-s','thirds-s','fourths-s','fifths-s','sixths-s']
  // console.log(this.state.sites)
return (
  <>
     <img className='seahorse about'src={ require('../img/horse.gif')} alt=''/>
  {names.map((name,index)=>
<img className={`see ${name}`}key ={index}src={ require('../img/seeweed.gif')} alt=''/>
)}

<h1 className='abouttitle'>What is this about?</h1>
<div className='aboutpg'>
  <h3 className='firstparagraph'>      Jack's tales is a horizontal scrollable website.<span> </span>
     It's a diffent way of learning more about plastic pollution and the affects it has to the ocean. <span> </span> </h3><br/>
     <h3 className='firstparagraph'> When users input there name it takes them to a journey with Jack the sea turtle.<span> </span>
       Jack the sea turtle navigates through the ocean encountering some facts about plastic pollution.</h3><br/><h3 className='firstparagraph'>Hovering over some floating items and
        collecting plastic garbage reveals information about plastic pollution and how harmful it is to sea creatures. </h3>
        </div>
</>
  );
}
}

export default About;