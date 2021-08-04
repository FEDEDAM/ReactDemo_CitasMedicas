import React , { useState } from 'react'
import LogIn from './LogIn'
import SignIn from './SignIn'
import './Logger.css'

const ACTIONS = {
    login: 
    {
        action: "LogIn",
        altMsg: "If you don't have account yet, don't dude it ",
        altAct: "SingIn!"
    }
    ,signin: 
    {
        action: "SignIn",
        altMsg: "If you have account, please ",
        altAct: "LogIn!"
    }
}

const Logger = () => {

 
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
                : <SignIn />
            }

            <span>
                { formAction.altMsg }
                <button onClick = { handleToogleAction } > { formAction.altAct } </button>
            </span>

        </section>
    )
}

export default Logger
