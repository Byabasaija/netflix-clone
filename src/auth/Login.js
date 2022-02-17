import React from "react";
import { Link } from "react-router-dom";

const Login =({setEmail,setPassword, handleAction})=> {
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
						
						<input type="text" className="" placeholder="username" onChange={(e) => setEmail(e.target.value)}/>
						
					</div>
					<div className="input">
						
						<input type="password" className="" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
					</div>
					<div className="row  remember">
						<input type="checkbox"/>Remember Me
					</div>
					<div className="form-group">
						<input type="submit" value="Login" className=" login-btn btn-primary" onClick={handleAction}/>
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