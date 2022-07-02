import React, { Component } from "react";

export class UpdateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    console.log("Componeted First Rendered and excuted one time !!");
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }

  shouldComponentUpdate() {
    console.log("Component Is updated !");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate is called after render !");
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
    return null;
  }
  render() {
    console.log(
      "render is called when component initilized and after shouldComponentUpdate !"
    );
    return (
      <div className="container text-center">
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called after getSnapshotBeforeUpdate !");
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }
}

export default UpdateComponent;
