import React from "react";
import { Link } from "react-router-dom";

const Login =()=> {
    return(
        <>
        <div className="container">
	    <div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
				
			</div>
			<div className="card-body">
				<form>
					<div className="input">
						
						<input type="text" className="" placeholder="username"/>
						
					</div>
					<div className="input">
						
						<input type="password" className="" placeholder="password"/>
					</div>
					<div className="row  remember">
						<input type="checkbox"/>Remember Me
					</div>
					<div className="form-group">
						<input type="submit" value="Login" className=" login-btn btn-primary"/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<Link to="signup">Sign Up</Link>
				</div>
				<div className="d-flex justify-content-center">
					<Link to="signup">Forgot your password?</Link>
				</div>
			</div>
		</div>
	</div>
</div>
        </>
    )
}

export default Login;