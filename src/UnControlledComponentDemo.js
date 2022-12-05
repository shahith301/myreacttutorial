import React from 'react';

class UnControlledComponent extends React.Component{

    constructor(){
        super();
        this.userName = React.createRef();        
    }

    handleSubmit = () => { 
        alert(this.userName.current.value);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>React Uncontrolled Component Demo </h1>
                <label>Name </label>
                <input type="text" ref={this.userName} />
                <button type="submit">Submit</button>
            </form>
        );

    }

}

export default UnControlledComponent;