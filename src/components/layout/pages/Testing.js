import React, { Component } from 'react'
import Banner from '../../Banner'
import ContentHolder from '../../ContentHolder'
import HamburgerNav from '../../HamburgerNav'

export class Testing extends Component {

   render() {
      return (
         <div>
            <Banner title={this.props.title} text={this.props.text}/>
            <ContentHolder>
               <HamburgerNav/>
            </ContentHolder>
         </div>
      )
   }
}
export default Testing
