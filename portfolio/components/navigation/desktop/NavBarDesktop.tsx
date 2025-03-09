import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button"

const NavBarDesktop = () => {
  return (
    <Navbar className="bg-gray-300 h-30 px-8 flex justify-between">
      <NavbarBrand className="text-4xl text-black font-bold">
        <a href="/">Johana GABA</a>
        <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer text-black hover:text-blue-500"
          ></Link>
      </NavbarBrand>  
      <NavbarContent className="flex justify-center space-x-16 flex-1 text-3xl">
        <NavbarItem>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer text-black hover:text-blue-500"
          >
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>  
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer text-black hover:text-blue-500"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer text-black hover:text-blue-500"
          >
            Skills
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="ml-auto">
        <NavbarItem>
          <Button variant="secondary" size="contactSize" >
            <div className="text-black text-3xl ml-5 mr-5">
              Contact Me
            </div>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBarDesktop;
