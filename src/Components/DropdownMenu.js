import React from 'react';
import {List, ListItem, ListItemText, MenuItem, Menu } from '@material-ui/core';

const options = [
  'Status',
  'New',
  'Open',
  'Complete'
];

function DropdownMenu () {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className= "table-menu">
      <List component="table-menu" aria-label="table-menu">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="company"
          onClick={handleClickListItem}
        >
          <ListItemText secondary={options[selectedIndex]} />
        </ListItem>
      </List>
      <Menu
        id="table-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default DropdownMenu