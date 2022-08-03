import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import product from './product.js';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//라우터
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
// 아이콘
import { AiOutlineRocket, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { RiInformationLine, RiArrowDropDownLine } from 'react-icons/ri';
import { HiOutlineSupport } from 'react-icons/hi';
import { VscAccount } from 'react-icons/vsc';
import { FaRegLightbulb } from 'react-icons/fa';
import {GrRotateLeft} from 'react-icons/gr'

function App() {
  let [furniture, setFurniture] = useState(product);
  const options = {
    marginRight: 20,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      }
    },
  };
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" variant="dark" id="top-nav">
          <Container>
            <Navbar.Brand href="#home">Special collection already available. <span>Read more ...</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" />
              <Nav>
                <Nav className="me-auto">
                  <NavDropdown title="USD" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav className="me-auto">
                  <NavDropdown title="English" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav.Link href="#deets">Sign In / Sign Up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Header_middle />
      </header>
      <Carousel id='carousel-control'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slide-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Bedroom Furniture</p>
            <h3>Find Comfort<br />That suits You.</h3>
            <button>Shop Now →</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slide-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>Deals and Promotions</p>
            <h3>Ypperling<br />Coffee Table</h3>
            <h4><span>$</span>49,99</h4>
            <button>Shop Now →</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slide-3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>
              Living Room
            </p>
            <h3>Make Your Living Room<br />Work For You.</h3>
            <h6>from $<span>9,99</span></h6>
            <button>Shop Now →</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <OtherLogo />
      <Promotion />
      <>
        {product.map((item, i) => {
          return (
            <TopProduct product={product[i]} i={i + 1} />
          )
        })}
      </>
      <div className='top-product'>
        <ul>
          <li>Featured</li>
          <li>On Sale</li>
          <li>Top Rated</li>
        </ul>
        <OwlCarousel className="slider-items owl-carousel" {...options}>
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
          <div class="item">5</div>
          <div class="item">6</div>
          <div class="item">7</div>
        </OwlCarousel>
      </div>
      <Blog/>
      <Footer />
    </>
  );
}

function Header_middle() {
  return (
    <>
      <div className='header-middle'>
        <div className='logo-title'>
          <img src='img/header-logo.png' alt='logo' />
        </div>
        <form className='search-container'>
          <input type='search' placeholder='Search Product ...' className='search-input' />
          <span className='mag'><AiOutlineSearch /></span>
        </form>
        <div className='header-icons'>
          <div className='header-icon-box'>
            <a href='#'><VscAccount className='header-icon-img' /></a>
            <p><a href='#'>Account</a></p>
          </div>
          <div className='header-icon-box'>
            <a href='#'><AiOutlineHeart className='header-icon-img' /></a>
            <p><a href='#'>Wishlist</a></p>
          </div>
          <div className='header-icon-box'>
            <a href='#'><AiOutlineShoppingCart className='header-icon-img' /></a>
            <p><a href='#'>Cart</a></p>
          </div>
        </div>
      </div>
      <div className='header-bottom'>
        <div className='hamburger'>
          <a href='#'><AiOutlineMenu className='hamburger-icon' />Browse Categories</a>
        </div>
        <div className='menu'>
          <ul>
            <li><a href='#'>Home<RiArrowDropDownLine /></a></li>
            <li><a href='#'>Shop<RiArrowDropDownLine /></a></li>
            <li><a href='#'>Product<RiArrowDropDownLine /></a></li>
            <li><a href='#'>Pages<RiArrowDropDownLine /></a></li>
            <li><a href='#'>Blog<RiArrowDropDownLine /></a></li>
            <li><a href='#'>Elements<RiArrowDropDownLine /></a></li>
          </ul>
        </div>
        <div className='bulb'>
          <FaRegLightbulb className='bulb-icon' />
          Clearance <span>Up to 30% Off</span>
        </div>
      </div>
    </>
  )
}

function OtherLogo() {
  return (
    <>
      <div className='other-logo'>
        <div className='logo-box'>
          <img src='img/1.png' alt='other-logo' />
        </div>
        <div className='logo-box'>
          <img src='img/2.png' alt='other-logo' />
        </div>
        <div className='logo-box'>
          <img src='img/3.png' alt='other-logo' />
        </div>
        <div className='logo-box'>
          <img src='img/4.png' alt='other-logo' />
        </div>
        <div className='logo-box'>
          <img src='img/5.png' alt='other-logo' />
        </div>
        <div className='logo-box'>
          <img src='img/6.png' alt='other-logo' />
        </div>
        <div className='logo-box'>
          <img src='img/7.png' alt='other-logo' />
        </div>
      </div>
    </>
  )
}

function Blog() {
  let postTop = {
    color:'#ccc',
    margin:'0'
  }

  let postMiddle = {
    color:'#333',
    fontSize:'18px',
    fontWeight:'600',
  }
  return (
    <div className="App">
      <div className="container mt-5">
        <h4>From Our Blog</h4>
        <div className="row">
          <div className="col-sm-4">
            <a href='#'><img src='img/post-1.jpg' alt='post'/></a>
            <p style={postTop}><a href='#'>Now 22,2022 </a>, 0 Comments</p>
            <a href='#' style={postMiddle }>Sed adipiscing ornare.</a>
            <p><a href='#' className='continue'>Continue Reading</a></p>
          </div>
          <div className="col-sm-4">
            <a href='#'><img src='img/post-2.jpg' alt='post'/></a>
            <p style={postTop}><a href='#'>Dec 12,2022 </a>, 0 Comments</p>
            <a href='#' style={postMiddle }>Fusce lacinia arcuet nulla.</a>
            <p><a href='#' className='continue'>Continue Reading</a></p>
          </div>
          <div className="col-sm-4">
            <a href='#'><img src='img/post-3.jpg' alt='post'/></a>
            <p style={postTop}><a href='#'>Dec 19,2022 </a>, 0 Comments</p>
            <a href='#' style={postMiddle }>Quisque volutpat mattis eros.</a>
            <p><a href='#' className='continue'>Continue Reading</a></p>
          </div>
        </div>
        <button>View More Articles →</button>
      </div>
    </div>
  )
}

