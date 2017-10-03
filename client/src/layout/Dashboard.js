/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-10-02T14:33:28+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: Dashboard.js
 * @Last modified by:   ido
 * @Last modified time: 2017-10-03T11:50:20+07:00
 */

import React from 'react';

import Card from '../components/Card';

export default class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {title: 0, newTitle: 0, item: 0, newItem: 0, loan: 0, lent: 0, extend: 0, overdue: 0}
  }

  componentDidMount(){
    // get title
    fetch('/api/biblio/count/title')
    .then(res => res.json())
    .then(data => this.setState({title: data.data}))
    // get new title
    fetch('/api/biblio/count/new-title')
    .then(res => res.json())
    .then(data => this.setState({newTitle: data.data}))
    // get new title
    fetch('/api/biblio/count/item')
    .then(res => res.json())
    .then(data => this.setState({item: data.data}))
    // get new title
    fetch('/api/biblio/count/new-item')
    .then(res => res.json())
    .then(data => this.setState({newItem: data.data}))
    // get all loan transaction
    fetch('/api/loan/count')
    .then(res => res.json())
    .then(data => this.setState({loan: data.data}))
    // get lent
    fetch('/api/loan/count/lent')
    .then(res => res.json())
    .then(data => this.setState({lent: data.data}))
    // get renewed
    fetch('/api/loan/count/extend')
    .then(res => res.json())
    .then(data => this.setState({extend: data.data}))
    // get overdue
    fetch('/api/loan/count/overdue')
    .then(res => res.json())
    .then(data => this.setState({overdue: data.data}))
  }

  render(){
    var numberWithCommas = function (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var data = {
      biblio : {
        color: 'orange -pink',
        title: 'Bibliographi',
        value: numberWithCommas(this.state.title),
        icon: 'book',
        sub: [
          {
            label: 'new',
            value: numberWithCommas(this.state.newTitle),
            icon: 'long arrow up'
          }
        ]
      },
      item : {
        color: 'deep-purple -blue',
        title: 'Items',
        value: numberWithCommas(this.state.item),
        icon: 'clone',
        sub: [
          {
            label: 'new',
            value: numberWithCommas(this.state.newItem),
            icon: 'long arrow up'
          }
        ]
      },
      loan : {
        color: 'green -blue',
        title: 'Loans',
        value: numberWithCommas(this.state.loan),
        icon: 'shopping basket',
        sub: [
          {
            label: 'lent',
            value: numberWithCommas(this.state.lent),
            icon: 'long arrow up'
          },
          {
            label: 'overdue',
            value: numberWithCommas(this.state.overdue),
            icon: 'wait'
          },
          {
            label: 'extend',
            value: numberWithCommas(this.state.extend),
            icon: 'repeat'
          }
        ]
      },
    }

    return(
      <div className="ui grid three column">
        <div className="column">
          <Card data={data.biblio} />
        </div>
        <div className="column">
          <Card data={data.item} />
        </div>
        <div className="column">
          <Card data={data.loan} />
        </div>
      </div>
    )
  }
}
