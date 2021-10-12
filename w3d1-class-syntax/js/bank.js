"use strict";

/**
 * A Bank class
 *
 * Provides the basic functionality that every account should have
 */
class Bank{
    static nextBankNumber = 0;
    constructor() {
        this.accounts = [];
    }

    addAccount(){
        this.accounts.push(new Account(++Bank.nextBankNumber));
        return this.accounts.length;
    }

    addSavingsAccount(interest){
        this.accounts.push(new SavingsAccount(++Bank.nextBankNumber, interest));
        return this.accounts.length;
    }

    addCheckingAccount(overdraftLimit){
        this.accounts.push(new CheckingAccount(++Bank.nextBankNumber, overdraftLimit));
        return this.accounts.length;
    }

    closeAccount(number){
        this.accounts = this.accounts.filter(acc => acc.getNumber() !== number);
    }

    accountReport(){
        let accountsReport = [];
        this.accounts.forEach(acc => {
            accountsReport.push(acc.toString());
        })
        return accountsReport.join("\n");
    }

    endOfMonth() {
        return this.accounts.map(acc => acc.endOfMonth()).map(str=> str + "\n").toString();
    }
}