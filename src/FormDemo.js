import React from 'react';
class FormDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            fname: "",
            lname: "",
            gender: "",
            dob: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('F Name:',this.state.fname);
        console.log('L Name:',this.state.lname);
        console.log('DOB:',this.state.dob);
        console.log('gender:',this.state.gender);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
            <label for='fname'>First Name</label>
            <input type='text' name='fname' id='fname' value={this.state.fname} required pattern='[a-zA-Z]+' onChange={this.handleChange}/><br></br>
            </div>

            <div>
            <label for='lname'>Last Name</label>
            <input type='text' name='lname' id='lname' value={this.state.lname} required pattern='[a-zA-Z]+' onChange={this.handleChange}/><br></br>
            </div>

            <div>
            <label for='gender'>Gender</label>
            <input type='radio' name='gender' id='gender' value={this.state.gender ="male"} required onChange={this.handleChange}/><label>Male</label>
            <input type='radio' name='gender' id='gender' value={this.state.gender ="female"} required onChange={this.handleChange}/><label>Female</label><br></br>
            </div>

            <div>
            <label for='dob'>DOB</label>
            <input type='date' name='dob' id='dob' value={this.state.dob} required onChange={this.handleChange}/>
            </div>

            <div>
            <button type="submit">Submit</button>
            </div>
            </form>

        );
    }
}
export default FormDemo;