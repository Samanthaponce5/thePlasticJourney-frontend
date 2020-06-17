import React from 'react';
import '../App.css';



 class About extends React.Component{

  render(){
  return (
  <>
  <h1 className='abouttitle'>What is this about?</h1>
  <div className='aboutpg'>
    <h3 className='firstparagraph'>      Jack's tales is a horizontal scrollable website.<span> </span>
       It's a diffent way of learning more about plastic pollution and the affects it has to the ocean. <span> </span> </h3><br/>
       <h3 className='firstparagraph'> When users input there name it takes them to a journey with Jack the sea turtle.<span> </span>
         Jack the sea trutle navigates through the ocean encountering some facts about plastic pollution.</h3><br/><h3 className='firstparagraph'>Hovering over some floating items and
          collecting plastic garbage reveals information about plastic pollution and how harmful it is to sea creatures. </h3>
          </div>
  </>
    );
  }
}

export default About;