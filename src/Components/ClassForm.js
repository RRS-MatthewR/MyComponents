import React from "react";
// import FileBase64 from 'react-file-base64';

class ClassForm extends React.Component {
    state= {
      companyName: "",
      companyAddress: "",
      mtContactName: "",
      mtContactNumber: "",
      mtContactEmail: "",
      faContactName: "",
      faContactNumber: "",
      faContactEmail: "",
      customerBusiness: "",
      companyReg: "",
      serviceLevelAgreement: "",
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
    
     handleSubmit = (e) => { 
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
        <form className="editableCompanyForm" onSubmit={this.handleSubmit}>  

          <div className="form-title">
              <h1>Class Form</h1>
              <hr align="left"/>
           </div>

          <div className="editableFormItems">
              
              <div className="nameAndBusiness">
                
                <div className="item1">
                  <label>
                    <span value={this.state.companyName}>Company Name:</span>
                  </label>
                </div>
                  
                  <input
                    className="item2"
                    type="text"
                    name="companyName"
                    value={this.state.companyName}
                    onChange={this.handleChange}
                    placeholder="Whats the new company name?..."
                  />

              <label>
                <span>Business:</span>
              </label>

              <select className="item3" name="customerBusiness" onChange={this.handleChange} value={this.customerBusiness}>
                  <option value="redrobot">Red Robot Systems</option>
                  <option value="agile">Agile</option>
                  <option value="stratus">Stratus</option>
                  <option value="tcs">TCS</option>
                  <option value="unity-gtm">Unity GTM</option>
                  <option value="qnet">QNet</option>
                  <option value="brunel">Brunel</option>
              </select>
                  
              </div>

            <div className="regAndSLA">
              <div className="item1">
                  <label>
                    <span>Company Reg No.:</span>
                  </label>
                </div>

                    <input
                      className="item2"
                      type="text"
                      name="companyReg"
                      value={this.state.companyReg} //In the form component, create the first input, and set its value to the current state of the ticket name
                      onChange={this.handleChange}
                      placeholder="What's their Reg number?..."
                    />

                <div className="item3">
                  <label>
                    <span>SLA (Service Level Agreement):</span>
                  </label>
                </div>

                    <input
                      className="item4"
                      type="text"
                      name="serviceLevelAgreement"
                      value={this.state.serviceLevelAgreement} //In the form component, create the first input, and set its value to the current state of the ticket name
                      onChange={this.handleChange}
                      placeholder="What's their Reg number?..."
                    />

              </div>
              
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
              
              <div className="mtContactName">
                <label>
                  <span>Main Trade Contact Name:</span>
                </label>
              
                  
                  <input
                    className="item2"
                    type="text"
                    name="mtContactName"
                    value={this.state.mtContactName} //In the form component, create the first input, and set its value to the current state of the ticket name
                    onChange={this.handleChange}
                    placeholder="Who is the main contact?..."
                  />
                </div>

                  <div className="mtContactNumber">
                    <label>
                    <span>Main Trade Contact Number:</span>
                  </label>
                  

                    <input
                      className="item2"
                      type="text"
                      name="mtContactNumber"
                      value={this.state.mtContactNumber} //In the form component, create the first input, and set its value to the current state of the ticket name
                      onChange={this.handleChange}
                      placeholder="What's their number?..."
                    />
                   </div>


            <div className="mtContactEmail">
              <div className="item1">
                <label>
                  <span>Main Trade Contact Email:</span>
                </label>
              </div>

                  <input 
                    className="item2"
                    type="email"
                    name="mtContactEmail"
                    value={this.state.mtContactEmail} //In the form component, create the first input, and set its value to the current state of the ticket name
                    onChange={this.handleChange}
                    placeholder="What's their email?..."
                  />
            </div>

            <div className="faContactName">
                <label>
                  <span>Finance/Accounts Contact Name:</span>
                </label>

                  <input 
                    className="item2"
                    type="text"
                    name="faContactName"
                    value={this.state.faContactName} //In the form component, create the first input, and set its value to the current state of the ticket name
                    onChange={this.handleChange}
                    placeholder="Who is the main contact?..."
                  />
              </div>
              
             <div className="faContactNumber"> 
              <label>
                <span>Finance/Accounts Contact Number:</span>
              </label>

                <input
                  className="item2"
                  type="text"
                  name="faContactNumber"
                  value={this.state.faContactNumber} //In the form component, create the first input, and set its value to the current state of the ticket name
                  onChange={this.handleChange}
                  placeholder="What's their number?..."
                />
              </div>

            <div className="faContactEmail">
              <div className="item1">
                <label>
                  <span>Finance/Accounts Contact Email:</span>
                </label>
              </div>

                  <input
                    className="item2"
                    type="email"
                    name="faContactEmail"
                    value={this.state.faContactEmail} //In the form component, create the first input, and set its value to the current state of the ticket name
                    onChange={this.handleChange}
                    placeholder="What's their email?..."
                  />
            </div>


          </div>
                <div className="formButtons">
                  <button id="submit" >Update</button> 
                </div>
            
        </form>
      );
}
}

export default ClassForm