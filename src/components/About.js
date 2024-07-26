import React from "react";
import UserClass from "./UserClass";
class About extends React.Component {

    constructor() {
        super();
        this.state = {
            userData: {}
        }
    }

    async componentDidMount() {
        const fetchUserData = await fetch("https://api.github.com/users/prabhhundal-dev")
        const jsonData = await fetchUserData.json()
        console.log(jsonData)
        this.setState({
            userData: jsonData
        })
    }

    render() {
        const { login, avatar_url } = this.state.userData;
        return (
            <div>
                <h1>About us</h1>
                <UserClass name={login} avatar_url={avatar_url} />
            </div>
        )
    }

}

export default About;