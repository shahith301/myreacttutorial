import React, {Component} from "react";
class Book extends React.Component{
    constructor(){
        super();
        this.state = {
        displayBookinfo : true
     }; 
     this.toggleDisplay = this.toggleDisplay.bind(this);
}
toggleDisplay(){
      this.setState({displayBookinfo : !this.state.displayBookinfo});
}
render(){
    const info = this.state.displayBookinfo ?
    <table>
        <th>BookName</th>
        <th>AuthorName</th>
        <th>Year Of Published</th>
        <tr>
            <td>Queen of Fire</td>
            <td>Devika Rangachari</td>
            <td>2021</td>
        </tr>
        <tr>
            <td>Monsoon</td>
            <td>abhay K</td>
            <td>1954</td>
        </tr>
        <tr>
            <td>How to prevent the Next pandamic</td>
            <td>Bill Gates</td>
            <td>2022</td>
        </tr>
        <tr>
            <td>Fearless Governance</td>
            <td>Kiran Bedi</td>
            <td>2022</td>
        </tr>
        <tr>
            <td>Human Rights and Terrorism in india</td>
            <td>subramanian Swamy</td>
            <td>2021</td>
        </tr>

    </table>
    :null;
    return(
        <div><h1>List Of Books</h1><br></br>
        {this.state.displayBookinfo ?
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
export default Book;

    
    
       
    
