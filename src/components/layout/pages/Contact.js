import React, { Component } from 'react'
import Banner from '../../Banner'
import Form from '../../Form'
import ContactStyle from './Contact.css'

export class Contact extends Component {

   render() {
      return (
         <div style={ContactStyle}>
            <Banner title={this.props.title} text={this.props.text}/>
            <div className='content'>
               <Form title='Get in touch with me!'/>
               <h1 style={{marginTop: 20}}>Contact Logo</h1>
            </div>
         </div>
      )
   }
}
export default Contact
