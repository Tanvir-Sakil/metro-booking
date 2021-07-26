import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import addressImage from "../../images/Address.png";
import phoneImage from "../../images/phone.png";
import emailImage from "../../images/email.png";

const Contact = () => {
      return (
          <div>
          <h1>Get in touch with us</h1>
        <CardGroup>
        <Card>
          <Card.Img variant="top" src={addressImage} style={{width:"180px",height:"90px",  alignSelf: 'center'}}/>
          <Card.Body>
            <Card.Title>Address</Card.Title>
            <Card.Text>
              Address: Sector 6, uttara, Dhaka

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
        <Card.Img variant="top" src={phoneImage} style={{width:"50px",height:"90px",  alignSelf: 'center'}}/>
        <Card.Body>
            <Card.Title>Phone</Card.Title>
            <Card.Text>
              Phone:018XXXXXXXX
              
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
        <Card.Img variant="top" src={emailImage} style={{width:"50px",height:"90px",  alignSelf: 'center'}}/>
          <Card.Body>
            <Card.Title>Email</Card.Title>
            <Card.Text>
              Our Email : tanbirshakil18@gmail.com
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
      </CardGroup>
      </div>
      );
};

export default Contact;