import React, {useEffect, useState} from "react";


function Registry({setView, logStatus}) {

    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [firstName, setFirstName ] = useState('');
    const [lastName, setLastName ] = useState('');
    const [birthday, setBirthday ] = useState('');
    const [sex, setSex ] = useState('');
    const [trainingGroup, setTrainingGroup ] = useState('');
    const [sendRequest, setSendRequest] = useState(false);

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const onFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }
    const onLastNameChange = (event) => {
        setLastName(event.target.value);
    }
    const onBirthdayChange = (event) => {
        setBirthday(event.target.value);
    }
    const onSexChange = (event) => {
        setSex(event.target.value);
    }
    const onTrainingGroupChange = (event) => {
        setTrainingGroup(event.target.value);
    }

    useEffect(()=> {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('GET', 'POST', 'OPTIONS');


        if(sendRequest) {
            fetch('http://localhost:3000/register',{
                crossDomain: true,
                method: 'post',
                headers: headers,
                body: JSON.stringify({
                    userName: email,
                    userPassword: password,
                    firstName: firstName,
                    lastName: lastName,
                    birthdayDate: birthday,
                    sex: sex,
                    trainingGroup: trainingGroup
                })
            })
                .then(response => response.json())
                .then(response => {
                        if (response === 'success') {
                            console.log("recived success status")
                            logStatus(true);
                        }
                    }
                )
        }
        setSendRequest(false);
    },[sendRequest]);

    return(
        <main className="pa4 white registry-bar">
            <form className="measure center box">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0 registry">
                    <legend className="f4 fw6 ph0 mh0 desc">Rejestracja</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 desc" htmlFor="email-address">Email</label>
                        <input
                            onChange={onEmailChange}
                            className="pa2 input-reset ba bg-transparent hover-bg-white w-100"
                               type="email" name="email-address" id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6 desc" htmlFor="password">Hasło</label>
                        <input
                            onChange={onPasswordChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-white w-100"
                               type="password" name="password" id="password"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6 desc" htmlFor="password">Imię</label>
                        <input
                            onChange={onFirstNameChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-white w-100"
                               type="text" name="firstName" id="firstName"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6 desc" htmlFor="password">Nazwisko</label>
                        <input
                            onChange={onLastNameChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-white w-100"
                               type="text" name="lastName" id="lastName"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6 desc" htmlFor="password">Data urodzenia</label>
                        <input
                            onChange={onBirthdayChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-white w-100"
                               type="date" name="birthdate" id="birthdate"/>
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f6 desc" htmlFor="password">Płeć</label>
                        <input
                            onChange={onSexChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-white w-100"
                               type="text" name="sex" id="sex"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6 desc" htmlFor="password">Grupa treningowa</label>
                        <input
                            onChange={onTrainingGroupChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-white w-100"
                               type="text" name="trainingGroup" id="trainingGroup"/>
                    </div>



                </fieldset>
                <div className="">
                    <input
                        disabled={sendRequest}
                        onClick={()=> setSendRequest(true)}
                        className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib desc"
                           type="submit" value="Zarejestruj"/>
                </div>
                <div className="lh-copy mt3 pointer">
                    <p onClick={()=>setView('login')} className="f6 link dim  desc">Wróc do logowania</p>
                </div>

            </form>
        </main>
    )
}
export default Registry;