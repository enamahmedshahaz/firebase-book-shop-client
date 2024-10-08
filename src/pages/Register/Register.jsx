import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleClickRegister = (e) => {

        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');

        if (name.length == 0) {
            toast.error('Please enter your name');
            return;
        }

        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            toast.error('Email is not in valid format');
            return;
        }

        if (password.length < 6) {
            toast.error('Password length must me six or more');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            toast.error('Password must have a capital letter');
            return;
        }

        if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
            toast.error('Password must have one special char');
            return;
        }

        createUser(email, password)
            .then(user => {
                console.log(user);

                updateUserProfile(name)
                    .then(() => {
                        console.log('Profile update successful');
                    }).catch((error) => {
                        console.error(error);
                    });
                toast.success("Registration successful");
                // clear all input values in the form
                e.target.reset();

                navigate('/login', { state: { message: 'You can login now with your given email and password!' } });

            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            });

    }

    return (

        <div className="hero min-h-screen bg-rose-100 rounded-md">

            <div>
                <Toaster></Toaster>
            </div>

            <div className="hero-content flex-col">

                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold"> Register now!</h1>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleClickRegister} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>

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
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn  bg-rose-400 text-white" />
                        </div>
                    </form>
                </div>
                <div>
                    <p>Already registered? Please <Link className="font-bold text-rose-400" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;