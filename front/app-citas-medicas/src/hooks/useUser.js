import { useCallback , useContext , useState } from 'react'
import Context from '../contexts/UserContext'
import loginService from '../services/LoginService'
import signUpService from '../services/SignUpService'

export default function useUser ()
{
    const { jwt , setJWT } = useContext( Context );
    const [ status , setStatus ] = useState({ loading: false , error: false });

    const login = useCallback(({ userName , password }) => {

        setStatus({ loading: true , error: false });

        loginService({ userName , password })
        .then( credentials => {
            const { token }  = credentials;
            setCredentialsInLocalStorage( credentials );
            setStatus({ loading: false , error: false });
            setJWT( token ); 
        })
        .catch( err => {
            removeCredentialsInLocalStorage();
            setStatus({ loading: false , error: true });
            console.log( err ) 
        });
        
    } , [ setJWT , setStatus ]);


    const signUp = useCallback(({ userName , password , email }) => {

        setStatus({ loading: true , error: false });

        signUpService({ userName , password , email })
        .then( credential => {
            const { token }  = credential;
            setCredentialsInLocalStorage( credential );
            setStatus({ loading: false , error: false });
            setJWT( token ); 
        })
        .catch( error => {
            removeCredentialsInLocalStorage();
            setStatus({ loading: false , error: true });
            console.log( error ) 
        });
        
    } , [ setJWT , setStatus ]);


    const logout = useCallback(() => {
        setJWT( null );
        removeCredentialsInLocalStorage();
    } , [ setJWT ]);


    const setCredentialsInLocalStorage = ( jsonCredentials ) => {
        window.sessionStorage.setItem( 'jwt' , jsonCredentials.token );
        window.sessionStorage.setItem( 'auth' , JSON.stringify( jsonCredentials.authorities ));
        window.sessionStorage.setItem( 'userName' , jsonCredentials.userName );
    }

    const removeCredentialsInLocalStorage = () => {
        window.sessionStorage.removeItem( 'jwt' );
        window.sessionStorage.removeItem( 'userName' );
        window.sessionStorage.removeItem( 'auth' );
    }


    return{
            isLogged: Boolean( jwt ),
            signUp,
            login,
            logout,
            isLoginLoading: status.loading,
            hasLoginErrors: status.error
        }
}