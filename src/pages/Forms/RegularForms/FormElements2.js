import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server'
import Alert from 'sweetalert-react';
import * as firebase from 'firebase';
class FormElements extends Component {
  state = { text:"Loading"};
  componentDidMount() {
    const rootRef = firebase.database().ref().child('systemInfo');
    rootRef.on('value', snap => {
      if( snap.val() == "thef"){
        this.setState({ text: "fuckThef" });
      } else if( snap.val() == "ok"){
        this.setState({ text: "ok goo" });
      } else {
        this.setState({ text: "error" });
      }
    });    

  }


  render() {
    return (<div className="card">
      <div className="header">
      </div>
      <div className="content">
        <form className="form-horizontal">

          {/* <button className="btn btn-default btn-fill" onClick={() => this.setState({ message1: true })}>Try me!</button> */}
          {/* <Alert
            title=""
            show={this.state.message1}
            text="Here's a message!"
            onConfirm={() => this.setState({ message1: false })} /> */}
          <legend>Message</legend>
          <p className="text-success ">{this.state.text}</p>
        </form>
      </div>
    </div>)
  }
}
export default FormElements