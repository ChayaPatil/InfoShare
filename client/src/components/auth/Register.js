import React from 'react'
import {connect} from 'react-redux'
import {startLoginUser} from '../../actions/userAction'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()

      const formData = {
        username : this.state.username,
        email : this.state.email,
        password : this.state.password
      }
      console.log(formData)
      this.props.dispatch(startLoginUser(formData))
    }

    render(){
      return(
        <form onSubmit={this.handleSubmit} class="needs-validation" novalidate>
        <h2>Register</h2>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" 
            class="form-control" 
            id="email" 
            name="email" 
            placeholder="Enter your Email"
            value={this.state.email}
            onChange={this.handleChange}
            required />
            <div class="invalid-feedback">
        Looks good!
      </div>
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" 
            class="form-control" 
            id="username" 
            name="username" 
            placeholder="Enter your Username"
            value={this.state.username}
            onChange={this.handleChange} />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" 
            class="form-control" 
            id="password" 
            name="password" 
            placeholder="Enter your Password"
            value={this.state.password}
            onChange={this.handleChange} />
          </div>
          <div class="form-group float-right">
            <button type="" class="btn btn-light">Cancel</button>&nbsp;&nbsp;
            <button type="submit" class="btn btn-danger">Submit</button>
          </div>
        </form>
      )
    }
}

export default connect()(Register)