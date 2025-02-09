import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
    return (
        <>
        <div className='Signup-div'>
            <form className='Signup-form'>
                <center><h2>Sign up</h2></center>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder='Username' required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder='Email' required />
                <br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder='Password' required />
                <br />
                <label htmlFor="confirm_password">Confirm Password:</label>
                <input type="password" id="confirm_password" name="confirm_password" placeholder='Confirm Password' required />
                <br />

                <button type="submit">Sign up</button>
                <center><p>Already have an account? <Link to="/login">Login</Link></p></center>
            </form>
        </div>
        </>
    );
}

export default SignUp;
