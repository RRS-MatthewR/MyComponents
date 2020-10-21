import React, { useState } from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function TestSwitch() {
    const [ticketPrioritised, setticketPrioritised] = useState({
      checked: false,
    });
  
    return (
        <div className="testSwitch">       
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
    );
  }

export default TestSwitch