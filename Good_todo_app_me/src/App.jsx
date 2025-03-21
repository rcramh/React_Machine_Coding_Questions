import React from "react";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count : 5,
    }
  }

  handleClick = () => {
    this.setState({count : this.state.count + 1})
  }

  render() {
    return (
      <>
        <div>
          {this.state.count}
        </div>
        <button onClick={this.handleClick}>Increment</button>
      </>
      
    )
  }
}

export default App; // ✅ Exporting the component
