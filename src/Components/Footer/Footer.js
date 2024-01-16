import React, { useContext } from 'react';

import './Footer.css';
import { Apple , CarContext, MyContext} from '../../store/Apple';

function Footer() {

  const {voo, see} = useContext(Apple)
  const contextValue = useContext(MyContext);
  const {md, pr, smd, sp} = useContext(CarContext)

  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p onClick={() => {
              see(voo+1);
              smd('BENZ');
              sp(89000);
              }}>POPULAR LOCATIONS -- {contextValue} {voo}  {md}::{pr}</p>
          </div>
          <div className="list">
            <ul>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2021 OLX</p>
      </div>
    </div>
  );
}

export default Footer;
