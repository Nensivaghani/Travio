import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import axios from 'axios';

const SignUp = () => {


    const name = useRef()
    const email = useRef()
    const password = useRef()
    const confirmpassword = useRef()

    const handleclick = (e) => {
        e.preventDefault()

        const obj = {
            "name": name.current.value,
            "email": email.current.value,
            "password": password.current.value,
            "confirm_password":confirmpassword.current.value,

            
        }
        axios.post('http://localhost:4000/insert', obj)
            .then(function (response) {
                console.log(response);


            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <>


            <div className="register-main row">


                <div className="item col-lg-6 col-md-12 col-sm-12">
                    <div className="img-content">
                        <img src="assets\img\register.jpg" alt="" /><div className="text-content">
                            <h3>Travio Tours</h3>
                            <p>Discover your next great adventure</p>
                        </div>
                    </div>

                </div>
                <div className="item col-lg-6 col-md-12 col-sm-12">
                    <div className="title">
                        <h3>Sign up</h3>
                    </div>

                    <form method='post' onClick={handleclick}>
                        <div className="form-group">
                            <input type="text"  name='name' ref={name} required />
                            <label htmlFor="">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" name='email' ref={email} required />
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="form-group">
                            <input type="password" name='password' ref={password} required />
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="form-group">
                            <input type="password" name=' confirm_password' ref={confirmpassword}  required />
                            <label htmlFor="">Confirm Password</label>
                        </div>

                        <div className="accept">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">I accept <Link>terms</Link> and <Link>conditions</Link> and general policy</label>
                        </div>

                        <div className="btn-content">
                            <input type="submit" value="Sign Up" className='button' />
                        </div>
                        <div className="text"><span>or</span></div>
                        <ul class="social-links ">
                            <li><Link to="/"><span>Sign In with Facebook</span><FaFacebookF /></Link></li>
                            <li><Link to="/"><span>Sign In with Google</span><FaGooglePlusG /></Link></li>
                            <li><Link to="/"><span>Sign In with Twitter</span><FaTwitter /></Link></li>
                        </ul>
                    </form>
                    <p>
                        Already have an account? <Link to=''>Sign In</Link>
                    </p>

                </div>
            </div>

        </>
    )
}

export default SignUp