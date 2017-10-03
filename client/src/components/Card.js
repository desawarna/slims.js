/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-10-02T14:40:06+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: Card.js
 * @Last modified by:   ido
 * @Last modified time: 2017-10-03T12:02:43+07:00
 */

import React from 'react';
import Sub from './Card/Sub';

export default class Card extends React.Component {
  constructor() {
    super()
  }

  render(){
    var data = this.props.data
    const sub = data.sub.map((sub) => {
      return (
        <Sub data={sub} />
      )
    })
    return(
      <div className={"ui card fluid gradient " + data.color} >
          <div className="content">
              <div className="title">{data.title}</div>
              <div className="value">{data.value}</div>
              <div className="sub">
                {sub}
              </div>
          </div>
          <div className="illustration"><i className={data.icon + " icon"}></i></div>
      </div>
    )
  }
}
