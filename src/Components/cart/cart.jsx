import React from 'react'
import '../Home/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './cart.css'
import { Link } from 'react-router-dom';
import product1 from '../img/product-1.jpg'
import product2 from '../img/product-2.jpg'
import product3 from '../img/product-3.jpg'
import product4 from '../img/product-4.jpg'
import product5 from '../img/product-5.jpg'


function Cart() {
  return (
  <>
  <>
  {/* Topbar Start */}
  <div className="container-fluid">
    <div className="row bg-secondary py-2 px-xl-5">
      <div className="col-lg-6 d-none d-lg-block">
        <div className="d-inline-flex align-items-center">
          <a className="text-dark" href="">
            FAQs
          </a>
          <span className="text-muted px-2">|</span>
          <a className="text-dark" href="">
            Help
          </a>
          <span className="text-muted px-2">|</span>
          <a className="text-dark" href="">
            Support
          </a>
        </div>
      </div>
      <div className="col-lg-6 text-center text-lg-right">
        <div className="d-inline-flex align-items-center">
          <a className="text-dark px-2" href="">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="text-dark px-2" href="">
            <i className="fab fa-twitter" />
          </a>
          <a className="text-dark px-2" href="">
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="text-dark px-2" href="">
            <i className="fab fa-instagram" />
          </a>
          <a className="text-dark pl-2" href="">
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
    </div>
    <div className="row align-items-center py-3 px-xl-5">
      <div className="col-lg-3 d-none d-lg-block">
        <a href="" className="text-decoration-none">
          <h1 className="m-0 display-5 font-weight-semi-bold">
            <span className="text-primary font-weight-bold border px-3 mr-1">
              E
            </span>
            Shopper
          </h1>
        </a>
      </div>
      <div className="col-lg-6 col-6 text-left">
        <form action="">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for products"
            />
            <div className="input-group-append">
              <span className="input-group-text bg-transparent text-primary">
                <i className="fa fa-search" />
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-3 col-6 text-right">
        <a href="" className="btn border">
          <i className="fas fa-heart text-primary"></i>
          <span className="badge">0</span>
        </a>
        <a href="" className="btn border">
          <i className="fas fa-shopping-cart text-primary"></i>
          <span className="badge">0</span>
        </a>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid">
    <div className="row border-top px-xl-5">
      
      <div className="col-lg-12">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
          <a href="" className="text-decoration-none d-block d-lg-none">
            <h1 className="m-0 display-5 font-weight-semi-bold">
              <span className="text-primary font-weight-bold border px-3 mr-1">
                E
              </span>
              Shopper
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/shop" className="nav-item nav-link">
                  Shop
                </Link>
                <Link to="/detail" className="nav-item nav-link">
                  Shop Detail
                </Link>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <Link to="/cart" className="dropdown-item">
                      Shopping Cart
                    </Link>
                    <Link to="/checkout" className="dropdown-item">
                      Checkout
                    </Link>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <div className="navbar-nav ml-auto py-0">
                <Link to="/login" className="nav-item nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-item nav-link">
                  Register
                </Link>
              </div>
            </div>
        </nav>
      </div>
    </div>
  </div>
  {/* Navbar End */}
  {/* Page Header Start */}
  <div className="container-fluid bg-secondary mb-5">
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: 300 }}
    >
      <h1 className="font-weight-semi-bold text-uppercase mb-3">
        Shopping Cart
      </h1>
      <div className="d-inline-flex">
        <p className="m-0">
          <a href="">Home</a>
        </p>
        <p className="m-0 px-2">-</p>
        <p className="m-0">Shopping Cart</p>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Cart Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5">
      <div className="col-lg-8 table-responsive mb-5">
        <table className="table table-bordered text-center mb-0">
          <thead className="bg-secondary text-dark">
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="align-middle">
            <tr>
              <td className="align-middle">
                <img src={product1} alt="" style={{ width: 50 }} />{" "}
                Colorful Stylish Shirt
              </td>
              <td className="align-middle">$150</td>
              <td className="align-middle">
                <div
                  className="input-group quantity mx-auto"
                  style={{ width: 100 }}
                >
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-minus">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-secondary text-center"
                    defaultValue={1}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-plus">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td className="align-middle">$150</td>
              <td className="align-middle">
                <button className="btn btn-sm btn-primary">
                  <i className="fa fa-times" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="align-middle">
                <img src={product2} alt="" style={{ width: 50 }} />{" "}
                Colorful Stylish Shirt
              </td>
              <td className="align-middle">$150</td>
              <td className="align-middle">
                <div
                  className="input-group quantity mx-auto"
                  style={{ width: 100 }}
                >
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-minus">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-secondary text-center"
                    defaultValue={1}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-plus">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </td>
              <td className="align-middle">$150</td>
              <td className="align-middle">
                <button className="btn btn-sm btn-primary">
                  <i className="fa fa-times" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="align-middle">
                <img src={product3} alt="" style={{ width: 50 }} />{" "}
                Colorful Stylish Shirt
              </td>
              <td className="align-middle">$150</td>
              <td className="align-middle">
                <div
                  className="input-group quantity mx-auto"
                  style={{ width: 100 }}
                >
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-minus">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-secondary text-center"
                    defaultValue={1}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-plus">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td className="align-middle">$150</td>
              <td className="align-middle">
                <button className="btn btn-sm btn-primary">
                  <i className="fa fa-times" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="align-middle">
                <img src={product4} alt="" style={{ width: 50 }} />{" "}
                Colorful Stylish Shirt
              </td>
              <td className="align-middle">$150</td>
              <td className="align-middle">
                <div
                  className="input-group quantity mx-auto"
                  style={{ width: 100 }}
                >
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-minus">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-secondary text-center"
                    defaultValue={1}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-plus">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td className="align-middle">$150</td>
              <td className="align-middle">
                <button className="btn btn-sm btn-primary">
                  <i className="fa fa-times" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="align-middle">
                <img src={product5} alt="" style={{ width: 50 }} />{" "}
                Colorful Stylish Shirt
              </td>
              <td className="align-middle">$150</td>
              <td className="align-middle">
                <div
                  className="input-group quantity mx-auto"
                  style={{ width: 100 }}
                >
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-minus">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-secondary text-center"
                    defaultValue={1}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-plus">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td className="align-middle">$150</td>
              <td className="align-middle">
                <button className="btn btn-sm btn-primary">
                  <i className="fa fa-times" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-lg-4">
        <form className="mb-5" action="">
          <div className="input-group">
            <input
              type="text"
              className="form-control p-4"
              placeholder="Coupon Code"
            />
            <div className="input-group-append">
              <button className="btn btn-primary">Apply Coupon</button>
            </div>
          </div>
        </form>
        <div className="card border-secondary mb-5">
          <div className="card-header bg-secondary border-0">
            <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3 pt-1">
              <h6 className="font-weight-medium">Subtotal</h6>
              <h6 className="font-weight-medium">$150</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-medium">Shipping</h6>
              <h6 className="font-weight-medium">$10</h6>
            </div>
          </div>
          <div className="card-footer border-secondary bg-transparent">
            <div className="d-flex justify-content-between mt-2">
              <h5 className="font-weight-bold">Total</h5>
              <h5 className="font-weight-bold">$160</h5>
            </div>
            <button className="btn btn-block btn-primary my-3 py-3">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Cart End */}
  {/* Footer Start */}
  <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
    <div className="row px-xl-5 pt-5">
      <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
        <a href="" className="text-decoration-none">
          <h1 className="mb-4 display-5 font-weight-semi-bold">
            <span className="text-primary font-weight-bold border border-white px-3 mr-1">
              E
            </span>
            Shopper
          </h1>
        </a>
        <p>
          Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no
          sit erat lorem et magna ipsum dolore amet erat.
        </p>
        <p className="mb-2">
          <i className="fa fa-map-marker-alt text-primary mr-3" />
          123 Street, New York, USA
        </p>
        <p className="mb-2">
          <i className="fa fa-envelope text-primary mr-3" />
          info@example.com
        </p>
        <p className="mb-0">
          <i className="fa fa-phone-alt text-primary mr-3" />
          +012 345 67890
        </p>
      </div>
      <div className="col-lg-8 col-md-12">
        <div className="row">
          <div className="col-md-4 mb-5">
            <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-dark mb-2" href="index.html">
                <i className="fa fa-angle-right mr-2" />
                Home
              </a>
              <a className="text-dark mb-2" href="shop.html">
                <i className="fa fa-angle-right mr-2" />
                Our Shop
              </a>
              <a className="text-dark mb-2" href="detail.html">
                <i className="fa fa-angle-right mr-2" />
                Shop Detail
              </a>
              <a className="text-dark mb-2" href="cart.html">
                <i className="fa fa-angle-right mr-2" />
                Shopping Cart
              </a>
              <a className="text-dark mb-2" href="checkout.html">
                <i className="fa fa-angle-right mr-2" />
                Checkout
              </a>
              <a className="text-dark" href="contact.html">
                <i className="fa fa-angle-right mr-2" />
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-dark mb-2" href="index.html">
                <i className="fa fa-angle-right mr-2" />
                Home
              </a>
              <a className="text-dark mb-2" href="shop.html">
                <i className="fa fa-angle-right mr-2" />
                Our Shop
              </a>
              <a className="text-dark mb-2" href="detail.html">
                <i className="fa fa-angle-right mr-2" />
                Shop Detail
              </a>
              <a className="text-dark mb-2" href="cart.html">
                <i className="fa fa-angle-right mr-2" />
                Shopping Cart
              </a>
              <a className="text-dark mb-2" href="checkout.html">
                <i className="fa fa-angle-right mr-2" />
                Checkout
              </a>
              <a className="text-dark" href="contact.html">
                <i className="fa fa-angle-right mr-2" />
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control border-0 py-4"
                  placeholder="Your Name"
                  required="required"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control border-0 py-4"
                  placeholder="Your Email"
                  required="required"
                />
              </div>
              <div>
                <button
                  className="btn btn-primary btn-block border-0 py-3"
                  type="submit"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="row border-top border-light mx-xl-5 py-4">
      <div className="col-md-6 px-xl-0">
        <p className="mb-md-0 text-center text-md-left text-dark">
          ©{" "}
          <a className="text-dark font-weight-semi-bold" href="#">
            Your Site Name
          </a>
          . All Rights Reserved. Designed by
          <a
            className="text-dark font-weight-semi-bold"
            href="https://htmlcodex.com"
          >
            HTML Codex
          </a>
          <br />
          Distributed By{" "}
          <a href="https://themewagon.com" target="_blank">
            ThemeWagon
          </a>
        </p>
      </div>
      <div className="col-md-6 px-xl-0 text-center text-md-right">
        <img className="img-fluid" src="img/payments.png" alt="" />
      </div>
    </div>
  </div>
  {/* Footer End */}
</>

  </>
  )
}

export default Cart
