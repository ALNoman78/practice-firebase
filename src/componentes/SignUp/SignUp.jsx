const SignUp = () => {
    const handleSignUp = (e) => {
        const username = e.target.username.value;
        const password = e.target.password.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;

        console.log(username , password , email , photoURL , "Moule")
    }
    return (
        <div>
            <form onSubmit={handleSignUp}  className="fieldset md:w-[440px] my-8 bg-base-200 border border-base-300 p-4 rounded-box">
                <legend className="fieldset-legend text-2xl font-medium">Sign Up</legend>

                <label className="fieldset-label">Name</label>
                <input type="text" className="input w-full" placeholder="My awesome page" name="username" required />

                <p className="fieldset-label">Photo Link</p>
                <label className="input w-full">
                    <span className="label">https://</span>
                    <input type="text" className="w-full" placeholder="URL" name="photoURL" required />
                </label>

                <label className="fieldset-label">Email</label>
                <input type="text" className="input w-full" placeholder="my-awesome-page" name="email" required/>

                <label className="fieldset-label">Password</label>
                <input type="text" className="input w-full" placeholder="Password" name="password" required />

                <button  className="btn btn-neutral mt-4">Login</button>
            </form>
        </div>
    );
};

export default SignUp;