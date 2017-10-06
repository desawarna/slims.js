/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-10-02T13:48:03+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: Header.js
 * @Last modified by:   user
 * @Last modified time: 2017-10-04T14:48:53+07:00
 */

import React from 'react';

export default class Header extends React.Component {
  render(){
    return(
      <div className="slims header ui menu borderless"><a href="/admin" className="item pr-0"><img src="/images/logo.png"/></a>
        <div className="item brand">SLiMS.js</div>
        <div className="right menu small text">
          <div className="ui category search item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..." className="prompt square"/><i className="search link icon"></i>
            </div>
            <div className="results"></div>
          </div>
          <div className="item">Waris Agung Widodo</div>
          <div className="item"><img src="/images/elliot.jpg" alt="elliot.jpg" className="photo"/></div>
          <div className="item">
            <div className="hamburger">
              <div className="strip one"></div>
              <div className="strip two"></div>
              <div className="strip three"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
