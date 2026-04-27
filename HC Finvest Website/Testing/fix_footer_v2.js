const fs = require('fs');
const path = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website/index.html';
let content = fs.readFileSync(path, 'utf8');

const footerMainStart = content.indexOf('<div class="footer-main">');
const footerBottomStart = content.indexOf('<div class="footer-bottom">');

if (footerMainStart !== -1 && footerBottomStart !== -1) {
    const newFooterMain = `<div class="footer-main">
                <div class="container">
                    <div class="footer-main-top">
                        <div class="row">
                            <div class="col-xl-3 col-lg-6 col-md-6 single-widget">
                                <div class="single-footer-widget-contact wow fadeInUp" data-wow-duration="1500ms"
                                    data-wow-delay="100ms">
                                    <div class="footer-logo-style1">
                                        <a href="index.html">
                                            <img src="assets/images/hcfinvestlogolight.png" alt="HC Finvest Logo"
                                                style="height: 50px; width: auto;">
                                        </a>
                                    </div>
                                    <div class="btn-box">
                                        <a href="https://trade.hcfinvest.com/user/signup" class="btn-one"
                                            target="_blank" rel="noopener noreferrer">
                                            <span class="txt">
                                                New Account
                                                <i class="icon-right-arrow"></i>
                                            </span>
                                        </a>

                                        <a href="https://trade.hcfinvest.com/user/login" class="btn-one" target="_blank"
                                            rel="noopener noreferrer">
                                            <span class="txt">
                                                Sign In
                                                <i class="icon-right-arrow"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <!--End Single Footer Widget-->

                            <!--Start Single Footer Widget-->
                            <div class="col-xl-2 col-lg-6 col-md-6 single-widget">
                                <div class="single-footer-widget wow fadeInDown" data-wow-duration="1200ms"
                                    data-wow-delay="100ms">
                                    <div class="title">
                                        <h3>Trading</h3>
                                    </div>
                                    <div class="footer-widget-links">
                                        <ul>
                                            <li>
                                                <a href="markets1-trade-forex.html">
                                                    Forex Trading
                                                    <i class="icon-right-arrow"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="markets3-commodities-market.html">
                                                    Commodities
                                                    <i class="icon-right-arrow"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="markets5-indices-market.html">
                                                    Indices
                                                    <i class="icon-right-arrow"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="markets2-stock-market.html">
                                                    Stocks
                                                    <i class="icon-right-arrow"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="markets6-metals-market.html">
                                                    Metals
                                                    <i class="icon-right-arrow"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="markets4-crypto-market.html">
                                                    Cryptocurrencies
                                                    <i class="icon-right-arrow"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!--End Single Footer Widget-->

                            <!--Start Single Footer Widget-->
                            <div class="col-xl-2 col-lg-6 col-md-6 single-widget">
                                <div class="single-footer-widget wow fadeInDown" data-wow-duration="1200ms"
                                    data-wow-delay="200ms">
                                    <div class="title">
                                        <h3>Platform</h3>
                                    </div>
                                    <div class="footer-widget-links">
                                        <ul>
                                            <li>
                                                <a href="https://trade.hcfinvest.com/user/signup" target="_blank"
                                                    rel="noopener noreferrer">
                                                    Web Trader
                                                    <i class="icon-right-arrow"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="single-footer-widget mt28 wow fadeInUp" data-wow-duration="1500ms"
                                    data-wow-delay="300ms">
                                    <div class="title">
                                        <h3>Support</h3>
                                    </div>
                                    <div class="footer-widget-links">
                                        <ul>
                                            <li>
                                                <a href="contact.html">
                                                    Get in Touch
                                                    <i class="icon-right-arrow"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <!--End Single Footer Widget-->

                            <!--Start Single Footer Widget-->
                            <div class="col-xl-2 col-lg-6 col-md-6 single-widget">
                                <div class="single-footer-widget wow fadeInDown" data-wow-duration="1200ms"
                                    data-wow-delay="400ms">
                                    <div class="title">
                                        <h3>Company</h3>
                                    </div>
                                    <div class="footer-widget-links">
                                        <ul>
                                            <li>
                                                <a href="about.html">
                                                    About Us
                                                    <i class="icon-right-arrow"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-3.html">
                                                    Blogs
                                                    <i class="icon-right-arrow"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="faq.html">
                                                    FAQ's
                                                    <i class="icon-right-arrow"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="privacy-policy.html">
                                                    Privacy Policy
                                                    <i class="icon-right-arrow"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="about.html">
                                                    Careers
                                                    <i class="icon-right-arrow"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!--End Single Footer Widget-->
                        </div>
                    </div>

                    <div class="footer-main-bottom">
                        <div class="container">
                            <div class="footer-main-bottom__inner">
                                <div class="left-box">
                                    <div class="icon-box">
                                        <a href="https://apps.apple.com/us/app/apple-store/id375380948">
                                            <span class="icon-app-store"></span>
                                        </a>
                                        <a href="https://play.google.com/store/games?hl=es_419">
                                            <span class="icon-google-play"><span class="path1"></span><span
                                                    class="path2"></span><span class="path3"></span><span
                                                    class="path4"></span></span>
                                        </a>
                                    </div>
                                    <div class="text">
                                        <p>Join with 2.5m <br>Traders.</p>
                                    </div>
                                </div>
                                <ul class="middle-box clearfix">
                                    <li>
                                        <a href="https://www.facebook.com/">
                                            <div class="icon">
                                                <i class="icon-facebook"></i>
                                            </div>
                                            <div class="text">
                                                <p>Facebook</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/login">
                                            <div class="icon">
                                                <i class="icon-linkedin"></i>
                                            </div>
                                            <div class="text">
                                                <p>Linkedin</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/">
                                            <div class="icon">
                                                <i class="icon-youtube"></i>
                                            </div>
                                            <div class="text">
                                                <p>Youtube</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/">
                                            <div class="icon">
                                                <i class="icon-social"></i>
                                            </div>
                                            <div class="text">
                                                <p>Instagram</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div class="right-box">
                                    <div class="text">
                                        <p>Instant Support via <br>Telegram</p>
                                    </div>
                                    <div class="icon">
                                        <a href="https://telegram.org/">
                                            <i class="icon-telegram-1"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            `;
    content = content.slice(0, footerMainStart) + newFooterMain + content.slice(footerBottomStart);
    fs.writeFileSync(path, content, 'utf8');
    console.log('Fixed entire footer section in index.html.');
} else {
    console.log('Could not find footer-main or footer-bottom.');
}
