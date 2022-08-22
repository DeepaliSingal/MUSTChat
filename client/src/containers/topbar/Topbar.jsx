import React from 'react';
import '../topbar/style.css';

const Topbar = () => {

  const image_url='https://yt3.ggpht.com/a/AATXAJwlJ4x_3C7Yn6H_M0bq9qO47VfK4gLAXWSrrA=s900-c-k-c0xffffffff-no-rj-mo';
  
  return (
    <>
    <div className='navbar'>
    <img src={image_url} alt="must logo" id="mustlogo"></img>
    <h1>MUSTChat</h1>
    </div>
    </>
  )
}

export default Topbar