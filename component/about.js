import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunction from "../component/profile.js";
import Profile from "./profileClass.js";


const About2 = () => {
    
    return(
        <>
        <h1>ABOUT US</h1>
        <p>Hello I'm About Us Page</p>
        <p>Thanks For Coming Here</p>
        {/* {<Outlet/>} */}
        {<Profile name="Jinal N Patel Class"/>}
        {<ProfileFunction name="Jinal N Patel"/>}
        </>
    )
}

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gitData : []
        }

        console.log("parent-consturctor");
    }
    async componentDidMount() {

       const data = await fetch("https://api.github.com/users/Jinal123456789")
        const json = await data.json();
        this.setState({
            gitData: json
        })
        console.log(json,"parent-componentDIDMount");

    }
    render(){
        return(
            <>
            {console.log(this.state.gitData,"parent-render")}
            <h1>ABOUT US</h1>
            <h1>{this.state.gitData.name}</h1>
            <h1>{this.state.gitData.bio}</h1>
            <img src={this.state.gitData.avatar_url}></img>
            <p>Hello I'm About Us Page</p>
            <p>Thanks For Coming Here</p>
            {/* {<Outlet/>} */}
            {<Profile name="Jinal N Patel FirstChild"/>}
            {<Profile name="Jinal N Patel SecondChild"/>}
            {/* {<ProfileFunction name="Jinal N Patel"/>} */}
            </>
        )
}
}

export default About;