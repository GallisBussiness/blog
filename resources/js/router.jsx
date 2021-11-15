import React, { useEffect } from 'react'
import {Routes, Route  } from 'react-router-dom'
import Blog from './components/Blog'
import Home from './components/Home'
import { useLocation } from 'react-router';


function RouterConf() {
    const {pathname} = useLocation()
    
    useEffect(() => {
        window.scrollTo({top:0})
        return () => null;
    }, [pathname])
    return (
        <>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
        </>
    )
}

export default RouterConf
