import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {FaPhoneAlt,FaPrint,FaEnvelope,FaFacebookF,FaGithub,FaGoogle,FaInstagram,FaLinkedin,FaTwitter,FaMapMarkerAlt} from "react-icons/fa";


const Footer=()=>{
    return(
        <header>
<MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks</span>
        </div>
       <div>
       <a href='#!' className='me-4 text-reset'>
            <FaFacebookF />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <FaTwitter />
         </a>
         <a href='#!' className='me-4 text-reset'>
            <FaGoogle />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <FaInstagram />
         </a>
         <a href='#!' className='me-4 text-reset'>
            <FaLinkedin />
         </a>
         <a href='#!' className='me-4 text-reset'>
          <FaGithub />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                Skins
              </h6>
              <p>
               Our mission is to help you to get comfortable with your skin , to love yourself , appriciate yourself 
               and know that you're worthy 
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Legal</h6>
              <p>
              <a href='/aboutUs' className='text-reset'>
                  Privacy
                </a>
              </p>
              <p>
              <a href='/aboutUs' className='text-reset'>
                  Terms
               </a>
              </p>
              <p>
              <a href='/aboutUs' className='text-reset'>
                  Accessibility
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Navigate</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/aboutUs' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='/order' className='text-reset'>
                  Order
                </a>
              </p>
              <p>
                <a href='/cart' className='text-reset'>
                  Cart
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p>
                <FaMapMarkerAlt /> New York, NY 10012, US
              </p>
              <p>
                <FaEnvelope /> hello@skins.com
              </p>
              <p>
              <FaPhoneAlt/> + 01 234 567 88
              </p>
              <p>
                <FaPrint /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022  : 
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Skins.com
        </a>
      </div>
    </MDBFooter>
        </header>
    )
};

export default Footer;