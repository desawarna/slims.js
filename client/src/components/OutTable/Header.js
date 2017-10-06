/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-10-04T15:29:38+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: Header.js
 * @Last modified by:   user
 * @Last modified time: 2017-10-04T15:49:32+07:00
 */

import React from 'react';
import LibraryName from '../LibraryName';

export default class Header extends React.Component {

  render(){

    return(
      <thead>
        <tr>
          <td>LAPORAN SIRKULASI <LibraryName /></td>
        </tr>
        <tr>
          <td>JENIS TRANSAKSI</td>
          <td>PEMINJAMAN</td>
        </tr>
        <tr>
          <td>JUMLAH BUKU YANG DIPINJAMKAN</td>
          <td>12</td>
        </tr>
        <tr>
          <td>NAMA STAFF</td>
          <td>WARIS AGUNG WIDODO</td>
        </tr>
        <tr>
          <td>TANGGAL</td>
          <td>04 Oktober 2017</td>
        </tr>
      </thead>
    )
  }
}
