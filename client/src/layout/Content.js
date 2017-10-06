/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-10-02T13:59:29+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: Content.js
 * @Last modified by:   user
 * @Last modified time: 2017-10-04T12:20:34+07:00
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard';
import LoanReport from '../pages/loan-report';
import ItemOut from '../pages/item-out';

export default class Content extends React.Component {

  render(){
    return(
      <div className="ui grid m-0">
        <div className="three wide column">
          <Sidebar />
        </div>
        <div className="thirteen wide column">
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/loan-report" component={LoanReport}></Route>
            <Route path="/item-out" component={ItemOut}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}
