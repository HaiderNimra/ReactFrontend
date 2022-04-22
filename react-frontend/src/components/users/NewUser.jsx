import React from 'react';
import axios from 'axios';
import { Container,InputGroup,FormControl, Button } from 'react-bootstrap';
import userRequest from '../../services/UserRequests';

const NewUser = (props) => {

    const [name, setName]=React.useState("");
    const [email, setEmail]=React.useState("");
    const [role, setRole]=React.useState("");
    const [pass, setPass]=React.useState("");

    return (
        <div>
        <Container>
            <h1>User Registration</h1>
            <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default" >Name</InputGroup.Text>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={name} 
            onChange={(e)=>{setName(e.target.value);}}
             />
            </InputGroup>
            <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default" >Email</InputGroup.Text>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={email}
            onChange={(e)=>{setEmail(e.target.value);}}
             />
            </InputGroup>
            <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default" >Role</InputGroup.Text>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={role}
            onChange={(e)=>{setRole(e.target.value);}}
             />
            </InputGroup>
            <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default" >Password</InputGroup.Text>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={pass}
            onChange={(e)=>{setPass(e.target.value);}}
             />
            </InputGroup>
            <Button variant="primary" type="submit" onClick={(e)=>{console.log("send api call");
            //userRequest.addUser();
            axios.post("http://localhost:4000/users/register", {name, email, role, pass})
            .then((res)=>{console.log(res.data);})
            .catch((err)=>{console.log(err);})
            }}> 
            Register
            </Button>
        </Container>
        </div>
      );
}
 
export default NewUser;   