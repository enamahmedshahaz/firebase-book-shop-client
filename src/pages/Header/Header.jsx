import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const Header = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleClickLogout = () => {

        signOutUser()
            .then(() => {
                toast.success(" Sign-out successful");
            })
            .catch(error => {
                toast.error(error);
            });
    }

    return (

        <div className="navbar bg-base-300 mt-2 rounded-lg">

            <Toaster></Toaster>

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink className={({ isActive }) => (isActive ? "text-rose-600 font-bold " : "text-black")} to={"/"}>  <li>Home</li></NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "text-rose-600 font-bold " : "text-black")} to={"/products"}><li>Products</li></NavLink>
                    </ul>
                </div>

                <NavLink className="btn btn-ghost text-xl text-rose-400" to={'/'}>Firebase Book Shop</NavLink>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-3 text-lg">
                    <NavLink className={({ isActive }) => (isActive ? "text-rose-600 font-bold " : "text-black")} to={"/"}> <li>Home</li></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "text-rose-600 font-bold " : "text-black")} to={"/products"}><li>Products</li></NavLink>
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <>
                            <p className=""> <span className="font-bold">Welcome</span> {user?.displayName}</p>
                            <a onClick={handleClickLogout} className="btn bg-rose-400 text-white ml-3">Logout</a>
                        </>
                        :
                        <Link to={'/login'}>   <button className="btn bg-rose-400 text-white">Sign In</button> </Link>


                }



            </div>
        </div>
    );
};

export default Header;