import React from 'react';
import {Container} from './WraperElements';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from '../../styles/globalStyles';
import Navbar from '../Navbars/Navbar';

const Wraper = ({children,navbutton}) => {


return (
    <Container>
        <Router>
        <GlobalStyle />
        <Navbar navbutton={navbutton}/>
            {children}
        </Router>
    </Container>
)
}

export default Wraper;