function Promotion() {
  const weight = {
    fontWeight: '300'
  }
  return (
    <>
      <div className='promotion'>
        <div className='promotion-container' >
          <img src='img/banner-1.jpg' alt='banner' />
          <div className='promotion-text'>
            <p className='p-6'>Clearance</p>
            <h5 className='h-b'>Coffee Tables<br /><span style={weight}>from $19.99</span></h5>
            <button className='button-b'>Shop Now  →</button>
          </div>
        </div>
        <div className='promotion-container'>
          <img src='img/banner-2.jpg' alt='banner' />
          <div className='promotion-text2'>
            <p>On Sale</p>
            <h5 className='h-w'>Amazing<br />Armchairs<br /><span style={weight}>from $39.99</span></h5>
            <button className='button-w'>Discover Now  →</button>
          </div>
        </div>
        <div className='promotion-container'>
          <div className='promotion-box'>
            <img src='img/banner-3.jpg' alt='banner' />
            <div className='promotion-text3'>
              <p>New Arrivals</p>
              <h5 className='h-w'>Storage<br />Boxes Baskets</h5>
              <button className='button-w'>Discover Now  →</button>
            </div>
          </div>
          <div className='promotion-box'>
            <img src='img/banner-4.jpg' alt='banner' />
            <div className='promotion-text3'>
              <p className='p-6'>On Sale</p>
              <h5 className='h-b'>Lamps Offer<br /><span style={weight}>up to 30% off</span></h5>
              <button className='button-b'>Shop Now  →</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function TopProduct(props) {
  return (
    <div className='top-product'>
      <img src={'img/product-' + props.i + '-1.jpg'} alt='furniture' />
      <h4>{props.product.name}</h4>
      <p>{props.product.price}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <>
      <div className='footer-top'>
        <div className='logo-sign'>
          <div className='logo-container'>
            <AiOutlineRocket className='footer-icons' />
            <div className='logo-text'>
              <h4>Free Shipping</h4>
              <h5>orders $50 or more</h5>
            </div>
          </div>
          <div className='logo-container'>
            <GrRotateLeft className='footer-icons' />
            <div className='logo-text'>
              <h4>Free Returns</h4>
              <h5>within 30 days</h5>
            </div>
          </div>
          <div className='logo-container'>
            <RiInformationLine className='footer-icons' />
            <div className='logo-text'>
              <h4>Get 20% Of 1 Item</h4>
              <h5>when you sign up</h5>
            </div>
          </div>
          <div className='logo-container'>
            <HiOutlineSupport className='footer-icons' />
            <div className='logo-text'>
              <h4>We Support</h4>
              <h5>24/7 amazing services</h5>
            </div>
          </div>
        </div>
        <div className='last-deals' style={{ backgroundImage: "url('img/footer-bg.jpg')" }}>
          <h3>Get The Latest Deals</h3>
          <p>and receive $20 coupon for first shopping</p>
          <form>
            <input type='email' placeholder='Enter your Email Address' />
            <input type='submit' value='Subscribe →' /><span></span>
          </form>
        </div>
      </div>
      <footer>
        <div className='footer-container'>
          <img src='img/header-logo.png' alt='header-logo' className='footer-logo' />
          <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu
            vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis,
            accumsan porttitor, facilisis luctus, metus.</p>
          <div className='call-number'>
            <h5>Got Question? Call us 24/7</h5>
            <h3>+0123 456 789</h3>
          </div>
          <div className='payments'>
            <h5>Payment Method</h5>
            <img src='img/payments.png' alt='payments' />
          </div>
        </div>
        <div className='footer-container'>
          <ul>
            <h4>Information</h4>
            <li><a href='#'>About Molla</a></li>
            <li><a href='#'>How to shop on Molla</a></li>
            <li><a href='#'>FAQ</a></li>
            <li><a href='#'>Contact us</a></li>
            <li><a href='#'>Log in</a></li>
          </ul>
        </div>
        <div className='footer-container'>
          <ul>
            <h4>Customer Service</h4>
            <li><a href='#'>Payment Methods</a></li>
            <li><a href='#'>Money-back guarantee!</a></li>
            <li><a href='#'>Returns</a></li>
            <li><a href='#'>Shipping</a></li>
            <li><a href='#'>Terms and conditions</a></li>
            <li><a href='#'>Privacy Policy</a></li>
          </ul>
        </div>
        <div className='footer-container'>
          <ul>
            <h4>My Account</h4>
            <li><a href='#'>Sign In</a></li>
            <li><a href='#'>View Cart</a></li>
            <li><a href='#'>My Wishlist</a></li>
            <li><a href='#'>Track My Order</a></li>
            <li><a href='#'>Help</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App;
