import { NavLink } from "react-router-dom"
import "./login.scss"

const Login = () => {
  return (
    <div className="login">
        <div className="loginwrapper">
            <form action="">
                <h1>Sign in </h1>
                <input type="text"placeholder="Enter your Name" />
                  <input type="text" placeholder="Enter Your Email" />
                  <input type="password" placeholder="Password" />
                    <button>Submit</button>
            </form>
            <p>Don't have any account ? <NavLink to="/register">Register</NavLink></p>
        </div>
    </div>
  )
}

export default Login