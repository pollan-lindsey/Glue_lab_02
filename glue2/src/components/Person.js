import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


export default class Person extends Component {
    constructor(props){
        super(props);
        this.state = {
          likes: 0,
        }
      }
    
      handleClicks(){
        //when user clicks
        //add 1
        this.setState((prev) => ({
          likes: prev.likes + 1
        })) //updates state automatically
        console.log(this.state.likes); //console is synchronous 
      }

    render() {
        return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png" />
            <Card.Body>
                <Card.Header>Likes: {this.state.likes}</Card.Header>
                <Card.Title>{this.props.firstName} {this.props.lastName}</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>{this.props.email}</ListGroup.Item>
                <ListGroup.Item>{this.props.city}</ListGroup.Item>
                <ListGroup.Item>{this.props.iPAddress}</ListGroup.Item>
             </ListGroup> 
            <Button onClick={() => this.handleClicks()} variant="outline-secondary">Like</Button>{' '}  
        </Card>
        </>

        )
    }
}