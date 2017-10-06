/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-10-03T14:48:51+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: OutTable.js
 * @Last modified by:   user
 * @Last modified time: 2017-10-04T16:08:13+07:00
 */

import React from 'react';

export default class OutTable extends React.Component {

  render(){
    return (
      <div>
      	<table className="ui celled table">
          <thead>
            <tr>{this.props.cols.map((c) => <th key={c.key}>{c.name}</th>)}</tr>
          </thead>
      		<tbody>
      			{this.props.data.map((r,i) => <tr key={i}>
      				{this.props.cols.map(c => <td key={c.key}>{ r[c.key] }</td>)}
      			</tr>)}
      		</tbody>
      	</table>
      </div>
    )
  }
}
