import { Component } from "react";

class SendDevice extends Component{

  state = {
    userid: "",
    deviceid: "",
    message: ""
  };

  setUserID = event => {
      this.setState({ userid: event.target.value });
  };
  setDeviceID = event => {
    this.setState({ deviceid: event.target.value });
};
setMessage = event => {
  this.setState({ message: event.target.value });
};

  SendToDevice = () =>{
    let server = new WebSocket("ws://localhost:8080")
    server.onopen = () =>{
      server.send(JSON.stringify({type:"send",userid:this.state.userid,deviceid:this.state.deviceid,message:this.state.message}))

      server.onmessage = (data) =>{
        console.log(data.data)
      }
    }
  }

  render() {
    return <div>
      <h1>Send to Device</h1>
      <input onChange={this.setUserID} placeholder="User ID" /><br></br>
      <input onChange={this.setDeviceID} placeholder="Device ID" />
      <input onChange={this.setMessage} placeholder="Message" />
        <button onClick={this.SendToDevice}>List Sockets</button>
    </div>
  }
}

export default SendDevice;
