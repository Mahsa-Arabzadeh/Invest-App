import { Navbar as NavbarBs, Button } from "react-bootstrap";
import { BsCart } from "react-icons/bs";

function NavBar() {
  return (
    <NavbarBs className="border-bottom border-secondry">
      <NavbarBs.Collapse className="justify-content-end">
        <Button variant="btn btn-outline-secondary" className="text-white">
          <BsCart className="mx-2"></BsCart>
          سبد خرید
        </Button>
      </NavbarBs.Collapse>
    </NavbarBs>
  );
}

export default NavBar;
