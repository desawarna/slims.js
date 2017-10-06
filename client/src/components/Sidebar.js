/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-10-02T14:12:13+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: sidebar.js
 * @Last modified by:   user
 * @Last modified time: 2017-10-04T12:18:57+07:00
 */

import React from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {

  render(){
    return (
      <div className="ui vertical menu fluid">
        <div className="item">
          <div className="header color blue"><i className="dashboard icon"></i>Dashboard</div>
          <div className="menu">
            <Link className="item" to="/">Bibliography</Link>
            <a className="item">Circulation</a>
            <a className="item">Membership</a>
          </div>
        </div>
        <div className="item">
          <div className="header color pink"><i className="book icon"></i>Bibliography</div>
          <div className="menu">
            <a className="item">Collection Statistic</a>
            <a className="item">Title List</a>
            <a className="item">Item Title List</a>
            <a className="item">Items Usage Statistics</a>
            <Link className="item" to="/item-out">Checkout Items</Link>
            <a className="item">Custom Recapitulation</a>
          </div>
        </div>
        <div className="item">
          <div className="header color yellow"><i className="shop icon"></i>Circulation</div>
          <div className="menu">
            <Link className="item" to="/loan-report">Loan Report</Link>
            <a className="item">Loans by Classification</a>
            <a className="item">Loan List by Member</a>
            <a className="item">Loan History</a>
            <a className="item">Due Date Warning</a>
            <a className="item">Overdued List</a>
            <a className="item">Fines Report</a>
          </div>
        </div>
        <div className="item">
          <div className="header color green"><i className="user icon"></i>Membership</div>
          <div className="menu">
            <a className="item">Membership Report</a>
            <a className="item">Member List</a>
            <a className="item">Visitor Statistic</a>
            <a className="item">Visitor Statistic (by Day)</a>
            <a className="item">Visitor List</a>
          </div>
        </div>
      </div>
    );
  }
}
