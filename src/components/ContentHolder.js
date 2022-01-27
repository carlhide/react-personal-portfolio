import HomeStyle from './ContentHolder.css'
import React, { Component } from 'react'

export class ContentHolder extends Component {

   render() {
      return (
        <div className='content' style={HomeStyle}>
            {this.props.children}
        </div>
      )
   }
}
export default ContentHolder
