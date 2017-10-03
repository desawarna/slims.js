/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-10-02T13:59:29+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: Content.js
 * @Last modified by:   ido
 * @Last modified time: 2017-10-03T11:51:23+07:00
 */

import React from 'react';

import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard';

export default class Content extends React.Component {

  render(){
    return(
      <div className="ui grid m-0">
        <div className="three wide column">
          <Sidebar />
        </div>
        <div className="thirteen wide column">
          <Dashboard />
        </div>
      </div>
    )
  }
}
