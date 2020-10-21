import React, {useState} from "react";
import {Link} from "react-router-dom";
import FileBase64 from 'react-file-base64';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function FunctionForm () {
  const [ticketNature, setticketNature] = useState("");
  const [contactType, setcontactType] = useState("");
  const [ticketName, setticketName] = useState("");
  const [createdName, setcreatedName] = useState("");
  const [clientName, setclientName] = useState("");
  const [clientEmail, setclientEmail] = useState("");
  const [clientNumber, setclientNumber] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [siteAddress, setsiteAddress] = useState("");
  const [sitePostcode, setsitePostcode] = useState("");
  const [reportedTime, setreportedTime] = useState("");
  const [allocatedBusiness, setallocatedBusiness] = useState("");
  const [files, setfiles] = useState([]);
  const [additionalNotes, setadditionalNotes] = useState("");
  const [allocatedStaff, setallocatedStaff] = useState("");
  const [ticketPrioritised, setticketPrioritised] = useState({
    checked: false,
  });
  const [ticketResolved, setticketResolved] = useState({
    checked: false,
  });

    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log(contactType, ticketName, createdName, clientName, clientEmail, clientNumber, companyName, siteAddress, sitePostcode, reportedTime, allocatedBusiness, allocatedStaff, ticketResolved, ticketPrioritised, additionalNotes);
    }

    return (
        <form className="ticket-form" onSubmit={handleSubmit}>  {/*Here is the onSubmit function which we attach to the handleSubmit handler above*/}

        <div className="form-title">
          <h1>Function Form</h1>
          <hr align="left"/>
        </div>

        <div className="ticketFormItems">

    
          <div className="natureContactAndDate">

            <div className="item1">
            <label>
                <span>Nature of ticket:</span>
                <select name="ticketNature" onChange={event => setticketNature(event.target.value)} value={ticketNature} className="ticketNature">
                    <option value="service">Service</option>
                    <option value="sales">Sales</option>
                    <option value="finance">Finance</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                </select>
            </label>
            </div>
      
          <div className="item2">
            <label>
            <span>Type of Contact:</span>
                <select name="contactType" onChange={event => setcontactType(event.target.value)} value={contactType}>
                    <option value="call">Call</option>
                    <option value="email">Email</option>
                    <option value="letter">Letter</option>
                    <option value="letter">Text</option>
                </select>
            </label>
            </div>

          <div className="item3">
            <label> 
              <span>Date/Time Reported: </span>
                <input
                  required
                  type="datetime-local"
                  name="reportedTime"
                  value={reportedTime} 
                  onChange={event => setreportedTime(event.target.value)} 
                /> 
            </label>
            </div>
          </div>




      
          <div className="ticketName"> 
            <div className="item1">
              <label>
              <span>Ticket Name:</span>
              </label>
            </div>
            
            
                <input
                className="item2"
                required
                type="text"
                name="ticketName"
                value={ticketName} 
                onChange={event => setticketName(event.target.value)} 
                placeholder="Give the ticket a name..."
              />
            
            </div>







            

            <div className="companyName">

              <div className="item1">
                <label>
                <span>Company Name:</span>
                </label>
              </div>

                  <input
                    className="item2"
                    required
                    type="search"
                    name="companyName"
                    value={companyName} 
                    onChange={event => setcompanyName(event.target.value)} 
                    placeholder="Search for the company here..."
                  />
                
                <Link to="/create-new-company"><button className="addAddressBtn">
                    +
                  </button>
                  </Link>
            </div>






      
            <div className="siteAddress">
              <div className="item1">
                <label> {/*Pulled from company records*/}
                <span>Company Site Address:</span>
                </label>
              </div>

                <input
                className="item2"
                required
                type="text"
                name="siteAddress"
                value={siteAddress} 
                onChange={event => setsiteAddress(event.target.value)} 
                placeholder="Where is this company based?..."
              /> 
            </div>





      
            <div className="sitePostcode">
              
                <label>
                <span>Company Site Postcode:</span>
                </label>
              
              
              <input
                className="item2"
                required
                type="text"
                name="sitePostcode"
                value={sitePostcode} 
                onChange={event => setsitePostcode(event.target.value)}
                placeholder="What is their postcode?..." 
              /> 
            </div>








            <div className="clientName">
            
              <label>
              <span>Who should we report to?:</span>
              </label>
            
              <input
              className="item2"
                required
                type="text"
                name="clientName"
                value={clientName} 
                onChange={event => setclientName(event.target.value)} 
                placeholder="Who should we report to?..."
              />
            </div>
      







            <div className="clientEmail">
              
                <label>
                <span>Customer Email Address:</span>
                </label>
              
              
              <input
                className="item2"
                required
                type="email"
                name="clientEmail"
                value={clientEmail} 
                onChange={event => setclientEmail(event.target.value)} 
                placeholder="What is the customers email address?..."
              />
            </div>









            <div className="clientNumber">
              
                <label>
                <span>Customer Contact Number:</span>
                </label>
              

              <input
                className="item2"
                required
                type="tel"
                name="clientNumber"
                value={clientNumber} 
                onChange={event => setclientNumber(event.target.value)} 
                placeholder="What is the customers contact number?..."
              />
            </div>
           







      
            <div className="createdName">

            <div className="item1">

            <label>
            <span>Who created this ticket?:</span>
            </label>

            <select name="createdName" onChange={event => setcreatedName(event.target.value)} value={createdName}>
                  <option value="josh">Josh</option>
                  <option value="thea">Thea</option>
                  <option value="leonie">Leonie</option>
                  <option value="sarah">Sarah</option>
              </select>
            </div>







      
            <div className="allocatedBusiness">
            <label>
            <span>Which business will this be allocated to?:</span>
            </label>

              <select name="allocatedBusiness" onChange={event => setallocatedBusiness(event.target.value)} value={allocatedBusiness}>
                  <option value="redrobot">Red Robot Systems</option>
                  <option value="agile">Agile</option>
                  <option value="stratus">Stratus</option>
                  <option value="tcs">TCS</option>
                  <option value="unity-gtm">Unity GTM</option>
                  <option value="qnet">QNet</option>
                  <option value="brunel">Brunel</option>
              </select>
              
              </div>

              

            <div className="allocatedStaff">
            <label>
            <span>Who is allocated to this ticket?:</span>
            </label>

            <input
                    className="item2"
                    required
                    type="search"
                    name="allocatedStaff"
                    value={allocatedStaff} 
                    onChange={event => setallocatedStaff(event.target.value)} 
                    placeholder="Search staff..."
                  />
              </div>
              </div>
      
              <div className="ticketResolved">
              <label>
              <span>Resolve this ticket immediately?</span>
              </label>

              <FormControlLabel
                control={
                  <Switch
                  value={ticketResolved}
                    checked={ticketResolved.checked}
                    onChange={event => setticketResolved({ ...ticketResolved, [event.target.name]: event.target.checked })}
                    name="checked"
                    color="primary"
                  />
                }
                />
              </div>


              <div className="ticketPrioritised">
              <label>
                  <span><strong>Prioritise this ticket</strong></span>
              </label>
        
              <FormControlLabel
                control={
                  <Switch
                  value={ticketPrioritised}
                    checked={ticketPrioritised.checked}
                    onChange={event => setticketPrioritised({ ...ticketPrioritised, [event.target.name]: event.target.checked })}
                    name="checked"
                    color="primary"
                  />
                }
                />
              </div>
      
            <div className="additionalNotes">
            <label>
            <span>Additional Notes:</span>
            </label>

              <textarea
                name="additionalNotes"
                value={additionalNotes} 
                onChange={event => setadditionalNotes(event.target.value)} 
                placeholder="Any additional notes? Add them here!..."
              /> 
            
            </div>

            <div className="files">
            <label> {/*This is the FileBase input using React FileBase*/}
            <FileBase64
              value={files}
              multiple={ true } //This gives the input the ability to upload multiple files
              onDone={setfiles.bind()} /> 
            </label>
            </div>

        </div>
            <br />
            <div className="formButtons">
            {/* <Link to= "/submitted-ticket"> */}
            <button id="submit" value="submit">Submit</button>
            {/* </Link> */}
            </div>
          
        </form>
      );
}

export default FunctionForm