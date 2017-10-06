/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-10-03T13:15:44+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: loan-report.js
 * @Last modified by:   user
 * @Last modified time: 2017-10-05T22:59:35+07:00
 */

import React from 'react';
import * as XLSX from 'xlsx';
import OutTable from '../components/OutTable';
import LibraryName from '../components/LibraryName';
import FilterBar from '../components/FilterBar';

export default class LoanReport extends React.Component {
  constructor(){
    super()
    this.state = {
      cols: [],
      data: []
    }
    this.getData = this.getData.bind(this)
  }

  getData(data){
    // do not forget to bind getData in constructor
    var reqData = []
    for (var f in data) {
      if (data.hasOwnProperty(f)) {
        reqData.push({[f]: data[f]})
      }
    }
    // request to server
    fetch('/api/loan/report/loan-report',{
      method: "POST",
      body: JSON.stringify(reqData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json(),function(error) {
      console.error(error);
    })
    .then(data => this.setState({cols: data.cols, data: data.data}))
  }

  componentDidMount(){

  }

  render(){
    return(
      <div>
        <h1 className="ui header">Loan Report <LibraryName /></h1>
        <FilterBar sendData={this.getData} />
        <OutTable data={this.state.data} cols={this.state.cols} />
      </div>
    )
  }
}
