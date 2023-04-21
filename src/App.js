import React from "react";
import Counter from "./components/Counter";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Hello World!</h1>
          <p>Click on the below button</p>
        </div>
        <Counter />
      </div>
    );
  }
}
