import React from "react";
import "./Login.Style.scss";
import styled from "styled-components";
export const Login = () => {
  return (
    <Container className="Login">
      <div className="Login-card">
        <div className="Login-heading">
          <span className="Login-welcome">
            Welcome to<strong> MAVEN</strong>
          </span>
          <span>
            <p>No Account ?</p>
            <a href="/signup">Signup</a>
          </span>
        </div>
        <div className="Login-input">
          <h1>Sign in</h1>
          <div className="data-input">
              <label > Email</label>
            <input type="email"  placeholder="example@mail.com" />
            <br />
            <label > Password</label>
            <input type="password"  placeholder="Password" />
          </div>
          <div className="Login-summit">
            <a href="#forgot">Forgot Password </a>

            <button type="summit"> Sign in</button>
          </div>
          <div className="Login-google">
              <span>Or continue with</span>
              <img src="/images/google.png" alt="google"/>

          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: url("/images/bg.png");
`;
