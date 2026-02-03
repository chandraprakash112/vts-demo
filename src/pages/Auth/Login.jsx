import '../../App.css';
import logo from '../../assets/images/logo.png';
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function Login() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            email: email || "test@gmail.com",
            password: password || "123456"
        }
        console.log(body);
        sessionStorage.setItem('userinfo', JSON.stringify(body));
        navigate("/dashboard");
    };
    return (
        <>
            <div className="bacgroundUrl">
                <div className="logincard-custom absolute top-[30%] right-25 w-[427px] h-[419px] 
                        rounded-[32px] p-6 bg-gradient-to-t from-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,0.5)]
                        border border-white/30">
                    <form onSubmit={handleSubmit} >
                        <div>
                            <img src={logo} alt="Logo" />
                        </div>
                        <h2 style={styles.title}>Login</h2>
                        <div>
                            <p style={styles.lable}>Username</p>
                            <input type="email" placeholder="Enter Email"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                style={styles.input} />
                        </div>
                        <div>
                            <p style={styles.lablePaaword}>
                                <span>Password</span>
                                <span onClick={() => setShow(!show)}>
                                    {show ? (
                                       <span className='d_f-a_c cursor-pointer'><EyeSlashIcon className="h-4 w-4 text-black-500" /> Hide</span>
                                    ) : (
                                        <span className='d_f-a_c cursor-pointer'><EyeIcon className="h-4 w-4 text-black-500" /> Show</span>
                                    )}</span>
                            </p>
                            <input type={show ?"text" : "password" } placeholder="Enter Password"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                style={styles.input2} />
                            <p style={styles.forgotLable}>Forget Password?</p>
                        </div>
                        <div>
                            <button type="submit" style={styles.button}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

const styles = {
    title: {
        marginBottom: "20px",
        marginTop: '2rem',
        textAlign: "let",
        fontSize: "22px",
        color: '#242424',
        fontWeight: '500'
    },
    lable: {
        fontSize: "14px",
        color: '#000000',
        fontWeight: '500'
    },
    lablePaaword: {
        fontSize: "14px",
        color: '#000000',
        fontWeight: '500',
        display: 'flex',
        justifyContent: 'space-between',
    },
    input: {
        padding: "12px",
        marginBottom: "15px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "16px",
        width: '100%',
        background: '#fff',
        height:'40px'
    },
    input2: {
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "16px",
        width: '100%',
        background: '#fff',
        height:'40px'
    },
    forgotLable: {
        fontSize: "14px",
        color: '#000000',
        fontWeight: '500',
        marginBottom: "15px",
        textAlign: 'right',
        cursor:'pointer'
    },
    button: {
        padding: "12px",
        background: "#D9231D",
        color: "#fff",
        border: "none",
        fontSize: "16px",
        cursor: "pointer",
        width: ' 100%',
        borderRadius: '32px',
        fontWeight: '600'
    },
};

export default Login;