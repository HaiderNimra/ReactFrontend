import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch , useSelector} from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { sendOtp, reset } from '../store/ChangePassSlice';
import "../Styles/topMenu.css";
import Spinner from './Spinner';

const ChangePass = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {otp, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.ChangePass
    ) 

    const [email, setEmail]= React.useState("");
    const [Otp, setOtp]= React.useState("");
    React.useEffect(()=>{
        if(isError) {
            toast.error(message)
        }
        if(isSuccess || otp){
            toast.success("Changed Pass");
             navigate('/');
        }

        dispatch(reset());

    }, [otp, isError, isSuccess, message, navigate, dispatch])

    const handleClick = (e) => {
        e.preventDefault();
        
        const userData={ 
          email  
        }
        
        dispatch(sendOtp(userData));
    }

    if(isLoading) {
        return <Spinner/>
    }

    return ( 
        <div>
            <Container className='pages'>
                <h1>Change Password</h1>
            <Form>
            <Form.Group className="mb-3 pages" controlId="formBasicEmail">
            <Form.Label>OTP</Form.Label>
            <Form.Control placeholder="Enter OTP" 
            value={Otp} onChange={(e)=>{setOtp(e.target.value);}}/>
            </Form.Group>
            <Button variant="primary" onClick={handleClick}>
             Confirm
            </Button>
            </Form>
            <Button variant="secondary" onClick={()=>{navigate('/')}}>Back </Button>
            </Container>
        </div>
     );
}
 
export default ChangePass;