/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-10-03T13:15:44+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: loan-report.js
 * @Last modified by:   user
 * @Last modified time: 2017-10-07T22:23:04+07:00
 */

import React from 'react';
import * as XLSX from 'xlsx';
import OutTable from '../components/OutTable';
import LibraryName from '../components/LibraryName';
import FilterBar from '../components/FilterBar';
import moment from 'moment'

var FileSaver = require('file-saver');

export default class LoanReport extends React.Component {
  constructor(){
    super()
    this.state = {
      cols: [],
      data: []
    }
    this.getData = this.getData.bind(this)
    this.s2ab = this.s2ab.bind(this)
    this.exportFile = this.exportFile.bind(this)
  }

  s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }

  exportFile(type) {
		/* convert state to workbook */
		const ws = XLSX.utils.aoa_to_sheet(this.state.data);
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "loan-report");
		/* generate XLSX file */
		const wbout = XLSX.write(wb, {type:"binary", bookType:type});
		/* send to client */
		FileSaver.saveAs(new Blob([this.s2ab(wbout)],{type:"application/octet-stream"}), "loan-report." + type);
	};

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
        <FilterBar export={this.exportFile} sendData={this.getData} />
        <OutTable data={this.state.data} cols={this.state.cols} />
      </div>
    )
  }
}
