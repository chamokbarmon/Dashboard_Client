import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import './Menubar.css'
const MenuBar = () => {
  return (
    <Navbar fluid rounded className="col sticky top-0 ">
      <Navbar.Brand >
   
       
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <li>Dashboard</li>
          <li>Settings</li>
          <li>Earnings</li>
          <Dropdown.Divider />
          <li>Sign out</li>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <Navbar.Link active href="/">
          <p className="text-white">Home</p>
        </Navbar.Link>
        <Navbar.Link   className="text-white" href="#">About</Navbar.Link>
        <Navbar.Link  className="text-white" href="#">Services</Navbar.Link>
        <Navbar.Link  className="text-white" href="#">Pricing</Navbar.Link>
        <Navbar.Link  className="text-white" href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
