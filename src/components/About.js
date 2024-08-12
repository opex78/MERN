import React from "react";
import UserClass from "./UserClass";
import UserContext from "./UserContext";
class About extends React.Component {

    constructor() {
        //console.log("About constructor method is called")
        super();
        this.state = {
            userData: {}
        }
    }

    async componentDidMount() {
        //console.log("About Class componentDidMount is called")
        const fetchUserData = await fetch("https://api.github.com/users/prabhhundal-dev")
        const jsonData = await fetchUserData.json()
        //console.log(jsonData)
        this.setState({
            userData: jsonData
        })
    }

    componentDidUpdate() {
        //console.log("About Class componentDidUpdate is called")
    }

    componentWillUnmount() {
        //console.log("About Class componentWillUnmount is called")
    }

    render() {
        //console.log("About Class render method is called")
        const { login, avatar_url } = this.state.userData;
        return (
            <div>
                <h1>About us</h1>
                <h1>
                    Logged in user name :
                    <UserContext.Consumer>
                        {(data) => console.log("data from about component", data)}
                    </UserContext.Consumer>
                </h1>
                <UserClass name={login} avatar_url={avatar_url} />
            </div>
        )
    }

}

export default About;