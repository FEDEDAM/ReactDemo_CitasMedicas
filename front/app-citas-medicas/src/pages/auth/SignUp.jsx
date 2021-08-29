import React , { useState , useEffect } from 'react'
import { FaGoogle , FaFacebook , FaGithub } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
import useUser from '../../hooks/useUser'




const Signin = () => {

    const [ userName , setUserName ] = useState( '' );
    const [ password , setPassword ] = useState( '' );
    const [ email , setEmail ] = useState( '' );
    const { signUp , isLogged , isLoginLoading , hasLoginErrors } = useUser();
    const navigate = useHistory();

    useEffect(() => {
        if( isLogged ){
            console.log( "The user is logged." );
            navigate.push( "/home" );
        }
    } , [ isLogged , navigate ] );

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp({ email , userName  , password });
    }

    return (
        <div>
            <div className="container">
                <h3>Sign-Up Citas Médicas</h3>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia odio nisi totam.
                </span>
                { isLoginLoading && <span>Checking credentials...</span>}
                { !isLoginLoading &&
                <form onSubmit = { handleSubmit } >
                    <div className = "form-group">
                        <input id = "email"
                            name = "email" 
                            type = "email" 
                            className = { email === "" ? "form-control" : "form-control setted-ctrl" }
                            onChange = { ({ target }) => setEmail( target.value ) }
                        />
                        <label className = { email === "" ? "form-label" : "form-label setted-lbl" } >Email *</label>
                    </div>
                    <div className = "form-group">
                        <input id = "user"
                            name="user" 
                            type = "text" 
                            className = { userName === "" ? "form-control" : "form-control setted-ctrl" }
                            onChange = { ({ target }) => setUserName( target.value ) }
                        />
                        <label className = { userName === "" ? "form-label" : "form-label setted-lbl" } >User *</label>
                    </div>
                    <div className = "form-group">
                        <input id = "password"
                            name = "password" 
                            type = "password" 
                            className = { password === "" ? "form-control" : "form-control setted-ctrl" }
                            onChange = { ({ target }) => setPassword( target.value ) }
                        />
                        <label className = { password === "" ? "form-label" : "form-label setted-lbl" } >Password *</label>
                    </div>

                    <button>Register</button>
                    { hasLoginErrors && <span>Error to process form's fields. Please, check the values and try again!</span>}
                </form>
                }
                

                <span className = "login-rrss-separator">- You can also sign-up with -</span>
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
