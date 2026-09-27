import React from 'react'
import './footer.css';
import first from './SecondHome/logoB.png';
import {Link} from 'react-scroll';
function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='first-part'>
          <img src={first} alt="" />
        </div>
        <div className="second-part">
          <span> 
            <Link to='service' smooth={true} duration={300}>Services</Link></span>
            <span><Link to='port' smooth={true} duration={500}>Portfolio</Link></span>
                        <span><Link to='skill' smooth={true} duration={600}>Skills</Link></span>
                        <span><Link to='contact' smooth={true} duration={700}>Contact</Link></span>
          
        </div>
        <div className='third-part'>ali0324king@gmail.com.best.service</div>
      </div>
    </div>
  )
}

export default Footer
