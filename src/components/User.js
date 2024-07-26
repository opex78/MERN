import { useState } from "react";

// Functional component : normal js function which returns jsx
const User = (props) => {
    console.log("props of user functional component", props)
    const { name, email } = props;
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(1);
    return (
        <div className="myUser">
            <h1>Functional Based Component</h1>
            <h2>Count : {count}</h2>
            <button onClick={() => {
                setCount(count + 1)
            }}>Click Me to update Count</button>
            <h2>Count1 : {count1}</h2>
            <h2>Name : {name}</h2>
            <h3>Email: {email}</h3>
            <h4>Id: MyUser</h4>
        </div>
    )
}
export default User;

