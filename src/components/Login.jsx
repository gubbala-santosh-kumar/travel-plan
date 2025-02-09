import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <>
        <div className='Login-div'>
            <form className='Login-form'>
                <center><h2>Login</h2></center>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder='Email' required/>
                <br/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder='Password' required/>
                <br/>
                <button type="submit">Login</button>
                <center><p>Don't have an account? Register here <Link to="/signup">Sign Up</Link></p></center>
            </form>
        </div>
        </>
    );
}

export default Login;
