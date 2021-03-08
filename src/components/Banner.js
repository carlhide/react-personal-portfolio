import HomeStyle from './Banner.css'
import React, { Component } from 'react'

export class Banner extends Component {

   render() {
      return (
         <div style={HomeStyle} className="banner">
            <div className='banner-inner'>
               <h1 className="banner-title">{this.props.title}</h1>
               <label className="banner-bread">{this.props.text}</label>
            </div>
         </div>
      )
   }
}
export default Banner
