import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Route, Link, Switch,} from 'react-router-dom';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
    
//import './Jumbotron.css';

const Header = () => {
  return (
    <BrowserRouter>
        <MDBContainer className="mt-5 text-center">
          <MDBRow>
            <MDBCol>
              <MDBJumbotron className="p-0">
                <MDBCardImage
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg"
                />
                <MDBCardBody>
                  <MDBCardTitle className="h3">Card title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up
                    the bulk of the card&apos;s content.
                  </MDBCardText>
                  <MDBBtn href="#" gradient="purple" rounded>
                    LOGIN
                  </MDBBtn>
                  <MDBBtn href="#" gradient="purple" rounded>
                    REGISTRATION
                  </MDBBtn>
                </MDBCardBody>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </BrowserRouter>
      )
    }
   
export default Header;