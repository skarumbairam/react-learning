import React from "react";
import TestClassChildComponent from "./ClassChildComponent";

class TestClassComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent  Constructor");
    this.state = {
      count: 0,
    };
  }

  async componentDidMount() {
    console.log("Parent  DidMount");
    /*const fetchData = await fetch(
      "https://github.com/https://api.github.com/users/skarumbairam"
    );
    const json = await fetchData.json;*/
  }

  componentDidUpdate() {
    // This will update once component recieve props from state or from componentDidMount then re-render the component then it calls, if we increase counter will tirgger
    console.log("Parent ComponentDidUpdate");
  }

  componentWillUnmount() {
    // This will execute before leaving or reloading the component
    console.log("Parent ComponentWillUnmount");
  }

  render() {
    console.log("Parent  Render");
    return (
      <div>
        <h3> Hey I am Class Component</h3>
        <p>Display Count from state : {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <TestClassChildComponent />
      </div>
    );
  }
}

export default TestClassComponent;
