import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import styles from '../styles/navbar.module.css'
export const SiteNav = () => {
    return(
        <Navbar expand="sm" className={styles.navbar}>
          <Container>
              <Navbar.Brand href="/"><img className={styles.navLogo} src="https://wat-asset-bucket.s3.us-east-2.amazonaws.com/assets/assets/logos/WT.png" alt="Wealth and Taste Logo"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <Nav.Link href="/artists" className="nav-item active"><a  className={styles.navLink}>Artists</a></Nav.Link>
                      <Nav.Link href="https://wealth-and-taste.myshopify.com/" className="nav-item active"><a  className={styles.navLink}>Store</a></Nav.Link>
                      <Nav.Link className="nav-item active"><a href="/location" className={styles.navLink}>Location</a></Nav.Link>
                      <Nav.Link className="nav-item active"><a href="https://docs.google.com/forms/d/e/1FAIpQLSeWl6rmniolurdvfxznFo8kg9LdAttrLFZt_r9ny9iLbEVc7A/viewform?pli=1" className={styles.navLink}>La Vie En Rose</a></Nav.Link>
                      <Nav.Link className="nav-item active"><a href="/booking" className={styles.navLink}>Booking</a></Nav.Link>    
                </Nav>
              </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}