// Lendora Home Page (Modern Blue/White Design)
// Assets: All icons via react-icons, images from /public
// Figma: (add link if available)

'use client';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const switchLanguage = (lang: string) => {
    // Placeholder for language switch logic
    alert(`Switch to language: ${lang}`);
  };
  return (
    <>
      {/* Navbar */}
      <header className="bg-white shadow-sm lendora-nav sticky-top">
        <nav className="container d-flex justify-content-between align-items-center py-3">
          <div className="d-flex align-items-center">
            <span className="h3 fw-bold text-primary m-0">Lendora</span>
          </div>
          <ul className="d-none d-md-flex nav lendora-nav align-items-center mb-0">
            <li className="nav-item"><Link href="#" className="nav-link active">Home</Link></li>
            <li className="nav-item"><Link href="#how" className="nav-link">How It Works</Link></li>
            <li className="nav-item"><Link href="#loan" className="nav-link">Loan Options</Link></li>
            <li className="nav-item"><Link href="#faq" className="nav-link">FAQ</Link></li>
            <li className="nav-item"><Link href="#contact" className="nav-link">Contact</Link></li>
          </ul>
          <div className="d-none d-md-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-1 lendora-nav">
              <button onClick={() => switchLanguage('en')} className="btn btn-link p-0 text-primary">EN</button>
              <span className="text-muted">|</span>
              <button onClick={() => switchLanguage('fa')} className="btn btn-link p-0 text-secondary">FA</button>
              <span className="text-muted">|</span>
              <button onClick={() => switchLanguage('tr')} className="btn btn-link p-0 text-secondary">TR</button>
            </div>
            <button className="lendora-login-btn">Login / Register</button>
          </div>
          {/* Mobile menu button */}
          <div className="d-md-none ms-2">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="btn btn-link text-secondary p-0">
              <FaBars size={24} />
            </button>
          </div>
        </nav>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="bg-white border-top d-md-none">
            <div className="px-3 pt-2 pb-3">
              <Link href="#" className="d-block py-2 text-dark nav-link">Home</Link>
              <Link href="#how" className="d-block py-2 text-secondary nav-link">How It Works</Link>
              <Link href="#loan" className="d-block py-2 text-secondary nav-link">Loan Options</Link>
              <Link href="#faq" className="d-block py-2 text-secondary nav-link">FAQ</Link>
              <Link href="#contact" className="d-block py-2 text-secondary nav-link">Contact</Link>
              <div className="d-flex align-items-center gap-1 mt-2 lendora-nav">
                <button onClick={() => switchLanguage('en')} className="btn btn-link p-0 text-primary">EN</button>
                <span className="text-muted">|</span>
                <button onClick={() => switchLanguage('fa')} className="btn btn-link p-0 text-secondary">FA</button>
                <span className="text-muted">|</span>
                <button onClick={() => switchLanguage('tr')} className="btn btn-link p-0 text-secondary">TR</button>
              </div>
              <button className="lendora-login-btn w-100 mt-3">Login / Register</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="lendora-hero-bg py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{lineHeight:1.15}}>Secure Crypto & Euro<br/>Loans — Instantly.</h1>
              <p className="lead text-secondary mb-4">Lendora offers low-interest loans backed by your digital assets or fiat.</p>
              <button className="lendora-btn btn btn-primary btn-lg px-4">Get Started</button>
            </div>
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <div className="lendora-card p-4 w-100" style={{ maxWidth: 400 }}>
                <div className="d-flex justify-content-center align-items-center mb-3" style={{height:56}}>
                  <span className="bg-primary d-flex align-items-center justify-content-center rounded-circle" style={{width:56, height:56}}>
                    <span className="fs-3 text-white">$</span>
                  </span>
                </div>
                <h5 className="fw-bold text-center mb-4">Loan Calculator</h5>
                <div className="mb-3">
                  <label className="form-label">Collateral Amount</label>
                  <input type="number" className="form-control form-control-lg" placeholder="10,000" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Currency</label>
                  <select className="form-select form-select-lg">
                    <option>USDT</option>
                    <option>BTC</option>
                    <option>ETH</option>
                  </select>
                </div>
                <div className="mb-3 lendora-card p-3 text-center">
                  <div className="fw-semibold text-secondary small">Max Loan Amount:</div>
                  <div className="fw-bold fs-5 text-success">€40,000</div>
                  <div className="fw-semibold text-secondary small mt-2">Interest Rate:</div>
                  <div className="fw-bold text-success">0.5%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Lendora Section */}
      <section className="bg-white py-5">
        <div className="container">
          <h2 className="text-center fw-bold display-5 mb-3">Why Choose Lendora?</h2>
          <p className="text-center text-secondary fs-4 mb-5">Experience the future of lending with our secure, fast, and flexible loan platform</p>
          <div className="row text-center g-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="d-flex flex-column align-items-center">
                <span className="d-flex align-items-center justify-content-center mb-3" style={{background:'#eaf0ff', borderRadius:'50%', width:64, height:64}}>
                  <span className="fs-2 text-primary">↗</span>
                </span>
                <h5 className="fw-bold mb-2">Up to 4x Leverage</h5>
                <p className="text-secondary">Get loans up to 4 times your wallet balance with competitive rates</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="d-flex flex-column align-items-center">
                <span className="d-flex align-items-center justify-content-center mb-3" style={{background:'#e6f9f0', borderRadius:'50%', width:64, height:64}}>
                  <span className="fs-2 text-success">$</span>
                </span>
                <h5 className="fw-bold mb-2">Multi-Currency Support</h5>
                <p className="text-secondary">Supports USDT, ETH, EUR and other major cryptocurrencies</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="d-flex flex-column align-items-center">
                <span className="d-flex align-items-center justify-content-center mb-3" style={{background:'#f3eaff', borderRadius:'50%', width:64, height:64}}>
                  <span className="fs-2 text-purple">⏱</span>
                </span>
                <h5 className="fw-bold mb-2">Fast Approval</h5>
                <p className="text-secondary">Get approved in under 5 minutes with our automated system</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="d-flex flex-column align-items-center">
                <span className="d-flex align-items-center justify-content-center mb-3" style={{background:'#fff4e6', borderRadius:'50%', width:64, height:64}}>
                  <span className="fs-2 text-warning">✔</span>
                </span>
                <h5 className="fw-bold mb-2">0.5% Interest Rate</h5>
                <p className="text-secondary">Industry-leading low interest rates starting from just 0.5%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center g-4 justify-content-center">
            <div className="col-6 col-md-3">
              <div className="mb-1 fw-bold display-6">25,000</div>
              <div className="text-secondary">Active Users</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="mb-1 fw-bold display-6">€150,000,000</div>
              <div className="text-secondary">Total Loans Issued</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="mb-1 fw-bold display-6">3 min</div>
              <div className="text-secondary">Avg. Approval Time</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="mb-1 fw-bold display-6">98%</div>
              <div className="text-secondary">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-5">
        <div className="container">
          <h2 className="text-center fw-bold display-5 mb-4">What Our Users Say</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-4">
              <div className="bg-white p-4 rounded-4 shadow-sm border h-100">
                <div className="d-flex align-items-center mb-2">
                  <span className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center me-2" style={{width:40, height:40}}>AK</span>
                  <div>
                    <div className="fw-bold">Ahmed Kaya</div>
                    <div className="text-secondary small">🇹🇷 Turkey</div>
                  </div>
                </div>
                <div className="fst-italic mb-2">"Lendora made it incredibly easy to get a loan against my crypto. The process was fast and transparent."</div>
                <div className="text-warning">★★★★★</div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="bg-white p-4 rounded-4 shadow-sm border h-100">
                <div className="d-flex align-items-center mb-2">
                  <span className="rounded-circle bg-success text-white fw-bold d-flex align-items-center justify-content-center me-2" style={{width:40, height:40}}>SM</span>
                  <div>
                    <div className="fw-bold">Sarah Miller</div>
                    <div className="text-secondary small">🇬🇧 United Kingdom</div>
                  </div>
                </div>
                <div className="fst-italic mb-2">"The 0.5% interest rate is unbeatable. I've used other platforms but Lendora is by far the best."</div>
                <div className="text-warning">★★★★★</div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="bg-white p-4 rounded-4 shadow-sm border h-100">
                <div className="d-flex align-items-center mb-2">
                  <span className="rounded-circle bg-purple text-white fw-bold d-flex align-items-center justify-content-center me-2" style={{width:40, height:40}}>RH</span>
                  <div>
                    <div className="fw-bold">Reza Hosseini</div>
                    <div className="text-secondary small">🇮🇷 Iran</div>
                  </div>
                </div>
                <div className="fst-italic mb-2">"Professional service with excellent customer support. Highly recommended for crypto-backed loans."</div>
                <div className="text-warning">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="lendora-hero-bg py-5">
        <div className="container">
          <h2 className="text-center fw-bold display-5 mb-4">How It Works</h2>
          <p className="text-center text-secondary fs-5 mb-5">Get your loan in 4 simple steps</p>
          <div className="row text-center g-4 justify-content-center">
            <div className="col-6 col-md-3">
              <div className="d-flex flex-column align-items-center">
                <span className="d-flex align-items-center justify-content-center mb-3 bg-primary text-white fw-bold" style={{borderRadius:'50%', width:56, height:56, fontSize:28}}>1</span>
                <h5 className="fw-bold mb-2">Connect Wallet</h5>
                <p className="text-secondary">Connect your crypto wallet securely to our platform</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex flex-column align-items-center">
                <span className="d-flex align-items-center justify-content-center mb-3 bg-primary text-white fw-bold" style={{borderRadius:'50%', width:56, height:56, fontSize:28}}>2</span>
                <h5 className="fw-bold mb-2">Provide Balance</h5>
                <p className="text-secondary">Show your initial balance for collateral verification</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex flex-column align-items-center">
                <span className="d-flex align-items-center justify-content-center mb-3 bg-primary text-white fw-bold" style={{borderRadius:'50%', width:56, height:56, fontSize:28}}>3</span>
                <h5 className="fw-bold mb-2">Submit Request</h5>
                <p className="text-secondary">Submit your loan request with desired amount</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex flex-column align-items-center">
                <span className="d-flex align-items-center justify-content-center mb-3 bg-primary text-white fw-bold" style={{borderRadius:'50%', width:56, height:56, fontSize:28}}>4</span>
                <h5 className="fw-bold mb-2">Receive Funds</h5>
                <p className="text-secondary">Get your funds transferred within minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Lendora Section */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <h2 className="fw-bold mb-3">About Lendora</h2>
              <p className="mb-4 text-secondary">Since 2020, Lendora has been at the forefront of crypto-backed lending, providing secure and reliable financial services to users worldwide. We are KYB verified and have issued over €150 million in loans.</p>
              <div className="row g-3 mb-3">
                <div className="col-6 col-md-3">
                  <div className="fw-bold">2020</div>
                  <div className="text-secondary small">Founded</div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold">€150M+</div>
                  <div className="text-secondary small">Loans Issued</div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold">25K+</div>
                  <div className="text-secondary small">Happy Users</div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold">KYB</div>
                  <div className="text-secondary small">Verified</div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="lendora-card p-4 text-center h-100 d-flex flex-column align-items-center justify-content-center" style={{background:'#f8faff'}}>
                <span className="d-flex align-items-center justify-content-center mb-3 bg-primary bg-opacity-10" style={{borderRadius:'50%', width:64, height:64}}>
                  <span className="fs-1 text-primary">🛡</span>
                </span>
                <h5 className="fw-bold mb-2">Trusted & Secure</h5>
                <p className="text-secondary mb-0">Your assets are protected with bank-level security and insurance coverage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Support Section */}
      <section className="lendora-hero-bg py-5">
        <div className="container">
          <h2 className="text-center fw-bold display-5 mb-4">Get Support</h2>
          <p className="text-center text-secondary fs-5 mb-5">We're here to help you 24/7</p>
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-5">
              <div className="mb-4">
                <div className="fw-bold mb-2">Live Chat</div>
                <div className="text-secondary mb-2">Get instant help from our support team</div>
                <button className="btn btn-primary btn-sm">Start Chat</button>
              </div>
              <div className="mb-4">
                <div className="fw-bold mb-2">Email Support</div>
                <div className="text-secondary mb-2">support@lendora.xyz</div>
                <div className="text-secondary small">Response within 2 hours</div>
              </div>
              <div className="mb-4">
                <div className="fw-bold mb-2">Social Media</div>
                <div className="d-flex gap-3">
                  <span className="text-primary">Telegram</span>
                  <span className="text-success">WhatsApp</span>
                  <span className="text-danger">Instagram</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="lendora-card p-4">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Your name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="your@email.com" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows={4} placeholder="How can we help you?"></textarea>
                  </div>
                  <button className="btn btn-primary w-100" type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white pt-5 pb-4 mt-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-3 mb-3">
              <h5 className="fw-bold mb-2">Lendora</h5>
              <p className="text-secondary small">Secure crypto and fiat loans for the modern world.</p>
              <div className="d-flex gap-2 mt-2">
                <span className="text-white-50">&#x1F426;</span>
                <span className="text-white-50">&#x1F426;</span>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold mb-2">Company</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-secondary text-decoration-none">About Us</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Careers</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Press</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Blog</a></li>
              </ul>
            </div>
            <div className="col-md-2 mb-3">
              <h6 className="fw-bold mb-2">Legal</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-secondary text-decoration-none">Terms of Service</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Privacy Policy</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Cookie Policy</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Compliance</a></li>
              </ul>
            </div>
            <div className="col-md-2 mb-3">
              <h6 className="fw-bold mb-2">Help</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-secondary text-decoration-none">Support Center</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">FAQ</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Contact Us</a></li>
                <li><a href="#" className="text-secondary text-decoration-none">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between align-items-center border-top border-secondary pt-3 mt-3 text-secondary small">
            <div>&copy; 2024 Lendora. All rights reserved. | Registered in Estonia, EU</div>
            <div className="d-flex gap-3 align-items-center">
              <span>SSL Secured</span>
              <span>KYB Verified</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
