import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import auth from "../../firebase/firebase.init";

const SignIn = () => {
    const emailRef = useRef(null)
    const [success, setSuccess] = useState(false)
    const [user, setUser] = useState('')
    const [error, setError] = useState('')

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setSuccess(false)
        setError('')

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                setSuccess(true)
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
                setSuccess(false)
            })
    }

    const handleRestPassword = () => {
        console.log('Forget password')
        const email = emailRef.current.value;
        // rest password formula

        if (!email) {
            console.log('Verified email sent')
        }
        else{
            sendPasswordResetEmail(auth , email)
            .then(() => alert('Verification email sent'))
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    {
                        user && <h1 className="text-5xl font-bold">{user.displayName}</h1>
                    }
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignIn} className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" name="email" placeholder="Email" required />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" ref={emailRef} name="password" placeholder="Password" required />
                            <div><a className="link link-hover" onClick={handleRestPassword}>Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                        {
                            success && <p className="text-xl font-black text-green-400 my-3">Log In Successfull</p>
                        }
                        {
                            error && <p className="text-xl font-bold text-red-500 my-0.5">{error}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

SignIn.propTypes = {}

export default SignIn