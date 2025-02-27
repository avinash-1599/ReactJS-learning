import React from "react";


class UserClass extends React.Component {

    constructor(props){
        super(props);
        //console.log("Child Constructor")

        // state variable in class-based component
        this.state = {
            userInfo: {
                name: "dummmy",
                location: 'random',
                html_url: 'default',
                bio: 'bio',
                avatar_url: "http://dummmy-photo.com"
            }
        }
    }

    async componentDidMount(){
        //console.log("Child ComponentDidMount")

        // API call to fetch data and update the component data here
        const data = await fetch("https://api.github.com/users/avinash-1599");
        const json = await data.json();
        console.log(json)

        this.setState({
            userInfo: json
        })
    }

    render(){

        //console.log("Child Render")
        const {name, location, html_url, avatar_url, bio} = this.state.userInfo;

        return (
            <div className="user-card">
            {/* <h4>Count: {this.state.count}</h4> */}
            <img src={avatar_url} alt="no-photo" style={{width: "50px", height: "50px"}} />
            <h4>Name: {name}</h4>
            <h5>Location: {location}</h5>
            <h5>GitHub Url: {html_url}</h5>
            <h5>Bio: {bio}</h5>
        </div>
        )
    }
}

export default UserClass;