//import CSS_SHEET from '../../../styles/Home.css'
import React, { Component } from "react";
import FormStyle from "./Form.css";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    submitting: false,
    input_name: "",
    input_mail: "",
    input_message: "",
    input_number: "",
  };

  initState = null;

  constructor(props) {
    super(props);
    this.initState = this.state;
    this._isMounted = false;
    props = {
      title: this.props.title,
    };
  }

  componentDidMount() {
    console.log("submitting state = " + this.state.submitting);
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  /**
   *  @param {Event} e
   */

  submit = (e) => {
    console.log("Submit executed");
    e.preventDefault();
    this.setState({ submitting: true });
    setTimeout(() => {
      if (this._isMounted) {
        this.setState(this.initState);
      }
    }, 3000);
  };

  handleInputChange = (e) => {};

  render() {
    return (
      <div style={FormStyle} className="form">
        <h2>{this.props.title}</h2>
        <form>
          <fieldset>
            <label>Name</label>
            <input name="name" />
          </fieldset>
          <fieldset>
            <label>E-mail</label>
            <input name="email" />
          </fieldset>
          <fieldset>
            <label>Phone</label>
            <input name="phone" />
          </fieldset>
          <fieldset>
            <label>Message</label>
            <textarea name="msg" />
          </fieldset>

          <button onClick={this.submit.bind(this)}>Submit</button>
          <div>
            <label
              className={
                this.state.submitting
                  ? "submitting-visible"
                  : "submitting-hidden"
              }
            >
              Submitting
            </label>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;

Form.propTypes = {
  title: PropTypes.string.isRequired,
};
