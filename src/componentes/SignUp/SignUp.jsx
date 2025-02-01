import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { h3 } from "framer-motion/client";

const SignUp = () => {


    // const[user , setUser] = useState(null)
    const [error, setError] = useState('');
    const [isVisible, setIsVisible] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSignUp = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;

        console.log(username, password, email, photoURL, "Moule")
        setError('')
        setSuccess(false)

        // user create
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess(true)
                sendEmailVerification(auth.currentUser)
                    .then(res => console.log(res, 'Moule love you'))
                    .catch(error => console.log(error.message))
                // setUser()
            })
            .catch(error => {
                setError(error.message)
                setSuccess(false)
            })

        const profile = {
            name: username,
            photoURL: photoURL,
        }

        updateProfile(auth.currentUser, profile)
            .then(res => console.log('update profile'))
            .catch(error => console.log('user set error found'))
    }
    return (
        <div>
            <form onSubmit={handleSignUp} className="fieldset md:w-[440px] my-8 bg-base-200 border border-base-300 p-4 rounded-box">
                <legend className="fieldset-legend text-2xl font-medium">Sign Up</legend>

                <label className="fieldset-label">Name</label>
                <input type="text" className="input w-full" placeholder="Enter Your Name" name="username" required />

                <p className="fieldset-label">Photo Link</p>
                <label className="input w-full">
                    <span className="label">https://</span>
                    <input type="text" className="w-full" placeholder="URL" name="photoURL" required />
                </label>

                <label className="fieldset-label">Email</label>
                <input type="text" className="input w-full" placeholder="Email" name="email" required />

                <label className="fieldset-label">Password</label>
                {/* single password */}

                <label htmlFor='pass' className='text-sm font-normal'>
                    Password
                </label>
                <div className='relative mt-1'>
                    <input
                        type={isVisible ? 'text' : 'password'}
                        id='pass' name="password"
                        placeholder='Password'
                        className='bg-background w-full outline-none focus-within:border-blue-700 rounded-md p-2  border-2 '
                    />
                    <div
                        className='absolute top-3 right-4 text-2xl text-gray-500 cursor-pointer'
                        onClick={() => setIsVisible((prev) => !prev)}
                    >
                        {isVisible ? <Eye size={22} /> : <EyeOff size={22} />}
                    </div>
                </div>

                {/* modal start */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box justify-center">
                    {
                            error && <h3 className="font-bold text-lg">{error}</h3>
                        }
                        {
                            success && <h3 className="font-bold text-lg">Successfully Sign Up</h3>
                        }
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
                {/* modal end */}

                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-neutral mt-4">Login</button>
            </form>
        </div>
    );
};

export default SignUp;