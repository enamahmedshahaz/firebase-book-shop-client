import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="navbar bg-base-300 mt-2 rounded-lg">
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
                        <NavLink className={({ isActive }) => (isActive ? "text-rose-600 font-bold " : "text-black")} to={"/about"}>  <li>About</li></NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "text-rose-600 font-bold " : "text-black")} to={"/blog"}><li>Blog</li></NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "text-rose-600 font-bold " : "text-black")} to={"/faq"}><li>FAQ</li></NavLink>
                    </ul>
                </div>

                <NavLink className="btn btn-ghost text-xl text-rose-400" to={'/'}>Simple Book Shop</NavLink>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-3 text-lg">
                    <NavLink className={({ isActive }) => (isActive ? "text-rose-600 font-bold " : "text-black")} to={"/"}> <li>Home</li></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "text-rose-600 font-bold " : "text-black")} to={"/about"}>  <li>About</li></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "text-rose-600 font-bold " : "text-black")} to={"/blog"}><li>Blog</li></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "text-rose-600 font-bold " : "text-black")} to={"/faq"}><li>FAQ</li></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-rose-400 text-white">Buy Books</a>
                <a className="btn bg-rose-400 text-white">Sign In</a>
            </div>
        </div>
    );
};

export default Header;