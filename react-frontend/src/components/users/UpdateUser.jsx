import React from 'react';
import axios from 'axios';
import { Container,InputGroup,FormControl, Button } from 'react-bootstrap';
import userRequest from '../../services/UserRequests';
import { useParams } from 'react-router';

const UpdateUser = (props) => {

    const [name, setName]=React.useState("");
    const [email, setEmail]=React.useState("");
    const [role, setRole]=React.useState("");
    const [pass, setPass]=React.useState("");
    
    const {id}= useParams();

    React.useEffect(()=>{  
        userRequest.getSingleUser(id).then(data=>{
            setName(data.name);
            setEmail(data.email);
            setRole(data.role);
            setPass(data.pass);
        });
    }, []);
    console.log(name);
    return ( 
        <div>
            <Container>
            <h1>Edit User</h1>
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
             
            //userRequest.updateUser(id, {name, email, role, pass}).then((data)=> {console.log(data);})
            axios.patch("http://localhost:4000/users/"+id, {name, email, role, pass})
            .then((res)=>{console.log(res.data);})
            .catch((err)=>{console.log(err);})
            }}> 
            Update
            </Button>
        </Container>
        </div>
     );
}
 
export default UpdateUser;