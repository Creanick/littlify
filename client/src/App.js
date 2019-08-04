import React from "react";
import axios from "axios";
import styled from "styled-components";
import styles from "./App.module.css";

const Input = styled.input`
  padding: 10px 12px;
  font-size: 0.875rem;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 4px;
  display: block;
  width: 100%;
  margin: 14px 0px;
  outline: none;
  :focus {
    border-color: mediumseagreen;
  }
`;
const Button = styled.button`
  padding: 10px 12px;
  border: 1px solid transparent;
  font-size: 0.875rem;
  border-radius: 4px;
  margin-left: 10px;
  background: mediumseagreen;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  margin: 10px 0px;
`;
const URL = styled.p`
  border: 1px solid green;
  border-radius: 4px;
  padding: 10px 30px;
  color: green;
  margin: 14px auto;
  display: inline-block;
`;
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
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Container}>
          <Input
            size="80"
            type="text"
            ref={this.inputRef}
            placeholder="Enter Url you want to short"
          />
          <Button onClick={this.shortUrl}>Shorten</Button>
          <div>
            {this.state.shortUrl.length > 0 && <URL>{this.state.shortUrl}</URL>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
