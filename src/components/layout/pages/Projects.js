import React, { Component } from 'react'
import Banner from '../../Banner'

export class Projects extends Component {

   render() {
      return (
         <div>
            <Banner title={this.props.title} text={this.props.text}/>
         </div>
      )
   }
}
export default Projects
