/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-10-03T14:33:40+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: FilterBar.js
 * @Last modified by:   user
 * @Last modified time: 2017-10-07T22:28:53+07:00
 */

import React, { Component } from 'react'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';

 export default class MenuExampleStackable extends Component {
   state = {}

   constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment(),
      staffOptions: [],
      filter: []
    };

    this.handleStaffChange = this.handleStaffChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.updatefilter = this.updatefilter.bind(this)
    this.handleStartChange = this.handleStartChange.bind(this)
    this.handleEndChange = this.handleEndChange.bind(this)
    this.handleDownload = this.handleDownload.bind(this)
  }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

   componentDidMount(){
     fetch('/api/profile/library/staff')
     .then(res => res.json())
     .then(data => {
       for (let staff of data.data) {
         var s = { key: staff.username, value: staff.realname, text: staff.realname }
         this.setState(prevState => ({
            staffOptions: [...prevState.staffOptions, s]
        }))
       }
     })
   }

  // -------------------------------------------------------------------------
  // Dropdown handler
  // -------------------------------------------------------------------------
  updatefilter(index, data, callback){
    var items = this.state.filter
    items[index] = data
    this.setState({filter: items}, (e) => callback(e, this.state.filter))
  }
  handleStaffChange(e, data) {
    this.updatefilter('staff', data.value, (e, v) => this.props.sendData(v))
  }
  handleTypeChange(e, data) {
    this.updatefilter('type', data.value, (e, v) => this.props.sendData(v))
  }
  handleStartChange(date){
    this.setState({startDate: date})
    this.updatefilter('start', date.format('YYYY-MM-DD'), (e, v) => this.props.sendData(v))
  }
  handleEndChange(date){
    this.setState({endDate: date})
    this.updatefilter('end', date.format('YYYY-MM-DD'), (e, v) => this.props.sendData(v))
  }
  handleDownload(e, data){
    this.props.export(data.value)
    this.updatefilter('download', data.value, (e, v) => this.props.sendData(v))
  }

   render() {
     const { activeItem } = this.state
     var typeOptions = [ { key: 'loan', value: 'loan', text: 'Loan' }, { key: 'return', value: 'return', text: 'Return' } ]
     return (
       <Menu stackable>

         <Menu.Item header>
           <Icon name="filter" />
         </Menu.Item>

        <Menu.Item>
          <Dropdown
            placeholder='Staff'
            search selection
            options={this.state.staffOptions}
            onChange={this.handleStaffChange}/>
        </Menu.Item>

        <Menu.Item>
          <Dropdown
            placeholder='Type'
            search selection
            options={typeOptions}
            onChange={this.handleTypeChange} />
        </Menu.Item>

        <Menu.Item>
          <div className="ui input">
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleStartChange}
                placeholderText="Start date"
                dateFormat="DD MMM YYYY"
            />
          </div>
          <Icon name="arrow circle outline right" />
          <div className="ui input">
            <DatePicker
                selected={this.state.endDate}
                onChange={this.handleEndChange}
                placeholderText="End date"
                dateFormat="DD MMM YYYY"
            />
          </div>
        </Menu.Item>

        <Dropdown item icon='download'>
         <Dropdown.Menu>
           <Dropdown.Item value='xlsx' onClick={this.handleDownload}><Icon name='file excel outline' /> Excel</Dropdown.Item>
           <Dropdown.Item value='csv' onClick={this.handleDownload}><Icon name='file text outline' /> CSV</Dropdown.Item>
           <Dropdown.Item value='ods' onClick={this.handleDownload}><Icon name='file text' /> ODS</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>

       </Menu>
     )
   }
 }
