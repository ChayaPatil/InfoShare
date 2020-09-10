import React from 'react'
import { connect } from 'react-redux'
import {BrowserRouter, Route, Link, Switch}  from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard'

function App(props){
  return(
    <BrowserRouter>
      {Object.keys(props.user).length == 0 ? (
        <Dashboard />
      ) : (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">INFO SHARE</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
      )}
      
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return{
    user: []
  }
}
export default connect(mapStateToProps)(App)