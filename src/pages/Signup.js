import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../services/userService';
import LoginLogo from '../assets/loginLogo.gif';

export default function Signup(props) {

    const [ formState, setFormState ] = useState({
        firstName: '',
        lastName: '',
        bio: '',
        techSkills: [],
        email: '',
        password: '',
        passwordConfirmation: ''
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
            await signup(formState)
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
            <h1> Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-group mb-3'>
                    <span className='input-group-text' id='firstName-addon'><i className='bi bi-person'></i></span>
                    <input onChange={handleChange} value={formState.firstName} name='firstName' type='text' className='form-control' placeholder='first name' aria-label='firstName' aria-describedby='firstName-addon' />
                </div>

                <div className='input-group mb-3'>
                    <span className='input-group-text' id='lastName-addon'><i className='bi bi-person'></i></span>
                    <input onChange={handleChange} value={formState.lastName} name='lastName' type='text' className='form-control' placeholder='last name' aria-label='lastName' aria-describedby='lastName-addon' />
                </div>

                <div className='input-group mb-3'>
                    <span className='input-group-text' id='email-addon'><i className='bi bi-envelope'></i></span>
                    <input onChange={handleChange} value={formState.email} name='email' type='text' className='form-control' placeholder='email' aria-label='Email' aria-describedby='email-addon' />
                </div>

                <div className='input-group mb-3'>
                    <span className='input-group-text'><i className='bi bi-book'></i></span>
                    <textarea onChange={handleChange} value={formState.bio} name='bio' className='form-control' aria-label='bio' placeholder='biography'></textarea>
                </div>

                <div className='input-group mb-3'>
                    <span className='input-group-text' id='password-addon'><i className='bi bi-key'></i></span>
                    <input onChange={handleChange} value={formState.password} name='password' type='password' className='form-control' placeholder='password' aria-label='Password' aria-describedby='password-addon' />
                </div>
                
                <div className='input-group mb-3'>
                    <span className='input-group-text' id='password-confirmation-addon'><i className='bi bi-key'></i></span>
                    <input onChange={handleChange} value={formState.passwordConfirmation} name='passwordConfirmation' type='password' className='form-control' placeholder='password confirmation' aria-label='Password Confirmation' aria-describedby='password-confirmation-addon' />
                </div>

                <div className='input-group mb-3'>
                    <button 
                        disabled={!formValid()} 
                        value='Signup' 
                        className='btn btn-success'>
                        Sign Up
                    </button>
                    &nbsp;&nbsp;
                    <Link to='/'><button className='btn btn-secondary'>Cancel</button></Link>
                </div>
            </form>
        </div>
    );
}