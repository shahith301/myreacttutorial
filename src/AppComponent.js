import React from 'react';
import HOC from './HOC';

class AppComponent extends React.Component{

    render(){
        return(
            <div>
            <h1>HOC Component Demo</h1>
            <p> Passing component as a parameter to another function.</p>
            </div>
        );
    }
}
AppComponent = HOC(AppComponent);
export default AppComponent;