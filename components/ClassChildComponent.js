import React from "react";
class TestClassChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoIncreament: 0,
    };

    console.log("Child Component Constructor");
  }

  componentDidMount() {
    console.log(
      "Child Component DidMount -> auto increament",
      this.state.autoIncreament
    );
    /*
    this.timer = setInterval(() => {
      console.log("Count");
    }, 1000);*/

    setTimeout(() => {
      this.setState({
        autoIncreament: this.state.autoIncreament + 1,
      });
    }, 5000);
  }

  componentDidUpdate() {
    // This will update once component recieve props from state or from componentDidMount then re-render the component then it calls, if we increase counter will tirgger
    console.log("Child ComponentDidUpdate");
    // clearInterval(this.timer);
  }

  componentWillUnmount() {
    console.log("Child component ComponentWillUnmount");
  }

  render() {
    console.log("Child Component Render");
    return (
      <div>
        <h3>I am Child Class Component : {this.state.autoIncreament}</h3>
      </div>
    );
  }
}

export default TestClassChildComponent;
