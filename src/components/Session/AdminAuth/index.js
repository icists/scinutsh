import React from 'react';

import { withFirebase } from '../../Firebase';
import { withAuthentication } from '../../Session';
import { compose } from 'recompose';


class AdminAuth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
    };
  }

  onEmailPasswordChange = (event) => {
    const target = event.currentTarget;
    this.setState({
      [target.name] : target.value
    })

  }

  onLoginSubmit = () => {
    const { email, password } = this.state;
    console.log(email, password);
    this.props.firebase.doSignInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState(prevState => ({
          ...prevState,
          error: error,
        }));
      })
  }

  render() {
    return (
      <div className="admin-auth">
        <h3>
          Sign In
        </h3>
        <p>
          Please sign in as a admin :)
        </p>
        <div className="admin-page-auth">
          <form className="admin-page-auth-login" onSubmit={this.onLoginSubmit}>
            <label htmlFor="admin-page-auth-email">Email</label>
            <input
              id="admin-page-auth-email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.onEmailPasswordChange}
            />
            <label htmlFor="admin-page-auth-password">Password</label>
            <input
              id="admin-page-auth-password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onEmailPasswordChange}
            />
            <button type="submit"> Login </button>
          </form>
        </div>
        { this.state.error ? this.state.error.message : null }
      </div>
    )
  }

}

export default compose(
  withAuthentication
)(AdminAuth);