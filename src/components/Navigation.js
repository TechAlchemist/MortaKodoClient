import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation( {user, handleLogout} ) {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='/'>Morta Kodo</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarScroll' aria-controls='navbarScroll' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarScroll'>
                <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
                    <li className='nav-item'>
                        <a className='nav-link' aria-current='page' href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' aria-current='page' href='/'>Programming</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' aria-current='page' href='/'>Tech Concepts</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' aria-current='page' href='/'>Blog Updates</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' aria-current='page' href='/'>Events</a>
                    </li>
                    {
                    user
                    ?
                    <>
                        <li className='nav-item'>
                            <a className='nav-link' href='/'>{user.firstName}'s Profile </a>
                        </li>
                        <li className='nav-item'>
                            <Link to='' className='nav-link' onClick={ handleLogout } > Logout </Link>
                        </li>
                    </>

                    :
                    <>
                        <li className='nav-item'>
                            <a className='nav-link' href='/signup'>Sign Up</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/login'>Login</a>
                        </li>
                    </>
                    }
                </ul>
                </div>
            </div>
        </nav>
    );
}

