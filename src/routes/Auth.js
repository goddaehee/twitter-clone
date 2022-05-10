import React from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { useState } from "react";

export default function () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (evt) => {
        const { target: { name, value } } = evt;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }
    const onSubmit = async (evt) => {
        evt.preventDefault();
        try {
            let data = {};
            if (newAccount) {
                //crateAcount
                //createUserWithEmailAndPassword(email : string, password : string) : Promise < UserCredential >
                data = await createUserWithEmailAndPassword(getAuth(), email, password);
            } else {
                //log In
                //signInWithEmailAndPassword ( email :  string ,  password :  string ) : Promise < UserCredential >
                data = await signInWithEmailAndPassword(getAuth(), email, password);
            }
            console.log(data);
        } catch (error) {
            setError(error.message)
        }
    }
    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocialClick = async (event) => {
        const { target: { name } } = event;

        let provider;
        if (name === "google") {
            provider = new GoogleAuthProvider();
            const result = await signInWithPopup(getAuth(), provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
        } else if (name === "github") {
            provider = new GithubAuthProvider();
            const result = await signInWithPopup(getAuth(), provider);
            const credential = GithubAuthProvider.credentialFromResult(result);
        }
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input
                onChange={onChange}
                name="email"
                type="email"
                placeholder="Email"
                required value={email} />
            <input
                onChange={onChange}
                name="password"
                type="password"
                placeholder="Password"
                required={password} />
            <input
                type="submit"
                value={newAccount ? "Create Account" : "Sign In"} />
            {error}
        </form>
        <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}</span>
        <div>
            <button onClick={onSocialClick} name="google">Continue with Google</button>
            <button onClick={onSocialClick} name="github">Continue with Github</button>
        </div>

    </div>
}