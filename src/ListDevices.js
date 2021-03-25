import { Component } from "react";

class ListDevices extends Component {

  state = {
    userid: "",
    hash: ""
  };



  setUserID = event => {
    this.setState({ userid: event.target.value });
  };
  setHash = event => {
    this.setState({ hash: event.target.value });
  };



  listUserSockets = () => {
    let server = new WebSocket("ws://localhost:8080")
    server.onopen = () => {
      //Hier muss der Login Hash noch Implementiert werden
      server.send(JSON.stringify({ type: "list",hash:this.state.hash, value: this.state.userid }))

      server.onmessage = (data) => {
        console.log(data.data)
        server.close()
      }
    }
  }

  render() {
    return <div>
      <h1>List Get User Sockets</h1>
      <input onChange={this.setUserID} placeholder="User ID" />
      <input onChange={this.setHash} placeholder="Hash" />
      <button onClick={this.listUserSockets}>List Sockets</button>
    </div>
  }
}

export default ListDevices;
