import React from 'react';
class MobileStore extends React.Component{
    constructor(){
        super();
        this.state = {
            MobileList : [
            {"name": "ipone 11", "price": "50000"},
            {"name": "ipone 12", "price": "80000"},
            {"name": "ipone 13", "price": "95000"},
            {"name": "ipone 13 pro", "price": "130000"},
            {"name": "ipone 14 pro", "price": "150000"},
            
           ]
          
        };
        this.addMobile = this.addMobile.bind(this);
        
    }
    addMobile(){
    this.setState({MobileList:[{"name":"ipone 14 max","price":"180000"}] });
    }
    render(){
      return(
        <div>
        <h1> Available Mobile List</h1>
        
            
            
        
        <button type='submit' onClick={this.addMobile}>Add New Mobile</button>
        
        </div>
      )
    }
}
export default MobileStore;