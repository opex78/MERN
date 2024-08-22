import { useEffect, useState } from "react";

const Login = () => {

    let test = "abc";
    const [btnText, setBtnText] = useState("Login")
    const [testBtnText, setTestBtnText] = useState("Logout")
    useEffect(() => {

    }, [btnText])

    return (
        <>
            <button className="btn-login"
                onClick={() => {
                    test = "bcd";
                    (btnText === "Login") ? setBtnText("Logout") : setBtnText("Login")

                }}>
                {btnText}
            </button >
            <button
                onClick={() => {
                    (testBtnText === "Login") ? setTestBtnText("Logout") : setTestBtnText("Login")

                }}>
                {testBtnText}
            </button >
        </>
    )
}

export default Login;