import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <div>
     <p>Welcome to arcade, have fun!</p>
      <Link to="/games"><button className="push--flat">PLAY</button></Link>
    </div>
  )
}
