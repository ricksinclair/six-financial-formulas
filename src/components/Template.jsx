import React, { Component } from "react";
import LoadingImg from "./img/loading.gif";
class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card card-body text-center mt-5">
                <h1 className="heading pb-3 display-5">Loan Calculator</h1>
                <form id="loan-form">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className=" input-group-text">$</span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="amount"
                        placeholder="Loan Amount"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className=" input-group-text">%</span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="interest-rate"
                        placeholder="Interest Rate"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      id="years"
                      placeholder="Years To Repay"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Calculate"
                      className="btn btn-dark btn-block"
                      id="calculate"
                    />
                  </div>
                </form>

                <div id="loading">
                  <img src={LoadingImg} alt="loading spinner" />
                </div>

                <div id="results" className="pt-4">
                  <h5>Results</h5>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className=" input-group-text">
                          Monthly Payment
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="monthly-payment"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className=" input-group-text">Total Payment</span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="total-payment"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className=" input-group-text">
                          Total Interest
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="total-interest"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
