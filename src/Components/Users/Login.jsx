import { React } from "react";
import  "./Login.css";

const Login = () => {
  return (
        <div>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="/vite.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title> Login </title>
          <link rel="Loginsheet" href="./Login.css" />
          <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="Loginsheet" />
          <div id="root" />
          <div className="wrapper">
            <form action> 
              <h1>Login</h1>
              <style dangerouslySetInnerHTML={{__html: " h1 {font-size: 150px; } " }} />
              <div className="input-box">
                <input type="text" placeholder="Username" required />
                <i className="bx bxs-user" />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" required />
                <i className="bx bxs-lock-alt" />
              </div>
              <div className="remember-forgot">
                <label> <input type="checkbox" /> Remeber me </label>
                <a href="#"> Forgot password? </a>
              </div>
              <button type="submit" className="btn"> Login </button>
              <div className="register-link">
                <p> Don't have an account? <a href="#"> Register </a></p>
              </div>
            </form>
          </div>
        </div>
      );
    };

  export default Login;