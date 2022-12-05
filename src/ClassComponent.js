import React from 'react';

class ClassComponentDemo extends React.Component{

    constructor(){
        super();
        this.state = {
            studentList : [
                { "name": "Ajay", "email": "ajay@gmail.com"},
                { "name": "Ranjith", "email": "Ranjith@gmail.com"},
            ]

        };
    }

    render(){
        return (
            <div>
            <h1>Student Details</h1>
            {this.state.studentList.map((name) => <Student studentDetails={name} /> )}
            </div>
        );

    };


}

class Student  extends React.Component {
    render(){
        return (
            <ul> <li> <h3>{this.props.studentDetails.name} - {this.props.studentDetails.email}</h3></li></ul>
        );
    };

}

export default ClassComponentDemo;