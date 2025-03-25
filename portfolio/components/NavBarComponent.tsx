import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";

export default function NavBarComponent() {
  return (
    <div>
        <Navbar className="h-30 bg-white-500/40 border border-white/40 backdrop-blur-md !important">
          <NavbarBrand>
            <p className="font-bold text-inherit">NAME</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                About Me
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link aria-current="page" href="#">
                Skills
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Works
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Contact Me
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
    </div>
  );
}
