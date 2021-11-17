require('./bootstrap');
import React from 'react'
import  ReactDOM  from 'react-dom';
import Footer from './components/Footer';
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router } from 'react-router-dom'
import RouterConf from './router';
import Navbar from './components/Navbar';

export default function App() {
   
    return (
        <>
        <ChakraProvider>
        <Router>
        <Navbar />
         <RouterConf />
         <Footer /> 
        </Router>
        
        </ChakraProvider>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
  );