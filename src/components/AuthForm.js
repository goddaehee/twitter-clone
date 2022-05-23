import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, } from "firebase/auth";
import { useState } from "react";

const AuthForm = () => {

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

    return <>
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
    </>;
}

export default AuthForm;