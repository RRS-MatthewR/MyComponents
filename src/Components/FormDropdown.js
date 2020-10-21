import React from "react";
// import {Link} from "react-router-dom";
// import FileBase64 from 'react-file-base64';

class FormDropdown extends React.Component {
        state = {
          companyAddress: "",
          newAddresses: []
        }

     addAddress(e){
      e.preventDefault()
      this.setState({newAddresses: [...this.state.newAddresses, ""]})
     };

     handleAddressChange(e, index){
        this.state.newAddresses[index] = e.target.value
        this.setState({newAddresses: this.state.newAddresses})
     };

     handleAddressRemove(index){
        this.state.newAddresses.splice(index,1)
        this.setState({newAddresses: this.state.newAddresses})
     };
    
     handleSubmit = (e) => { //This handleSubmit handler is called when the form is submitted
        e.preventDefault()
        const data = this.state
        console.log(data)
      };

      handleChange = (e) => { 
        this.setState ({
            [e.target.name]: e.target.value 
        })
    }

    render(){
      return (
        <form className="createCompanyForm" onSubmit={this.handleSubmit}>  {/*Here is the onSubmit function which we attach to the handleSubmit handler above*/}

          <div className="form-title">
              <h1>Dropdown Form Create</h1>
              <hr align="left"/>
           </div>

          <div className="companyFormItems">
              
            <div className="companyAddress">
              
              <div className="item1">
                <label>
                  <span>Company Address(es):</span>
                </label>
              </div>

                <input
                  className="item2"
                  type="text"
                  name="companyAddress"
                  value={this.state.companyAddress} //In the form component, create the first input, and set its value to the current state of the ticket name
                  onChange={this.handleChange}
                  placeholder="Whats the companies address?..."
                /> 
                <button className="addAddressBtn" onClick={(e)=>this.addAddress(e)}>+</button>  
                </div>

              {
                  this.state.newAddresses.map((address, index)=>{
                      return (
                        <div className="row3" key={index}>
                            <input className="item1" onChange={(e)=> this.handleAddressChange(e, index)}
                            value={address} placeholder="Add New Address.."/>
                            <button className="removeAddressBtn" onClick={()=>this.handleAddressRemove(index)}>-</button>
                        </div>
                      );
                  })
              }
            </div>
              <div className="formButtons">
                  <button id="submit" >Submit</button>
              </div>
        </form>
      );
    }
}

export default FormDropdown