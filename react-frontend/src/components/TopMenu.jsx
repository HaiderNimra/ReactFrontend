import React from 'react';
import "../Styles/topMenu.css";
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import loginRequest from '../services/LoginRequests';
import {FiLogOut} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../store/authSlice';
import { useNavigate } from 'react-router';
//import { authActions } from '../store/authSlice';


const TopMenu = () => {
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state)=> state.auth)
  
  const onLogout = ()=> {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  }

    return ( 
        <div>
       
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       <Container>
       <Navbar.Brand href="#home">ReactApp</Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="me-auto">
       <Nav.Link href="/">Home</Nav.Link>
       <Nav.Link href="/users">Users</Nav.Link>
       <Nav.Link href="/contact-us">Contact Us</Nav.Link>
       </Nav>

 

{/* Previous react code from Services */}
        {!loginRequest.isLoggedIn()? <> <Nav>
        <Nav.Link href="/login">LogIn</Nav.Link>
        <Nav.Link href="/register">SignUp</Nav.Link>
        </Nav></>: 
        <Button variant='outline-secondary' 
        onClick={onLogout}>
        LogOut<FiLogOut/>
        </Button>
        }
      
    
        </Navbar.Collapse>
        </Container>
        </Navbar>
      
     
       </div>
        
     );
}
 
export default TopMenu;





// for the redux logout It not worked.. state was changes
// but reloading to initial state

// const isLoggedIn = useSelector(state=> state.auth.isLoggedIn);
  // console.log(isLoggedIn);

  // const dispatch = useDispatch();

  // const handleLogout =(e)=> {

  //     //dispatch
  //     dispatch(authActions.logout());

  // }

  
  // {!isLoggedIn &&
  //   <Nav>
  //     <Nav.Link href="/login">LogIn</Nav.Link>
  //     <Nav.Link href="/register">SignUp</Nav.Link>
  //   </Nav>
  //   }
  //   {isLoggedIn &&
  //   <Button variant='outline-secondary' 
  //   onClick= {(e) => {dispatch(authActions.logout);
  //   window.location.reload();}}>
  //     LogOut<FiLogOut/>
  //     </Button>
  //     }