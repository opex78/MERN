import { useEffect, useState } from "react";

const Login = () => {
    console.log("Login component loaded")
    let test = "abc";
    const [btnText, setBtnText] = useState("Login")
    const [testBtnText, setTestBtnText] = useState("Logout")
    useEffect(() => {
        console.log("useEffect of login called")
    }, [btnText])

    return (
        <>
            <button className="btn-login"
                onClick={() => {
                    test = "bcd";
                    (btnText === "Login") ? setBtnText("Logout") : setBtnText("Login")
                    console.log("btnText", btnText)
                }}>
                {btnText}
            </button >
            <button
                onClick={() => {
                    (testBtnText === "Login") ? setTestBtnText("Logout") : setTestBtnText("Login")
                    console.log("btnText", btnText)
                }}>
                {testBtnText}
            </button >
        </>
    )
}

export default Login;