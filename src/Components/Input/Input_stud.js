import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';

import socketIOClient from "socket.io-client";

class Input extends Component {
    state = {

        name:"",
        age:"",
        mail:"",
        endpoint: "localhost:4002",
      };

      // sending sockets
ButtonInsert = () => {
    let name=this.state.name;
    let age=this.state.age;
    let mail=this.state.mail;
   
    console.log(name,age,mail);
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('insert student', name,age,mail) 
    
  }

    render() {
    //console.log("props : " , this.props)
    console.log(this.state.name);
    console.log(this.state.age);
    console.log(this.state.mail);

    return (
        <div>
          <Form>
  <Form.Group controlId="formBasicName">
    <Form.Label>Email name</Form.Label>
    <Form.Control type="name" placeholder="Enter name" onChange = {(event,target) => this.setState({name:event.target.value})}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicAge">
    <Form.Label>Age</Form.Label>
    <Form.Control type="age" placeholder="Age" onChange = {(event,target) => this.setState({age:event.target.value})}/>
  </Form.Group>

  <Form.Group controlId="formBasicMail">
    <Form.Label>Mail</Form.Label>
    <Form.Control type="mail" placeholder="Mail" onChange = {(event,target) => this.setState({mail:event.target.value})}/>
  </Form.Group>
  
<Button variant="primary" type="submit" onClick={() =>this.ButtonInsert()}>
    Submit
  </Button>
</Form>
        </div>
      );
}
}

export default Input