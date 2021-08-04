import React , { useState } from 'react'
import { FaGoogle , FaFacebook , FaGithub } from 'react-icons/fa'

const Signin = () => {

    const [ userName , setUserName ] = useState( '' );
    const [ password , setPassword ] = useState( '' );
    const [ email , setEmail ] = useState( '' );
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email , userName  , password });
    }

    return (
        <div>
            <div className="container">
                <h3>Sign-In Citas Médicas</h3>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia odio nisi totam.
                </span>
                <form onSubmit = { handleSubmit } >
                    <div className = "form-group">
                        <input id = "email"
                            name = "email" 
                            type = "email" 
                            className = { email === "" ? "form-control" : "form-control setted-ctrl" }
                            onChange = { ({ target }) => setEmail( target.value ) }
                        />
                        <label for="email" className = { email === "" ? "form-label" : "form-label setted-lbl" } >Email *</label>
                    </div>
                    <div className = "form-group">
                        <input id = "user"
                            name="user" 
                            type = "text" 
                            className = { userName === "" ? "form-control" : "form-control setted-ctrl" }
                            onChange = { ({ target }) => setUserName( target.value ) }
                        />
                        <label for="user" className = { userName === "" ? "form-label" : "form-label setted-lbl" } >User *</label>
                    </div>
                    <div className = "form-group">
                        <input id = "password"
                            name = "password" 
                            type = "password" 
                            className = { password === "" ? "form-control" : "form-control setted-ctrl" }
                            onChange = { ({ target }) => setPassword( target.value ) }
                        />
                        <label for="password" className = { password === "" ? "form-label" : "form-label setted-lbl" } >Password *</label>
                    </div>
                </form>

                <button>LogIn</button>

                <span className = "login-rrss-separator">- You can also sign-in with -</span>
                <div className="rsss-container">
                    <FaGoogle />
                    <FaFacebook />
                    <FaGithub />
                </div>
            </div>
        </div>
    )
}

export default Signin
