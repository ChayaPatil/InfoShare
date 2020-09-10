import React from 'react'
import admin from './admin3.jpg'
import './dashboard.css'
import Register from '../auth/Register'

class Dashboard extends React.Component{

    render(){
        return(
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-7" id="image">
                        
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-3" id="form">
                        <Register />
                    </div>
                    <div class="col-sm-1"></div>
                </div>
            </div>
        )
    }
}

export default Dashboard