import { useState } from "react"
import { auth, google } from "../config/firebase-config"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

function Auth() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)

        } catch (error) {
            throw new Error(error)
        }
    }

    const signInGoogle = async () => {
        try {
            await signInWithPopup(auth, google)

        } catch (error) {
            throw new Error(error)
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth)

        } catch (error) {
            throw new Error(error)
        }
    }

    return (
        <div>
            <p>{auth?.currentUser?.email}</p>
            <input placeholder="Email" onChange={(e) => setemail(e.target.value)} />
            <input placeholder="password" onChange={(e) => setpassword(e.target.value)} />
            <button onClick={signIn}>Sign In</button>

            <button onClick={signInGoogle}>Sign In with Google</button>
            <button onClick={logOut}>Log Out</button>

        </div>
    )
}

export default Auth