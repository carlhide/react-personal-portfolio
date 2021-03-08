import React, { Component } from 'react'
import Banner from '../../Banner'

export class Home extends Component {

   render() {
      return (
         <div>
            <Banner title={this.props.title} text={this.props.text}/>
         </div>
      )
   }
}
export default Home
