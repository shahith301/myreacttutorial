import React  from 'react';
class ComponentLifeCycle extends React.Component{

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    incrementCounter = () => {
        this.setState({count: this.state.count + 1});
    }
    //Mounting phase
    componentWillMount(){
        console.log('componentWillMount called');
    }
    componentDidMount(){
        console.log('componentDidMount called');
    }

    //Updating Phase
    componentWillReceiveProps(newProps){
        console.log('componentWillReceiveProps called');
    }
    shouldComponentUpdate(newProps, newState){
        console.log('shouldComponentUpdate called'); 
        return true;
    }
    componentWillUpdate(nextProps, nextState) {  
        console.log('componentWillUpdate called');  
     }  
     componentDidUpdate(prevProps, prevState) {  
        console.log('componentDidUpdate called'); 
     }  

     //UnMount phase
     componentWillUnmount() {  
        console.log('componentWillUnmount called');  
     }  



    render(){
        return (
            <div>
                <h1>Component LifeCycle Demo</h1>
                <h2>Counter : {this.state.count} </h2>
                <button type="submit" onClick={this.incrementCounter} >Increment</button>
            </div>

        );
    }
}

export default ComponentLifeCycle;