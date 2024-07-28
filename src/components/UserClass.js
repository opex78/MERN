import React from "react";

// Class based component : class which returns jsx

class UserClass extends React.Component {
    constructor(props) {
        console.log("User Class constructor method is called")
        super(props);
        this.state = {
            count: 0,
            count1: 1
        }
    }

    componentDidMount() {
        console.log("User Class componentDidMount is called")
        // api call
    }

    componentDidUpdate() {
        console.log("User Class componentDidUpdate is called")
    }

    componentWillUnmount() {
        console.log("User Class componentWillUnmount is called")
    }

    render() {
        console.log("User Class render method is called")
        const { name, avatar_url } = this.props

        const { count, count1 } = this.state
        return (
            <div className="myUser">
                <h1>Class Based Component</h1>
                <h2>Count: {count}</h2>
                <button onClick={() => {
                    // Never update react state directly
                    // this.state.count = this.state.count + 1

                    this.setState({
                        count: count + 1,
                    })

                }}>Click Me to update Count</button>
                <h2>Count1: {count1}</h2>
                <h2>Name : {name}</h2>
                <h3>Email: {this.props.email}</h3>
                <h3>Profile Image: <img src={avatar_url} /></h3>
                <h4>Id: MyUser</h4>
            </div>
        )
    }
}

export default UserClass;