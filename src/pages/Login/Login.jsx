import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';


const Login = () => {

    const { state } = useLocation();

    const { signInUser, loginWithGoogle } = useContext(AuthContext);

    const handleClickLogin = (e) => {

        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Login successful");
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })

    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success("Login with Google successful");
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })

    }

    return (
        <div className="hero min-h-screen bg-rose-100 rounded-md">

            <div><Toaster /></div>

            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">

                    {state ? <h1 className="text-3xl font-bold"> {state.message}</h1> : <h1 className="text-3xl font-bold">Login now!</h1>}

                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleClickLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn bg-rose-400 text-white" />
                        </div>
                    </form>
                </div>

                <div>
                    <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
                        <FaGoogle></FaGoogle>
                        Google Login
                    </button>
                </div>

                <div>
                    <p>New here? Please <Link className="font-bold text-rose-400" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;