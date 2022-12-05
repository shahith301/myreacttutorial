import React from "react";
class ButtonCounter extends React.Component{
    constructor(props){
    super(props);
    this.state = { count : 0 };
    }
    handleClick(){
        this.setState({
            count : this.state.count + 1

        },function(){
            console.log("jobs done");
        });
    }
    render(){
    return(
        <div className = "app">
        <div className = "click-count">
        button presses : {this.state.count}
        </div>
        <button onClick= {this.handleClick.bind(this)}>Add One</button>
        </div>
    );
    }

    

}
export default ButtonCounter;