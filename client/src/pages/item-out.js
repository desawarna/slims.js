/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-10-04T12:19:05+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: item-out.js
 * @Last modified by:   user
 * @Last modified time: 2017-10-04T13:52:10+07:00
 */

 import React from 'react';
 import * as XLSX from 'xlsx';
 import OutTable from '../components/OutTable';

 export default class ItemOut extends React.Component {
   constructor(){
     super()
     this.state = {
       cols: [],
       data: []
     }
   }

   componentDidMount(){
     fetch('/api/loan/report/item-out')
     .then(res => res.json())
     .then(data => this.setState({cols: data.cols, data: data.data}))
   }

   render(){
     return(
       <div>
         <h1 className="ui header">Checkout Items</h1>
         <OutTable data={this.state.data} cols={this.state.cols} />
       </div>
     )
   }
 }
