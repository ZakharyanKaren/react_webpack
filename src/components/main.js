import React from "react";
import ReactDOM from "react-dom";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  }
  render() {
    const element = this.state.isClicked ? (
      <div>
        <img src="./images/image.jpg" />
      </div>
    ) : (
      <div className="animate__animated animate__fadeIn animate__delay-4s">
        <button className="alert" onClick={this.clickHandler}></button>
        <p className="h2">Չսեղմել!</p>
      </div>
    );

    return (
      <div className="container main">
        <div className="row">
          <div className="col-8 offset-2 text-center">
            <p className="animate__animated animate__lightSpeedInLeft greeting">
              Ողջույն Կարեն!
            </p>
            <p className="animate__animated animate__lightSpeedInRight animate__delay-2s greeting">
              Հաճելի աշխատանքային օր ենք մաղթում քեզ!
            </p>
            {element}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
