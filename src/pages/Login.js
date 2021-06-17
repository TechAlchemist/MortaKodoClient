import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../services/userService';
import LoginLogo from '../assets/loginLogo.gif';

export default function Login(props) {

    const [ formState, setFormState ] = useState({
        email: '',
        password: ''
    });

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault(); // disable default behavior
        if(!formValid()) return;  // make sure form is valid
        try {
            await login(formState)
            props.handleSignupOrLogin();
        } catch (error) {
            alert(error.message);
        }
    }

    function formValid() {
        return !!(formState.email && formState.password);
    }

    return (
            <div className='container'>
                <div className='row' id='login-logo-holder'>
                    <img className='img-fluid rounded-circle' id='loginLogo' src={LoginLogo} alt='Animated cracking of human school as various colors shift. Morta Kodo text beneath logo.' />
                </div>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="email-addon"><i className="bi bi-envelope"></i></span>
                    <input onChange={handleChange} value={formState.email} name='email' type="text" className="form-control" placeholder="email" aria-label="Email" aria-describedby="email-addon" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="password-addon"><i className="bi bi-key"></i></span>
                    <input onChange={handleChange} value={formState.password} name='password' type="password" className="form-control" placeholder="password" aria-label="Password" aria-describedby="password-addon" />
                </div>

                <div className='col-6 align-self-center'>
                    <button 
                        disabled={!formValid()} 
                        value="Login" 
                        className="btn btn-success">
                        Login
                    </button>
                    &nbsp;&nbsp;
                    <Link to="/"><button className='btn btn-secondary'>Cancel</button></Link>
                </div>
            </form>
        </div>
    );
}

