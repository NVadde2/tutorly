import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginView() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const clientId = '648126638686-jl6on0bbfsbpatfro1d42guv0596fj7o.apps.googleusercontent.com';

    useEffect(() => {
        const initClient = () => {
              gapi.client.init({
              clientId: clientId,
              scope: ''
            });
         };
         gapi.load('client:auth2', initClient);
     });

     const onSuccess = (res) => {
        console.log('success:', res);
        alert("Login Success")
    };
    const onFailure = (err) => {
        console.log('failed:', err);
        alert("Login Failed")
    };

    const login = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate('/teach')
        })
        .catch(err => setError(err.message))
      }

    return(
        <div>
            <h1>Login</h1>
            <p></p>
            <Form onSubmit={login} name='login_form'>
                <Form.Control 
                type='email' 
                value={email}
                required
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}/>

                <Form.Control 
                    type='password'
                    value={password}
                    required
                    placeholder='Enter your password'
                    onChange={e => setPassword(e.target.value)}/>

                <Button type='submit'>Login</Button>
            </Form>

            <p>OR CONTINUE WITH GOOGLE</p>
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
            <p>New to Tutorly? 
                <Link to='/register'>Join now</Link>
            </p>
        </div>
    );
}

export default LoginView;