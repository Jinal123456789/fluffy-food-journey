import React from "react";

class profile extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count1 : 1,
        };
        console.log("constructor" + this.props.name)
    }
    componentDidMount(){
        console.log("componentDidMount" + this.props.name)
    }
    render() { 
        // const {count} = this.state
        console.log("reder"+this.props.name);
        return(
            
            <div>
                <h1>Hello Class Based Components</h1>
                <p>{this.props.name}</p>
                <h4>{this.state.count}</h4>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count+1,
                    });
                    // console.log(count,"count")
                }}>setC</button>
            </div>
        )
    }
}

export default profile;