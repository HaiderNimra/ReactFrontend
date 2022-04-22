import React from 'react';
import SingleUser from './SingleUser';
import {Container, Button} from 'react-bootstrap';
import "../../Styles/topMenu.css";
import {RiUserAddLine} from 'react-icons/ri';
import userRequest from '../../services/UserRequests';
import { useNavigate } from 'react-router-dom';


const User = (props) => {

    const [users, setUsers]=React.useState([]);
    const navigate= useNavigate();
    const getData=()=> {
        userRequest
        .getUser()
        .then((data)=>{
            setUsers(data);
        })
        .catch((err)=> {
            console.log(err);
        })
    };
    React.useEffect(getData, []);
    //Inside User Component
    const handleNewUserClick = () =>{
        console.log(props);
        navigate('/register'); 
    }; 


    return ( 
    <div className='pages'> 
       <Container>
        <h1>List of Users <Button variant="success" onClick={handleNewUserClick}> <RiUserAddLine /> </Button> </h1>
        <Button variant="secondary" onClick={()=>{navigate('/')}}>Back </Button> 
        
        { users.length===0 ? <p>No User</p> : <div> {users.map ((user, index) => ( <SingleUser key={index} user={user} onDelete={getData}/> ))}</div>}
       
        
        </Container>
       
    </div>  
    );
}
 
export default User;