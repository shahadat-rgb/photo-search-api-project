import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="Footer">
            <div className="FooterTop">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="AboutContent">
                            <h3 className="text-info">Photographer Shahadat</h3>
                                <h4>About Us</h4>
                                <p>Lorem ipsum dolor sit amet consectetur ul adipisicing elit. Voluptatibus  recusandae,qui maiores officiis ipsa consequat reiciendis laborum.</p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                            <h6>Important Info</h6> 
                            <p>Read our blog</p>
                            <p>Sign up to deliver</p>
                            <p>Privacy & Policy</p>
                            <p>Terms of use</p>
                            <p>About Online food</p>
                        </div>
                        <div className="col-md-3">
                            <h6>Our Company</h6>
                            <p>Get help</p>
                            <p>Read FAQs</p>
                            <p>View All Cities</p>
                            <p>Restaurant near me</p>
                            <p>Pricing</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="FooterBottom">
                <p>&copy; {new Date().getFullYear()} All Copyright Reserved | Md Shahadat Hossain</p>
            </div>
        </div>
    );
};

export default Footer;