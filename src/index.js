import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class SimpleSingleSelectList extends Component {

  itemSelected =()=>{
    alert('item clicked. Bind onItemSelected to a method handler ')
}
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const styleClasses = [styles.SelectOption]
    return (
      <div className={styles.SelectContainer} >
          {this.props.list.map((item) => {
              if(item.value === ( this.props.defaultvalue)){
                  styleClasses.push(styles.Selected)
              } else {
                  if(styleClasses.length > 1){
                      styleClasses.pop()
                  }
                  
              }
              return (
                  
                  <div
                      className={styleClasses.join(' ')}
                      onClick={() => (typeof(this.props.onItemSelected) !== 'undefined') ? this.props.divclicked(item.value) : this.itemSelected()}
                      key={item.id} >
                      {item.value}
                  </div>
              )
          }
          )}
      </div>
  )
  }
}
