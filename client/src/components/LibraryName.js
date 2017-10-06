/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-10-04T13:54:18+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: LibraryName.js
 * @Last modified by:   user
 * @Last modified time: 2017-10-04T14:07:36+07:00
 */

import React from 'react';

export default class LibraryName extends React.Component {

  constructor() {
    super()
    this.state = {
      library: "My Library"
    }
  }

  componentDidMount() {
    fetch('/api/profile/library/name')
    .then(res => res.json())
    .then(data => this.setState({library: data.data}))
  }

  render() {
    return (
      <span>{this.state.library}</span>
    )
  }
}
