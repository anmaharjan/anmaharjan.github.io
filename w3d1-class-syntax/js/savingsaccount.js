"use strict";

/**
 * A Bank SavingsAccount class
**/
class SavingsAccount extends Account{
    /**
     * Constructor for creating a new SavingsAccount object
     *
     * @param {number} number the number for this account\
     * @param {interest} interest the interest rate for SavingsAccount type\
     */
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    /**
     * Getter for the 'private' number field
     *
     * @returns {interest} the interest rate
     */
    getInterest(){
        return this._interest;
    }

    /**
     * Setter for the 'private' number field
     *
     * @param {interest} interest the interest rate
     */
    setInterest(interest){
        this._interest = interest;
    }

    /**
     * Method to add interest into the account
     *
     * @returns {undefined}
     * @throws {RangeError} when balance of an account is less than or equal to zero
     */
    addInterest(){
        if(super.getBalance() <= 0)
            throw new RangeError("Balance amount must be greater than zero");

        let interest = super.getBalance() * this._interest / 100;
        super.deposit(interest);
    }

    /**
     * @returns {string} representation of this SavingsAccount
     */
    toString() {
        return "SavingsAccount " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }

    /**
     * Performs needed actions at the end of the month
     *
     * @returns {undefined}
     */
    endOfMonth() {
        this.addInterest();
        return "Interest added SavingsAccount " + this._number + ": balance: " + this._balance + " interest: " + this._interest;
    }
}