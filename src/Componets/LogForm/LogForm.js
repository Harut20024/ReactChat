import React, { useRef } from 'react';

function LogForm({ usersData, setUserName,setPage}) {
    const formRef = useRef(null);

    function submit(e) {
        e.preventDefault();
        const email = formRef.current[0].value;
        const password = formRef.current[1].value;

        const userExists = usersData.find(user => user.email === email && user.password === password);
        if(userExists){
            setUserName(userExists)
            setPage("home")
            
        }
        formRef.current.reset()


    }

    return (
        <form ref={formRef} onSubmit={submit}>
            <input type='text' placeholder='email' name='email' />
            <input type='password' placeholder='password' name='password'  />
            <button>Login</button>
        </form>
    );
}

export default LogForm;
