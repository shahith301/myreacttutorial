import React, {Component} from 'react';
class ClassStateDemo extends React.Component{
    constructor() {
        super();
      this.state = {
            displayMoreInfo : true
         };
         this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay(){
        this.setState({displayMoreInfo: !this.state.displayMoreInfo});
    }
    render(){
        const info = this.state.displayMoreInfo ?
           <ul>
            <li>Basics</li>
            <li>Jsx</li>
            <li>Component</li>
            <li>State and Props</li>
            <li>Event handling</li>
           </ul>
        : null;
        return(
            <div><h1>React Js Cource Summary</h1><br></br>
            {this.state.displayMoreInfo ?
            (<div>
            {info}
            <button onClick={this.toggleDisplay} >Show Less</button>
            </div>)
            :(<div>
            <button onClick={this.toggledisplay} >Show More</button>
            </div>)
            }
            </div>
        );

        
        
        
    

    };
}
export default ClassStateDemo;






