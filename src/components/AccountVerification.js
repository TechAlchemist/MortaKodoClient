import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AccountVerification(props) {

    let { verificationCode } = useParams();

    const [verifStatus, setVerifStatus] = useState({status: 'failure'});

    useEffect(() => {
        fetch(
            `http://localhost:8080/api/v1/auth/verify/${verificationCode}`,
            {
                method: 'GET'
            }
        )
        .then(res => {
            if (res.ok) setVerifStatus({status: 'success'});
        })
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1> Account Verification </h1>
            {(verifStatus && verifStatus.status === 'success') 
            ? 
            <div className='container'> Congrats! Your account was successfully verified. You can like and comment now. 
                <br/> 
                <Link to='/'> 
                <button className='btn btn-primary'> Home </button> 
                </Link> 
                
            </div> 
            : 
            <div className='container'> Oh, no! Something went wrong. Account could not be verified. </div>}
        </div>
    );
}

export default AccountVerification;