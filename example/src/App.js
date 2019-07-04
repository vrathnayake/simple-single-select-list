import React, { Component } from 'react'

import SimpleSSList from 'simple-single-select-list'

const list = [
  {id:1, value:"option 1"},
  {id:2, value:"option 2"},
  {id:3, value:"option 3"}
]
export default class App extends Component {


  render () {
    return (
      <div>
        <SimpleSSList list={list} />
      </div>
    )
  }
}
