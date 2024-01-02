import React, { useState } from 'react'
import './App.css'
function App() {

    const [emailinfo, emailupdate] = useState({
        email: "",
        password: "",
    });
    const submitClick = () => {
        alert(`아이디는 ${emailinfo.email}이고 패스워드는 ${emailinfo.password}로 기입하셨습니다.`)
    }

    return (
        <div className='form_member'>
            <form action="#none">
                <h2>User Login</h2>
                <ul>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label><br />
                        <input type="text" required name='email'
                            value={emailinfo.email}
                            onChange={(e) => {
                                emailupdate({
                                    ...emailinfo,
                                    email: e.target.value
                                });

                            }} />
                    </li>
                    <li>
                        <label htmlFor="password">
                            Password
                        </label><br />
                        <input type="password" name='password' value={emailinfo.password} required
                            onChange={(e) => {
                                emailupdate({
                                    ...emailinfo,
                                    password: e.target.value
                                });
                            }} />
                    </li>
                </ul>
                <button type='submit' onClick={submitClick} >submit</button>
            </form>
        </div>
    )
}

export default App