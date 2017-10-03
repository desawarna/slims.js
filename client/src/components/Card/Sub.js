/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-10-03T08:52:11+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: sub.js
 * @Last modified by:   ido
 * @Last modified time: 2017-10-03T11:51:36+07:00
 */

import React from 'react';

export default class Sub extends React.Component {

  render(){
    var data = this.props.data
    return(
      <span>
        {data.value + " " + data.label}
        <i className={data.icon + " icon"}></i>
      </span>
    )
  }
}
