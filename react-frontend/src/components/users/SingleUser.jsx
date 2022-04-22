import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {BiEdit} from 'react-icons/bi';
import userRequest from '../../services/UserRequests';
import withRouter from '../../components/withRouter';
import { useNavigate } from 'react-router';


const SingleUser = (props) => {
  const {user, onDelete}=props;
  const navigate = useNavigate();
    return (  
        <div>
            <Container>
            <Row>
                <Col md={6}>
                <h3>Name: {user.name}{"     "}
            <RiDeleteBin6Line onClick={(e) => {
            userRequest
              .deleteUser(user._id)
              .then((data) => {
                console.log(data);
                onDelete();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
          
          />
           {"    "} 
          <BiEdit onClick={(e)=>{navigate('/users/update/'+user._id)}}/>
            </h3>
            <h6>Role: {user.role}</h6>
            <p>Email: {user.email}</p>
            <hr />
                </Col>
            
            </Row>
            </Container>
        </div>
    );
}
 
export default withRouter(SingleUser);