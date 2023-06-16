import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="footer">
        <div className="container">
            <div className='footer-info'>
                <div className="footer-menu">
                    <h3 className="menu-title">About</h3>
                    <ul>
                        <li>History</li>
                        <li>Our team</li>
                        <li>Brand Guidelines</li>
                        <li>Terms & Condition</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <h3 className="menu-title">Services</h3>
                    <ul>
                        <li>How to Order</li>
                        <li>Our Product</li>
                        <li>Order Status</li>
                        <li>Promo</li>
                        <li>Payment Method</li>
                    </ul>
                </div>
                <div className="footer-search">
                    <h3 className="menu-title">Title here</h3>
                    <p>Lorem Ipsum available, but the majorit</p>
                    <form action="" className="email-content">
                        <input type="email" name='user_mail' />
                        <button className="btn-mail">
                            <i className="far fa-paper-plane"></i>
                        </button>
                    </form>
                    <div className="social">
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-whatsapp"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer