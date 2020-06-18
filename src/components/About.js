import React from 'react';
import '../App.css';



 class About extends React.Component{

//   render(){
//   return (
//   <>
//   <h1 className='abouttitle'>What is this about?</h1>
//   <div className='aboutpg'>
//     <h3 className='firstparagraph'>      Jack's tales is a horizontal scrollable website.<span> </span>
//        It's a diffent way of learning more about plastic pollution and the affects it has to the ocean. <span> </span> </h3><br/>
//        <h3 className='firstparagraph'> When users input there name it takes them to a journey with Jack the sea turtle.<span> </span>
//          Jack the sea trutle navigates through the ocean encountering some facts about plastic pollution.</h3><br/><h3 className='firstparagraph'>Hovering over some floating items and
//           collecting plastic garbage reveals information about plastic pollution and how harmful it is to sea creatures. </h3>
//           </div>
//   </>
//     );
//   }
// }
render(){
  let names=['firsts-s','seconds-s','thirds-s','fourths-s','fifths-s','sixths-s']
  // console.log(this.state.sites)
return (
  <>
     <img className='seahorse'src={ require('../img/horse.gif')}/>
  {names.map((name,index)=>
<img className={`see ${name}`}key ={index}src="https://images.squarespace-cdn.com/content/v1/57e6b422f5e23123e59360e9/1587578761365-UXVZ8U91KJP4JHI4EKJC/ke17ZwdGBToddI8pDm48kNzZ-zcgtvZFpwwFWdpSltZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpylMLGiNBwWDu7Rm8ZOgC0TmMfolEvrjqOJv2FJwTCsrP1sTOcbrz0hM_jN7frStCo/single-seaweed.gif"/>
)}
  <img className='fish-sec-s'src={ require('../img/fish.png')}/>
  {/* <img className='fish-sec-s another'src={ require('../img/fish.png')}/> */}
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