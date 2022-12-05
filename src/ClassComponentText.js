import React from 'react';
class ClassComponentText extends React.Component{
    constructor(){
    super();
    this.state = {
        studentList : [
           {"name":"shahith", "email":"shahithbca301@gmaiol.com"},
           {"name":"pavithran", "email":"pavi123@gmail.com"},
           {"name":"farith", "email":"farith134@gmail.com"},
        ]
    };

    
    }
    render(){
    return(
        <div>
        <h1>student Details:</h1>
        {this.state.studentList.map((name) => <Student studentDetails={name} />)}
        </div>

    );
 
   }
}
    class Student extends React.Component{
        render(){
        return(
        <u1> <li> <h3> {this.props.studentDetails.name} - {this.props.studentDetails.email}</h3></li></u1>

        );
        };
    }
export default ClassComponentText;



