import React from 'react';

import { withAuthentication } from '../../Session';
import { compose } from 'recompose';
import * as ROUTES from '../../../pages/routes';


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
    this.setState(prevState => ({
      ...prevState,
      [target.name]: target.value
    }));
  }

  onLoginSubmit = (event) => {
    const { email, password } = this.state;
    this.props.firebase.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          email: "",
          password: "",
        });
        this.props.history.push(ROUTES.ADMIN);
      })
      .catch(error => {
        this.setState(prevState => ({
          ...prevState,
          error: error,
        }));
      });
    
    event.preventDefault();
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <div className="admin-auth container">
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
              value={email}
              onChange={this.onEmailPasswordChange}
            />
            <label htmlFor="admin-page-auth-password">Password</label>
            <input
              id="admin-page-auth-password"
              type="password"
              name="password"
              value={password}
              onChange={this.onEmailPasswordChange}
            />
            <button type="submit"> Login </button>
          </form>
        </div>
        { error ? error.message : null }
      </div>
    )
  }

}

export default compose(
  withAuthentication
)(AdminAuth);