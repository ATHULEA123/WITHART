import React,{useState} from "react";
import "./Login.css";
import image from "../../assets/loginpageimage.png";
import logo from "../../assets/WITH ART-10 2.png";

const Login = () => {
    const [isRegister, setIsRegister] = useState(false);

    const toggleForm = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div className="login">
            <div className="Login_left">
                <img src={logo} alt="logo" className="logo" />
                <img src={image} className="loginimage" />
            </div>
            <div className="Login_right">
                <h3 className="loginhead">{isRegister ? 'Create Account' : 'Login'}</h3>
                {isRegister && (
                    <input type="text" placeholder="Enter Username" className="input" />
                )}
                <input type="text" placeholder="Enter Email" className="input" />
                <input type="password" placeholder="Enter Password" className="input" />
                <div className="button">
                    <button className="loginbutton">{isRegister ? 'CREATE ACCOUNT' : 'LOGIN ACCOUNT'}</button>
                    <button className="loginbutton registerbutton">{isRegister ? 'CREATE WITH GOOGLE' : 'LOGIN WITH GOOGLE'}</button>
                </div>
                <div className="link">
                    <p>
                        {isRegister ? (
                            <>
                                Already Have an Account? <a href="#" onClick={toggleForm}>Sign in</a>
                            </>
                        ) : (
                            <>
                                Don't have an account? <a href="#" onClick={toggleForm}>Create one</a>
                            </>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
