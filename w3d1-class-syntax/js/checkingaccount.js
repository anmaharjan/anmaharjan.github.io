"use strict";

/**
 * A Bank CheckingAccount class
 **/

class CheckingAccount extends Account{
    /**
     * Constructor for creating a new SavingsAccount object
     *
     * @param {number} number the number for this account\
     * @param {overdraftLimit} overdraftLimit the overdraft limit for CheckingAccount type\
     */
    constructor(number, overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit;
    }

    /**
     * Getter for the 'private' number field
     *
     * @returns {overdraftLimit} the overdraft limit
     */
    getOverdraftLimit(){
        return this._overdraftLimit;
    }

    /**
     * Setter for the 'private' number field
     *
     * @param {overdraftLimit} overdraftLimit the overdraft limit
     */
    setOverdraftLimit(overdraftLimit){
        this._overdraftLimit = overdraftLimit;
    }

    /**
     * Method to withdraw amount from the account within an overdraft limit
     *
     * @throws {RangeError} when withdraw amount is more than the sum of current balance and overdraft limit
     */
    withdraw(amount){
        if(amount > (super.getBalance() + this._overdraftLimit))
            throw new RangeError("Withdraw amount has crossed the over draft limit");

        this._balance = super.getBalance() - amount;
    }

    /**
     * @returns {string} representation of this CheckingAccount
     */
    toString() {
        return "CheckingAccount " + this._number + ": balance " + this._balance +
            ": overdraft limit " + this._overdraftLimit;
    }

    /**
     * Performs needed actions at the end of the month
     *
     * @returns {undefined}
     */
    endOfMonth() {
        if(this._balance < 0){
            return "Warning, low balance CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft limit: " + this._overdraftLimit;
        }
        return "";
    }
}