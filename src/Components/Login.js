import React from "react";


function Login({setView, logStatus}) {

    return (
        <main className="pa4 white registry-bar">
            <form className="measure center box">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0 desc">Logowanie</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 desc" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100"
                               type="email" name="email-address" id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6 desc" htmlFor="password">Hasło</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100"
                               type="password" name="password" id="password"/>
                    </div>

                    <label className="pa0 ma0 lh-copy f6 pointer desc"><input type="checkbox"/> Zapamiętaj mnie</label>
                </fieldset>
                <div className="">
                    <input className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib desc"
                           type="submit" value="Zaloguj"/>
                </div>
                <div className="lh-copy mt3 pointer">
                    <p onClick={()=>setView('register')} className="f6 link dim  desc">Rejestracja</p>
                    <a href="#0" className="f6 link dim db desc">Zapomniałes swojego hasła?</a>
                </div>

            </form>
        </main>
    )



}
export default Login;