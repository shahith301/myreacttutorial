import React, {Component} from 'react';

function HOC(AppComponent){
    return class extends Component{
        render(){
            return(
                <div>
            <AppComponent></AppComponent>
            </div>
        );
    };
}

}

export default HOC;