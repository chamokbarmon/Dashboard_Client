import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import "./Menubar.css";
import { Link } from "react-router-dom";
const MenuBar = () => {
  return (
    // Navbar Create .....

    <Navbar fluid rounded className="col sticky top-0 ">
      <Navbar.Brand></Navbar.Brand>
      <div className="flex md:order-2 ">
        <Dropdown
        className="col text-white"
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
          <Dropdown.Header >
            <span className="block text-sm text-white">Bonnie Green</span>
            <span className="block col truncate text-sm text-white font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <div className="text-center grid grid-cols-1 ">
          <Link to="/" className="hover:bg-slate-50 hover:text-black hover:rounded-md  ">Dashboard</Link>
         
          <Link  className="hover:bg-slate-50 hover:text-black hover:rounded-md  ">SignIn</Link>
          </div>
          <Dropdown.Divider />
           <button className=" w-full text-center hover:bg-slate-50 hover:text-black hover:rounded-md "> <Link  >Sign out</Link></button>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      {/*....... Navbar route........ */}

      <Navbar.Collapse>
        <Navbar.Link active href="/">
          <p className="text-white   hover:text-red-400 hover:rounded-md">Home</p>
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          About
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          Services
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
