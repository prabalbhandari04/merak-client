
import React from 'react';


const Scroll = (props) => {
  return( 
    <div style={{overflowY: 'scroll', height:'30vh',width:'30vh'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;