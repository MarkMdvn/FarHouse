import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  let today = new Date();
  return (
    <MDBFooter className="footer-class text-center" color="light">
      <MDBContainer className="p-4">
        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Back to Home
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Welcome to FarHouse, your ideal choice for a luxurious and
            comfortable stay. Located in the heart of the world, we offer
            top-notch amenities, exquisite dining, and exceptional service to
            make your stay unforgettable.
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase hotel-color">Locations</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Madrid
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Paris
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Rome
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    London
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase hotel-color">Links</h5>

              <ul className="list-unstyled mb-0 text-center">
                <li>
                  <a href="#!" className="text-white p-3">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#!" className="text-white">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white p-3">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#!" className="text-white">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className=" mb-md-0">
              <div className="footer-image"></div>
            </MDBCol>
            <MDBCol lg="2" md="6" className="mb-4 mb-md-0">
              <div className="footer-image-europe"></div>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <a className="text-white" href="#">
          FarHouseHotels.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
