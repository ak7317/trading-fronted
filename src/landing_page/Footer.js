import React from 'react';
// import { Link } from "react-router-dom";

function Footer() {
    return ( 
        <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/images/logo.svg' alt="logo" style={{width: "50%"}}/>
                    <p>
              &copy; 2010 - 2026, Not TradeNova Broking Ltd. All rights reserved.
            </p>
                </div>
                <div className='col'>
                    
                      <p>Company</p>
                          <a style={{textDecoration:"none"}} href="/about">About</a>
                          <br/>
                          <a style={{textDecoration:"none"}} href="/Products">Products</a>
                           <br/>
                          <a style={{textDecoration:"none"}} href="/Pricing">Pricing</a>
                          <br/>
                          {/* <button  style={{textDecoration:"none"}}href="">Referral programme</a> */}
                          <button
                           style={{ textDecoration: "none", background: "none", color:"#0D6EFD" , border: "none", cursor: "pointer", marginLeft: "-9px"  }}
                            
                            >
                            Referral programme
                          </button>
                          <br/>
                          {/* <a style={{textDecoration:"none"}} href="">Careers</a> */}
                          <button
                           style={{ textDecoration: "none", background: "none", color:"#0D6EFD" , border: "none", cursor: "pointer", marginLeft: "-9px"  }}
                            
                            >
                            Careers
                          </button>
                          <br/>
                          {/* <a style={{textDecoration:"none"}} href="">TradeNova.tech</a> */}
                          <button
                           style={{ textDecoration: "none", background: "none", color:"#0D6EFD" , border: "none", cursor: "pointer", marginLeft: "-9px"  }}
                            
                            >
                            TradeNova.tech
                          </button>
                          <br/>
                          {/* <a style={{textDecoration:"none"}} href="">Press & media</a> */}
                          <button
                           style={{ textDecoration: "none", background: "none", color:"#0D6EFD" , border: "none", cursor: "pointer", marginLeft: "-9px"  }}
                            
                            >
                            Press & media
                          </button>
                          <br/>
                          {/* <a style={{textDecoration:"none"}} href="">TradeNova cares (CSR)</a> */}
                          <button
                           style={{ textDecoration: "none", background: "none", color:"#0D6EFD" , border: "none", cursor: "pointer", marginLeft: "-9px"  }}
                            
                            >
                            TradeNova cares (CSR)
                          </button>
                </div>
                <div className='col'>
                    <p>Support</p>
                        <a style={{textDecoration:"none"}}  href="/Contact">Contact</a>
                        <br />
                        <a style={{textDecoration:"none"}} href="/Support portal">Support portal</a>
                        <br />
                         <a style={{textDecoration:"none"}} href="/Z-Connect blog">Z-Connect blog</a>
                        <br />
                        <a style={{textDecoration:"none"}} href="/List of charges">List of charges</a>
                        <br />
                        <a style={{textDecoration:"none"}} href="/Downloads & resources">Downloads & resources</a>
                       <br />
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a style={{textDecoration:"none"}} href="/Signup">Open an account</a>
                    <br />
                    <a style={{textDecoration:"none"}} href="/Fund transfer">Fund transfer</a>
                    <br />
                    <a style={{textDecoration:"none"}} href="/60 day challenge">60 day challenge</a>
                      <br />
                </div>
            </div>
            <div className='mt-5  text-muted' style={{fontSize:"16px"}}>
             <p>
            TradeNova Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ00003 CDSL: Depository services through TradeNova Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through TradeNova Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: TradeNova Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@tradenova.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of TradeNova and offering such services, please
            create a ticket here.
          </p>
          </div>
        </div>
        </footer>
    );
}

export default Footer;
