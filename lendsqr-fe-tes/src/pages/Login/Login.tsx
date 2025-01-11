import React, { useState } from 'react';
import Logo from '../../assets/images/Group.svg'
import Photo from '../../assets/images/pablo-sign-in 1.svg'
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true)

        if (!username || !password) {
            setErrorMessage('Please enter both username and password.');
            setLoading(false)
            return;
        } else{
            navigate('/dashboard');
            setLoading(false)
        }
    };

    return (
        <div className={styles.loginPage}>
            <section className={styles.loginImages}>
                <div className={styles.logo}>
                    <img src={Logo} alt="logo" />   
                </div>
                <div className="">
                    <img src={Photo} alt="" />   
                </div>
            </section>
            <form className={styles.loginForm} onSubmit={handleLogin}>
                <div className={styles.logo}>
                    <img src={Logo} alt="logo" />   
                </div>
                <h1>Welcome!</h1>
                <p>Enter details to login.</p>
                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

                <div className={styles.formGroup}>
                    <input
                        type="text"
                        id="email"
                        placeholder='Email'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className={styles.formGroup}>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={styles.visibility}>
                        { showPassword ? (
                            <p className='showPassword' onClick={() => setShowPassword(prevState => !prevState)}> HIDE </p> 
                            ) : 
                            (
                            <p className='showPassword' onClick={() => setShowPassword(prevState => !prevState)}> SHOW </p>
                            )
                        }
                    </div>
                    <Link to="#">
                        <p className={styles.reset}>FORGOT PASSWORD?</p>
                    </Link>
                </div>
                <button 
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Loading...'  : "LOG IN"}
                </button>
            </form>
        </div>
    );
};

export default Login;
