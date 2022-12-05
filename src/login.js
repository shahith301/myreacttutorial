import React, {Component} from 'react';
class Login extends Component{

    render(){
        return(
            <div>
                <h1> login screen</h1>
                <label for="userName"> userName :</label> <input type="text" name="userName" id="userName"/>
                <label for="password"> Password :</label> <input type="password" name="password"/><br></br>
                <button value="submit" name="submit"> Submit </button>
            </div>

        );
    }
}
export default Login;