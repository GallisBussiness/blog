import React from 'react'
import {Switch, Route  } from 'react-router-dom'
import Blog from './components/Blog'
import Home from './components/Home'

function RouterConf() {
    return (
        <>
         <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
        </Switch>
        </>
    )
}

export default RouterConf
