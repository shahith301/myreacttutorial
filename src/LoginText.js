import React,{Component} from 'react';
class LoginText extends Component{
    render(){
        return(
            <div>
            <h1>Login screen</h1>
            <label for="userName"> userName: </label> <input type="text" name="userName" id="userName"/><br></br>
            <label for="password"> password: </label> <input type="text" name="password"/><br></br>
            <button type="submit" name="submit"> Submit </button>
            </div>



        );
    }
}
export default LoginText;