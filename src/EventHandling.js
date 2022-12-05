import React from 'react';
class EventHandling extends React.Component{

    handleEvent = (msg) => {
        alert(msg);

    }

    render(){
        return(
            <div>
                <h1> Event Handling Demo</h1>
                <button type="submit" onClick={() => this.handleEvent("hello this is Event Handling")}>submit</button>
            </div>
        );
    }
}
export default EventHandling;