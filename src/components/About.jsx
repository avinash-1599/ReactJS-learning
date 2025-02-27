import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {

    constructor(props){
        super(props);

        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent ComponentDid Mount")
    }

    render(){

        console.log("Parent Render")
        return (
        <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">About Page</h1>
        <p className="text-lg text-center text-gray-600 mb-8">Meet Our Users</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
            <UserClass name={"Seema Kumari"} location={"Gaya"} contact={"@seeku"} />
            <UserClass name={"Naina Kumari"} location={"Gaya"} contact={"@nainakri"} />
            <UserClass name={"Ajay Raj"} location={"Patna"} contact={"@me_raju"} />
            <UserClass name={"Kavya Raj"} location={"Gaya"} contact={"@kavya123"} />
            <UserClass name={"Anjali"} location={"Ranchi"} contact={"@kri_anjali11"} />
        </div>
    </div>)
    }    
}

export default About;