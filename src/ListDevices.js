import { Component } from "react";

class ListDevices extends Component {

  state = {
    userid: ""
  };



  handleInput = event => {
    this.setState({ userid: event.target.value });
  };

  listUserSockets = () => {
    let server = new WebSocket("ws://192.168.1.117:8080")
    server.onopen = () => {
      server.send(JSON.stringify({ type: "list", value: this.state.userid }))

      server.onmessage = (data) => {
        console.log(data.data)
        server.close()
      }
    }
  }

  render() {
    return <div>
      <h1>List Get User Sockets</h1>
      <input onChange={this.handleInput} placeholder="User ID" />
      <button onClick={this.listUserSockets}>List Sockets</button>
    </div>
  }
}

export default ListDevices;
