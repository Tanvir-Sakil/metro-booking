import './DestinationTimeline.css'
import React from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import Timeline from '@material-ui/lab/Timeline';
import DirectionsRailwayIcon from '@material-ui/icons/DirectionsRailway';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { useLocation } from 'react-router-dom';
import { useEffect,useState} from 'react';

const DestinationTimeline = (props) => {
        

            const[pick,setPick] = useState({});
            const location = useLocation();
            let count;
            let count2;
            
           
        
            useEffect(() => {
               count = (location.pathname); 
               count2 = (location.state.detail); 
               setPick(count2);
            }, [location]);

            console.log(pick.PickFrom);


        
        
            

      return (
            <div>
                  <Container>
                        <Row>
                              <Col className='timeline'>
                              <div className="timeline-container">

                                    <Timeline>
                                          <TimelineItem>
                                          <TimelineSeparator>
                                          <DirectionsRailwayIcon/>
                                                      
                                                </TimelineSeparator>
                                                <TimelineContent style= {{fontSize:"25px" ,textTransform : "uppercase",color:'white'}}>{pick.PickFrom}</TimelineContent>
                                          </TimelineItem>
                                       
                                          <TimelineConnector  style= {{marginLeft:"15px"}}/>
                                          
                                          <TimelineItem>
                                                <TimelineSeparator>
                                                   <DirectionsRailwayIcon/>
                                                </TimelineSeparator>
                                                <TimelineContent style= {{fontSize:"25px",textTransform : "uppercase",color:'white'}}>{pick.PickTo}</TimelineContent>
                                          </TimelineItem>
                                    </Timeline>
                              </div>

                              <div className="tickets">
                                    <img style={{width:'10%'}}src="https://i.ibb.co/cJhdpbH/tickets-3.png" alt=""/>
                              <h3 className="ticket"> Ticket 1</h3>
                              <h3>$67</h3>
                              </div>
                              <div className="tickets">
                              <img style={{width:'10%'}}src="https://i.ibb.co/cJhdpbH/tickets-3.png" alt=""/>
                              <h3 className="ticket">Ticket 2</h3>
                              <h3>$67</h3>
                              </div>
                              <div className="tickets">
                              <img style={{width:'10%'}}src="https://i.ibb.co/cJhdpbH/tickets-3.png" alt=""/>
                              <h3 className="ticket">Ticket 3</h3>
                              <h3>$67</h3>
                              </div>
                              </Col>
                              <Col>
                                    <div id="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d939960.5028922335!2d90.56532512436435!3d23.034024588419218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x30acd92f0b4d67ad%3A0x9aded23afa11d29c!2sChattogram%20Railway%20Station%20Old%20Terminal%2C%20Bangladesh%2C%20Dasmari%C3%B1as!3m2!1d22.334934099999998!2d91.82645149999999!4m5!1s0x3755b9af4d165fb1%3A0x482369d7aa77d8a5!2sKamalapur%20Railway%20Station%2C%20Dhaka!3m2!1d23.7318474!2d90.4261269!5e0!3m2!1sen!2sbd!4v1626342692783!5m2!1sen!2sbd" style={{height:"600px" ,width:"600px"}}></iframe>
                                    </div>

                              </Col>
                        </Row>

                  </Container>

                  
            </div>
      );
};

export default DestinationTimeline;