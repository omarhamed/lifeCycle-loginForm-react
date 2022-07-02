import React, { Component } from "react";

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.userData = {
      username: "ITI",
      password: "P@ssw0rd",
    };

    this.state = {
      username: "",
      password: "",
    };

    this.userNameEneterdHandler = this.userNameEneterdHandler.bind(this);
    this.passwordEneterdHandler = this.passwordEneterdHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  userNameEneterdHandler(event) {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  }

  passwordEneterdHandler(event) {
    console.log(event.target.value);
    this.setState({
      password: event.target.value,
    });
  }

  formSubmitHandler(event) {
    event.preventDefault();
    if (
      this.state.username == this.userData.username &&
      this.state.password == this.userData.password
    ) {
      alert(`Welcome ITI`);
    } else {
      alert(`Invalid login`);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2 className="text-primary">Login Form</h2>
          <form onSubmit={this.formSubmitHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                value={this.state.username}
                onChange={this.userNameEneterdHandler}
                id="exampleInputEmail1"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.passwordEneterdHandler}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
