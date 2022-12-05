import React from 'react';

class ControlledComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            userName : ""
        };       
    }

    handleSubmit = () => { 
        alert(this.state.userName);
    }

    userNameChange = (event) => {
        this.setState({userName: event.target.value} );
        console.log(this.state.userName);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>React Uncontrolled Component Demo </h1>
                <label>Name </label>
                <input type="text" name ={this.state.userName} onChange={this.userNameChange} />
                <button type="submit">Submit</button>
            </form>
        );

    }

}

export default ControlledComponent;