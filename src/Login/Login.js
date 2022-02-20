import React from "react";

const Login = (props)=> {
    
    const {
        email,
        setEmail, 
        password, 
        setPassword,
        hasAccount,
        handleLogin, 
        handleSignUp, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>UserName</label>
                <input 
                    type="text" 
                    autoFocus 
                    required 
                    value={email} 
                    onChange={ e => setEmail(e.target.value)}>
                </input>
                <p className="errorMsg">{emailError}</p>

                <label>password</label>
                <input 
                    type="password"  
                    required 
                    value={password} 
                    onChange={ e => setPassword(e.target.value)}>
                </input>
                <p className="errorMsg">{passwordError}</p>

                <div className="btnContainer">
                    {hasAccount 
                    ? ( 
                        <>
                        <button className="loginBtn" onClick={handleLogin}>Sign in</button>
                        <p>로그인하기
                        <span onClick={()=> setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                        <button className="loginBtn" onClick={handleSignUp}>Sign up</button>
                        <p>회원가입 
                        <span onClick={()=> setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>

            </div>
        </section>
    )
}

export default Login