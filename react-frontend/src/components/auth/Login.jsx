import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch , useSelector} from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Spinner from '../Spinner';
import { login, reset } from '../../store/authSlice';
import "../../Styles/topMenu.css";



const Login = (props) => {
     
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    ) 

    const [email, setEmail]= React.useState("");
    const [pass, setPass]= React.useState("");


    React.useEffect(()=>{
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
            email, pass,
        }
        
        dispatch(login(userData));
    }

    if(isLoading) {
        return <Spinner/>
    }

   

    return (  
        <div>
            <Container className='pages'>
                <h1>User LogIn</h1>
            <Form>
            <Form.Group className="mb-3 pages" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            value={email} onChange={(e)=>{setEmail(e.target.value);}}/>

            <Form.Text className="text-muted">
             We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="Password" 
            value={pass} onChange={(e)=>{setPass(e.target.value);}}/>
            </Form.Group>
            <Button variant="primary" onClick={handleClick}
            >
             LogIn
            </Button>
            <Button variant="secondary" onClick={()=>{navigate('/')}}>Back </Button>
            </Form>

            <a href='/users/forget-pass'>Forget Password?</a>
            </Container>
        </div>
    );
}
 
export default Login;


// the code which is not used and changed

//import { authActions } from '../../store/authSlice';

// const dispatch = useDispatch();
    // const handleSubmit =(e)=> {
    //     e.preventDefault();
    //     //dispatch
    //     dispatch(authActions.login());

    // }


 // accessing login from loginRequest
    //     loginRequest
        //     .login(email, pass)
        //     .then((data)=>{console.log(data);
        //     window.location.href="/";
        //  })
        //     .catch((err)=>{console.log(err);})
        
        // }


// was in login Function

 // console.log("logIn");
        //         axios.post("http://localhost:4000/users/login", {email, pass})
        //         .then((token)=> {
        //             localStorage.setItem("token", token);
        //             console.log(token);
        //             window.location.href='/';
        //         })
        //         .catch((err)=>{console.log(err);})


         // const login=(e)=>{
    //    e.preventDefault();
    //     const userData={
    //         email,
    //         pass
    //     }

    //     dispatch(login(userData));
            
        
    // }