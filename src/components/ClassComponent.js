import React from "react";
import TestClassChildComponent from "./ClassChildComponent";
import UserInfoContext from "../utils/UserInfoContext";

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
      <div className="w-full py-5">
        <div className="w-10/12 m-auto">
          <h3 className="p-2 m-2 text-lg shadow-sm">
            Class Component Test Page
          </h3>
          <p>Display Count from state : {this.state.count}</p>
          <button
            className="bg-gray-500 p-2 m-2"
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increase Count
          </button>
          <h5>
            <i>You can check console statement for more details</i>
          </h5>
          <TestClassChildComponent />

          <h3> Checking the Context API</h3>

          <p>
            Logged In User :
            <UserInfoContext.Consumer>
              {(data) => {
                return <span>{data.loggedInUser}</span>;
              }}
            </UserInfoContext.Consumer>
          </p>
        </div>
      </div>
    );
  }
}

export default TestClassComponent;
