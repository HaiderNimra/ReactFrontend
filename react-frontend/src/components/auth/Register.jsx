import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Container,InputGroup,FormControl, Button } from 'react-bootstrap';
import "../../Styles/topMenu.css"
import { register, reset } from '../../store/authSlice';
import Spinner from '../Spinner';

const NewUser = (props) => {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    )

    const [name, setName]=React.useState("");
    const [email, setEmail]=React.useState("");
    const [role, setRole]=React.useState("");
    const [pass, setPass]=React.useState(""); 

    useEffect(()=>{
        if(isError) {
            toast.error(message)
        }
        if(isSuccess || user){
             navigate('/');
        }

        dispatch(reset());

    }, [user, isError, isSuccess, message, navigate, dispatch])


    const handleClick = (e) => {
        e.preventDefault();
        
        const userData={
            name, 
            email, role, pass,
        }
        
        dispatch(register(userData));
    }


    if(isLoading) {
        return <Spinner/>
    }
    
    return (
        <div className='pages'>
        <Container>
            <h1 >User Registration</h1>
            <InputGroup className="mb-3 pages">
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
            <Button variant="primary" type="submit" onClick={handleClick}> 
            Register
            </Button>
            <Button variant="secondary" onClick={()=>{navigate('/')}}>Back </Button>
        </Container>
        </div>
      );
}
 
export default NewUser;   





//Comments

            //Button on Click which is replaced by redux

            // {(e)=>{console.log("send api call");
            // //userRequest.addUser();
            // axios.post("http://localhost:4000/users/register", {name, email, role, pass})
            // .then((res)=>{console.log(res.data);})
            // .catch((err)=>{console.log(err);})
            // }}