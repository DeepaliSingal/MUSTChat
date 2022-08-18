import React from 'react';
import '../topbar/style.css';

const Topbar = () => {

  const image_url='https://storage.googleapis.com/ezap-prod/colleges/6737/mody-university-school-of-management-studies-sikar-logo.png';
  
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