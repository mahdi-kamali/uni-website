import { useSelector } from "react-redux"
import Login from "./login/Login"
import SingUp from "./sign-up/SingUp"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AuthPage = () => {


    const user = useSelector(state => state.user)
    const navigator = useNavigate()

    const [authMode, setAuthMode] = useState(true)

    useEffect(() => {

        if (user?.value !== null) {
            navigator("/dashboard")
        }

    }, [user])

    return (
        <main className="auth-page">
            <div className="left">
                {
                    authMode ? <Login setAuthMode={setAuthMode} /> :
                        <SingUp setAuthMode={setAuthMode} />
                }
            </div>
            <div className="right">

                <h1>! به دانشگاه ما خوش آمدید</h1>
                <h2>
                    پرتال دانشگاه برای دانشجویان و اعضای هیئت علمی.
                    وارد شوید و تجربه‌ی آموزشی را آغاز کنید.
                </h2>

            </div>
        </main>
    )
}

export default AuthPage