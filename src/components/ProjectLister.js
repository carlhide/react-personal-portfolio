import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/ProjectLister.css'

export class ProjectLister extends Component {

    attributes = {
        title: 'Todos',
        wrapperStyle: "App-wrapper",
        todoStyle: ""
    }

   
    render() {
        return (
            <div className = {this.attributes.wrapperStyle}>
              <div className="dark-trans">
                 <label>ProjectListener</label>
              </div>
            </div>
        )
    }

}
export default ProjectLister
