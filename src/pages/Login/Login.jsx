import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import './Login.css';
import img from '../../assets/others/authentication2.png'
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';

const Login = () => {
    const captchaRef = useRef(null)
    const [disable, setDisable] = useState(true)

    const { signIn } = useContext(AuthContext);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }

    const handleValidateCaptcha = e => {
        const user_captcha_value = captchaRef.current.value;
        // console.log(value);
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false);
        }
    }
    return (
        <div className="hero min-h-screen bg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <img src={img} className='py-24' alt="" />
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                < LoadCanvasTemplate />
                            </label>
                            <input ref={captchaRef} type="text" name='captcha' placeholder="Type the captcha above" className="input input-bordered" />
                            <button onClick={handleValidateCaptcha} className='btn mt-4 btn-outline btn-xs '>Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disable} className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </form>
                     <button className="btn glass text-black"><small>New Here? <Link to="/signup" className='underline'>Create an account</Link> </small></button>
                </div>
            </div>
        </div>
    );
};

export default Login;