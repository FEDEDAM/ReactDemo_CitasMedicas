import React , { useState , useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaGoogle , FaFacebook , FaGithub } from 'react-icons/fa';
import useUser from '../../hooks/useUser'

const LogIn = () => {
    
    const [ userName , setUserName ]  = useState( '' );
    const [ password , setPassword ] = useState( '' );
    const navigate = useHistory();
    const { login , isLogged , isLoginLoading , hasLoginErrors } = useUser();

    useEffect(() => {
        if( isLogged ){
            console.log( "The user is logged." );
            navigate.push( "/home" );
        }
    } , [ isLogged , navigate ] );
    
    const handleSubmit = (e) => {
        e.preventDefault();
        login({ userName , password });
    }

    return (
        <div>
            <div className="container">
                <h3>Login Citas Médicas</h3>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia odio nisi totam.
                </span>

                { isLoginLoading && <span>Checking credentials...</span>}
                { !isLoginLoading &&
                <form onSubmit = { handleSubmit } >
                    <div className = "form-group">
                        <input id = "user"
                            name="user" 
                            type = "text" 
                            className = { userName === "" ? "form-control" : "form-control setted-ctrl" }
                            onChange = { ({ target }) => setUserName( target.value ) }
                        />
                        <label className = { userName === "" ? "form-label" : "form-label setted-lbl" } >User or email</label>
                    </div>
                    <div className = "form-group">
                        <input id = "password"
                            name = "password" 
                            type = "password" 
                            className = { password === "" ? "form-control" : "form-control setted-ctrl" }
                            onChange = { ({ target }) => setPassword( target.value ) }
                        />
                        <label className = { password === "" ? "form-label" : "form-label setted-lbl" } >Password</label>
                    </div>

                    <button>LogIn</button>
                    { hasLoginErrors && <span>Credentials invalid!</span>}
                </form>
                }
                <span className = "login-rrss-separator">- You can also login with -</span>
                <div className="rsss-container">
                    <FaGoogle />
                    <FaFacebook />
                    <FaGithub />
                </div>
            </div>
        </div>
    )
}

export default LogIn

