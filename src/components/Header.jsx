import { useEffect, useState } from "react";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import Main from "./Main";

function Header({ data }) {
  const [navTitle, setNavTitle] = useState();
  useEffect(() => {
    setNavTitle(Object.keys(data));
  }, [data]);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {navTitle &&
                navTitle.map((e, index) => {
                  return (
                    <Nav.Link key={index} href={`/${e}`}>
                      {e}
                    </Nav.Link>
                  );
                })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
