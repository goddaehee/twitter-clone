import React from "react";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import AuthForm from "components/AuthForm";

const Auth = () => {
    const onSocialClick = async (event) => {
        const { target: { name } } = event;

        let provider;
        if (name === "google") {
            provider = new GoogleAuthProvider();
            const result = await signInWithPopup(getAuth(), provider);
            //const credential = GoogleAuthProvider.credentialFromResult(result);
        } else if (name === "github") {
            provider = new GithubAuthProvider();
            const result = await signInWithPopup(getAuth(), provider);
            //const credential = GithubAuthProvider.credentialFromResult(result);
        }
    };

    return (<div>
        <AuthForm />
        <div>
            <button onClick={onSocialClick} name="google">Continue with Google</button>
            <button onClick={onSocialClick} name="github">Continue with Github</button>
        </div>
    </div >);
}

export default Auth;