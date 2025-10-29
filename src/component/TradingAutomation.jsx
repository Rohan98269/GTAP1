import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TradingAutomation() {
  return (
    <section className=" text-center border align-content-center min-vh-100 " style={{ backgroundColor: "#f9f6ff" }}>
      <div className="container ">
        {/* Tag Line */}
        <span className="badge bg-light heading heading-border rounded fw-semibold mb-3 px-3 py-2">
          Customized Solutions
        </span>

        {/* Heading */}
        <h2 className="fw-bold display-6 mb-3">
          Multi-Market Trading <span className="heading">Automation</span>
        </h2>

        {/* Description */}
        <p className="text-secondary fs-5 mb-5">
          We automate trading across all major markets – Crypto, NSE, BSE, Forex, and MCX.
          Deploy your own strategies with our universal trading platform that works everywhere.
        </p>

        {/* Stats Cards */}
        <div className="row g-4 justify-content-center">
          {/* Card 1 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="bg-white shadow-sm rounded-4 p-4 h-100">
              <h3 className="heading fw-bold fs-2 mb-2">500+</h3>
              <h5 className="fw-semibold mb-2">Multi-Market Bots Deployed</h5>
              <p className="text-muted small mb-0">Across all major markets</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="bg-white shadow-sm rounded-4 p-4 h-100">
              <h3 className="heading fw-bold fs-2 mb-2">95%</h3>
              <h5 className="fw-semibold mb-2">Cross-Platform Success Rate</h5>
              <p className="text-muted small mb-0">Crypto, Forex, Stocks, MCX</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="bg-white shadow-sm rounded-4 p-4 h-100">
              <h3 className="heading fw-bold fs-2 mb-2">40%</h3>
              <h5 className="fw-semibold mb-2">Average ROI Improvement</h5>
              <p className="text-muted small mb-0">Through automated strategies</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="bg-white shadow-sm rounded-4 p-4 h-100">
              <h3 className="heading fw-bold fs-2 mb-2">4+</h3>
              <h5 className="fw-semibold mb-2">Markets Covered</h5>
              <p className="text-muted small mb-0">Crypto, NSE/BSE, Forex, MCX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TradingAutomation;
