import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';
import axios from "axios";

class Input extends Component {
    state = {

      userName:"",
      comment:"",
       
      };

handleClick = (event) => {
  event.preventDefault();
    let userName=this.state.userName;
    let comment=this.state.Comment;
    
    //console.log(name,mail);
    
    
    axios.get(`http://localhost:5000/addReviews?userName=${userName}&comment=${comment}`)
    .then(function(response){
      
      console.log(response.data);
    
    })
    .catch(function(error){
       console.log(error);
    });
  }

    render() {
    
    // console.log(this.state.name);
    
    // console.log(this.state.mail);

    return (
        <div>
          
          <Form>
  <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="userName" placeholder="Enter your name" onChange = {(event,target) => this.setState({userName:event.target.value})}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicMail">
    <Form.Label>Comment</Form.Label>
    <Form.Control type="comment" placeholder="Mail" onChange = {(event,target) => this.setState({comment:event.target.value})}/>
  </Form.Group>
  
<Button variant="primary" type="submit" onClick={(event) => this.handleClick(event)}>
    Send
  </Button>
</Form>
        </div>
      );
}
}

export default Input