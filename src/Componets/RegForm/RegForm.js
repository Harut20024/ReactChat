import React, { useState } from 'react';

function RegForm({ usersData, setUsersData, setPage }) {
    const [regInfo, setRegInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [error, setError] = useState('');

    function handleChange(e) {
        setRegInfo({
            ...regInfo,
            [e.target.name]: e.target.value
        });
    }

    function isEmailValid(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!regInfo.name || !regInfo.email || !regInfo.password) {
            setError('All fields are required.');
            return;
        }

        if (!isEmailValid(regInfo.email)) {
            setError('Invalid email address.');
            return;
        }

        setUsersData([
            ...usersData,
            {
                ...regInfo
            }
        ]);
        setPage("log");
        setRegInfo({
            name: '',
            email: '',
            password: ''
        });
        setError('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={regInfo.name} placeholder='name' name='name' onChange={handleChange} />
            <input type='text' value={regInfo.email} placeholder='email' name='email' onChange={handleChange} />
            <input type='password' value={regInfo.password} placeholder='password' name='password' onChange={handleChange} />
            <button>Register</button>
            {error && <p>{error}</p>}
        </form>
    );
}

export default RegForm;
