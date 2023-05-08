import { NavLink } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
        <div className="registerwrapper">
            <h1>Signup</h1>
            <form action="">
                  <div className="registerleft">
                    <div className="registerItem">
                        <label htmlFor="username">Username</label>
                          <input type="text" name="" id="" placeholder="Enter your name " />
                    </div>
                      <div className="registerItem">
                          <label htmlFor="username">Username</label>
                          <input type="text" name="" id="" placeholder="Enter your name " />
                      </div>
                      <div className="registerItem">
                          <label htmlFor="username">Username</label>
                          <input type="text" name="" id="" placeholder="Enter your name " />
                      </div>
                      <div className="registerItem">
                          <label htmlFor="username">Username</label>
                          <input type="text" name="" id="" placeholder="Enter your name " />
                      </div>
                    
                  </div>
                  <div className="registerright">
                      <div className="registerItem">
                          <label htmlFor="username">Username</label>
                          <input type="text" name="" id="" placeholder="Enter your name " />
                      </div>
                      <div className="registerItem">
                          <label htmlFor="username">Username</label>
                          <input type="text" name="" id="" placeholder="Enter your name " />
                      </div>
                      <div className="registerItem">
                          <label htmlFor="username">Username</label>
                          <input type="text" name="" id="" placeholder="Enter your name " />
                         <button>Submit</button>
                      </div>
                  </div>
            </form>
            <p>Already Registerd ? <NavLink to="/login">Login </NavLink></p>
        </div>
    </div>
  )
}

export default Register