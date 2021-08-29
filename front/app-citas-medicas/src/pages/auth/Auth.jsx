import React , { useState } from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
import './Auth.css'

const ACTIONS = {
    login: 
    {
        action: "LogIn",
        altMsg: "If you don't have account yet, don't dude it ",
        altAct: "SingUp!"
    }
    ,signin: 
    {
        action: "SignIn",
        altMsg: "If you have account, please ",
        altAct: "LogIn!"
    }
}

const Auth = () => {

 
    const [ formAction , setAction ] = useState( ACTIONS.login )

    const handleToogleAction = () => {
        formAction.action === 'LogIn' 
            ? setAction( ACTIONS.signin )
            : setAction( ACTIONS.login )
    }

    return (
        <section id="login">

            {
            formAction.action === 'LogIn' 
                ? <LogIn /> 
                : <SignUp />
            }

            <span>
                { formAction.altMsg }
                <button onClick = { handleToogleAction } > { formAction.altAct } </button>
            </span>

        </section>
    )
}

export default Auth
