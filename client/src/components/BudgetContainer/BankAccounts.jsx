import React from "react";
import Transfers from "./Transfers";
import Form from "../common/form";

class BankAccounts extends Form {
  state = {
    data: {},
    errors: {},
    accounts: {
      WELLS_FARGO_ACCOUNT: 40.79,
      CUNJ_CHECKING: 24.27,
      CUNJ_SAVINGS: 257.49,
      ALLY_ACCOUNT: 40.71,
    },
  };
  render() {
    const { WELLS_FARGO_ACCOUNT, CUNJ_CHECKING, CUNJ_SAVINGS, ALLY_ACCOUNT } =
      this.state.accounts;

    return (
      <>
        <div>
          <h2 className="font-bold text-center mb-6">ACCOUNTS</h2>
          <div className="grid grid-cols-2 grid-rows-2 text-center">
            <div>
              <h3>Wells Fargo Account</h3>
              <span>$ {WELLS_FARGO_ACCOUNT}</span>
            </div>
            <div>
              <h3>CUNJ Checking</h3>
              <span>$ {CUNJ_CHECKING}</span>
            </div>
            <div>
              <h3>CUNJ Savings</h3>
              <span>$ {CUNJ_SAVINGS}</span>
            </div>
            <div>
              <h3>Ally Giving</h3>
              <span>$ {ALLY_ACCOUNT}</span>
            </div>
          </div>
        </div>

        <Transfers
          accounts={this.state.accounts}
          handleAccounts={this.handleAccountChanges}
        />
      </>
    );
  }
}

export default BankAccounts;
