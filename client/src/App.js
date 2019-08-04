import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    shortUrl: ""
  };
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  shortUrl = () => {
    const originalUrl = this.inputRef.current.value;
    const apiUrl = `${process.env.REACT_APP_API_HOST}/short-url`;
    const options = {
      method: "post",
      url: apiUrl,
      data: {
        url: originalUrl
      }
    };
    axios(options)
      .then(result => {
        this.setState({ shortUrl: result.data.shortUrl });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="App">
        <input
          size="80"
          type="text"
          ref={this.inputRef}
          placeholder="type url"
        />
        <button onClick={this.shortUrl}>Shorten</button>
        <p>{this.state.shortUrl}</p>
      </div>
    );
  }
}

export default App;
