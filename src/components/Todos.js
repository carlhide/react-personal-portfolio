import React, { Component } from 'react'
import 'react-calendar/dist/Calendar.css';
import '../styles/App.css'

export class Todos extends Component {

    attributes = {
        title: 'Todos',
        wrapperStyle: "App-wrapper-dont-use",
        todoStyle: ""
    }

    state = {
        Todos: [
            {
                id: 1,
                name: "Hello"
            },
            {
                id: 2,
                name: "Goodbye"
            }
        ]
    }

    onClick = () => {
        console.log("Clicked");
    }

    toggleCheckBox = (e) => {
        console.log(e.target.id);
    }

    render() {
        console.log("Title:" + this.attributes.title)
        return (
            <div className = {this.attributes.wrapperStyle}>
                <h2>
                    {this.attributes.title} 
                </h2>
                <div>
                {this.state.Todos.map((item, i) => (
                    <div style={{padding: 5}}>
                        <label style={{}}>
                        <input type='checkbox' className='checkbox' id={item.id} onChange={this.toggleCheckBox} />
                        {item.id + ": " + item.name}
                        </label>
                    </div>
                ))}
                </div>
                <div>
                    <button onClick={this.onClick}> Hello im a button </button>
                </div>
            </div>
        )
    }

    static propTypes = {

    }
}
export default Todos
