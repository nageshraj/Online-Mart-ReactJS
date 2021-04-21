import React, { useState } from 'react'
import './Login.css'
import {Link,useHistory} from "react-router-dom"
import {auth} from "./firebase"

function Login() {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password).
        then(auth => {
            history.push('/')
        }). catch(Error => alert(Error.message))
        
        //test123@gmail.com nageshraj24
    }

    const register = e => {
        e.preventDefault();

        
        auth.createUserWithEmailAndPassword(email,password).then
        ((auth) =>{
            // succesfully created new user
            console.log(auth);
            if (auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className='Login'>
            <Link to= '/'>
                <img className="Login__logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG4n7eVtvck0TeekFE_ZY_Pb-nYn7iQpRaqQ&usqp=CAU' />
            </Link>

            <div className='Login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e=> setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=> setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}
                    className='Login__signInButton'>Sign In</button> 

                </form>
                

                <button onClick={register}
                className='Login__registerButton'> Create New Account</button>
            </div>
        </div>
    )
}

export default Login
