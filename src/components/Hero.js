import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";


import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
            <Link to="/products">
                <MDBView>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80"
                    alt="First slide"
                    style={{ "width": "300px", "height": "300px", "object-fit": "cover"  }}
                    />
                <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                    <h3 className="h3-responsive">Check this out!</h3>
                    <p>Our Featured Products</p>
                </MDBCarouselCaption>
            </Link>
        </MDBCarouselItem>

        <MDBCarouselItem itemId="2">
        <Link to="/products">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1607083207685-aaf05f2c908c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt="Second slide"
              style={{ "width": "300px", "height": "300px", "object-fit": "cover"  }}
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Sale</h3>
            <p>OFFLINE STORE ONLY</p>
          </MDBCarouselCaption>
          </Link>
        </MDBCarouselItem>

        <MDBCarouselItem itemId="3">
        <Link to="/products?isBestSeller=yes">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1546641082-b3c3d4bfae25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt="Third slide"
              style={{ "width": "300px", "height": "300px", "object-fit": "cover"  }}
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h5 className="h3-responsive">BEST SELLERS 2021</h5>
            <p>Best Seller In SANHGHWA STUDIO</p>
          </MDBCarouselCaption>
          </Link>
        </MDBCarouselItem>
        
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default Hero;