import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOprions = <>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><a>Item 3</a></li>
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-transparent rounded-box w-52">
                            {navOprions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-white">Bistro <span className='text-yellow-600'>Boss</span> <br /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOprions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-transparent">Get started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;