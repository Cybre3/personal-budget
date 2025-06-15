import React from 'react';
import Joi from 'joi-browser';

import Form from '../common/form';
import { bills } from './billInfo';

class BillsBreakdown extends Form {
  state = {
    data: {},
    errors: {},
    show: false,
  };

  componentDidMount() {}

  schema = {
    ...bills.map((bill) => Joi.number().label(bill.companyName)),
  };

  handleShow = (e) => {
    e.preventDefault();
    this.setState({ show: true });
  };

  handleHide = (e) => {
    e.preventDefault();
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShow} className="bg-neutral-600 py-1 px-4 rounded-md mt-1">
          Bills Breakdown
        </button>
        {this.state.show && (
          <div className={`w-full bg-white text-black text-xl absolute`}>
            <div className="ms-auto bg-gray-200 w-fit">
              <button onClick={this.handleHide} className="text-center px-2">
                x
              </button>
            </div>
            <table className="text-center align-middle text-sm">
              <thead className="bg-gray-600 text-white">
                <tr className="">
                  <th className="w-[10%] py-1">Due Date</th>
                  <th className="w-[20%]">Type</th>
                  <th className="w-1/3">Company Name</th>
                  <th className="w-[10%]">Amount</th>
                  <th className="w-1/2">Notes</th>
                </tr>
              </thead>
              <tbody>
                {bills &&
                  bills.map((bill) => (
                    <tr key={bill._id} className={`${bill.dateDue < 19 ? 'bg-zinc-400' : 'bg-purple-200'}`}>
                      <td className={`border py-1`}>{bill.dateDue}</td>
                      <td className="border">{bill.type}</td>
                      <td className="border">{bill.companyName}</td>
                      <td className="border">$ {bill.amount}</td>
                      <td className="border text-xs">{bill.note}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default BillsBreakdown;
