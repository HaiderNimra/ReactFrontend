import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch , useSelector} from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { sendOtp, reset } from '../store/ChangePassSlice';
import "../Styles/topMenu.css";
import Spinner from './Spinner';

const ForgetPass = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {otp, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.ChangePass
    ) 

    const [email, setEmail]= React.useState("");
    React.useEffect(()=>{
        if(isError) {
            toast.error(message)
        }
        if(isSuccess || otp){
            toast.success("otp");
             navigate('/users/change-pass');
        }

        dispatch(reset());

    }, [otp, isError, isSuccess, message, navigate, dispatch])

    const handleClick = (e) => {
        e.preventDefault();
        
        const userData={ 
            email,
        }
        
        dispatch(sendOtp(userData));
    }

    if(isLoading) {
        return <Spinner/>
    }

    return ( 
        <div>
            <Container className='pages'>
                <h1>Forget Password</h1>
            <Form>
            <Form.Group className="mb-3 pages" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            value={email} onChange={(e)=>{setEmail(e.target.value);}}/>
            </Form.Group>
            <Button variant="primary" onClick={handleClick}
            >
             Send Mail
            </Button>
            </Form>
            <Button variant="secondary" onClick={()=>{navigate('/')}}>Back </Button>
            </Container>
        </div>
     );
}
 
export default ForgetPass;