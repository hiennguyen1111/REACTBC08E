import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("Elvis de thuong");
  };

  showMessage = (mess) => {
      alert(`hello ${mess}`)
  }

  render() {
    let name = "Lucy";
    return (
      <div className="container">
        handle event
        <br />
        <button
          id="btn"
          onClick={(event) => {
            //   event.target.style.backgroundColor = 'red';
            // alert(`${name} de thuong`);
            this.showMessage('Em iu <3');
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
