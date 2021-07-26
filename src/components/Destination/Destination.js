import './Destination.css';
import React, { useContext ,useState} from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useHistory} from 'react-router';

const Destination = () => {

      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      const [userPick, setUserPick] = useState({});
      const history = useHistory();
      console.log(history);

      let UserPickInfo={};
      let cont=0;
      const handleBlur = (event) => {
            let isPickTo = false;
            let isPickFrom= false;

            console.log(event.target.value);
            if (event.target.name === "PickFrom") {
              isPickFrom = event.target.value;
              isPickFrom =true;
              console.log(isPickFrom);
            }
            if (event.target.name === "PickTo") {
              isPickTo= event.target.value;
              isPickTo =true;

              console.log(isPickTo);
            }
            if (isPickTo || isPickFrom) {

                  UserPickInfo[event.target.name] = event.target.value; 
                  cont++;   
            }
            if(cont==2)
            {
            console.log("Hi");
            setUserPick(UserPickInfo);
            }
          }
     
      return (
            <div>
                  <h2>Welcome {loggedInUser.name}</h2>
                        <Container>
                              <Row>
                                    <Col>
                                          <div className="search-container">
                                                <form >
                                                      <h5 style={{ margin: '10px 0 0 15px', textAlign: 'left' }}>Pick From</h5>
                                                      <input style={{ marginTop: '10px', width: '90%' }} type="text" onBlur={handleBlur} name='PickFrom'  placeholder='Sylhet' />

                                                      <h5 style={{ margin: '10px 0 0 15px', textAlign: 'left' }}>Pick To</h5>
                                                      <input style={{ marginTop: '10px', width: '90%' }} type="text" onBlur={handleBlur} name='PickTo' placeholder='Dhaka' />

                                                      <button style={{ marginTop: '20px', border: 'none' }} onClick={()=>{history.push({pathname: '/destinationtimeline',
                                                      state: { detail: userPick }})}} className='submit-btn' type="submit">Search</button>

                                                </form>
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

export default Destination;