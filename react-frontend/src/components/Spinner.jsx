import React from 'react';
import {Container} from 'react-bootstrap';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import "../Styles/topMenu.css";

const Spinner = () => {
    return (
        <div className='pages'>
        <Container>
        <h1><AiOutlineLoading3Quarters/></h1>
        </Container>
        </div>
      );
}
 
export default Spinner;