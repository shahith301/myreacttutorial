import React, {Component} from 'react';
class New extends Component{

    render(){
        return(
            <div>
                <h1> New screen</h1>
                <label for="userName"> userName :</label> <input type="text" name="userName" id="userName"/>
                <label for="EmailId"> Email Id :</label> <input type="EmailId" name="EmailId"/><br></br>
                <button value="Click" name="Click"> Click </button>
            </div>

        );
    }
}
export default New;