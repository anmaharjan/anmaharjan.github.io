/* -------------------------------------- Account Test -------------------------------------- */
describe("Account Class Test", () => {
    describe("Getter Test : getNumber()", () => {
        it("returns the number of an account", () => {
            let account = new Account(44);
            assert.equal(44, account.getNumber());
        });
    });

    describe("Getter Test : getBalance()", () => {
        it("returns the current balance of an account", () => {
            let account = new Account(3);
            account.deposit(11);
            assert.equal(11, account.getBalance());
        });
    });

    describe("Deposit Test : deposit()", () => {
        it("If deposit amount is zero, then generate RangeError exception", () => {
            let account = new Account(55);

            assert.throws(() => account.deposit(0), RangeError, 'Deposit amount has to be greater than zero');
        });

        it("If deposit amount is less than zero, then generate RangeError exception", () => {
            let account = new Account(55);

            assert.throws(() => account.deposit(-100), RangeError, 'Deposit amount has to be greater than zero');
        });

        it("If deposit amount is greater than zero, then it will add to the balance", () => {
            let account = new Account(55);
            account.deposit(500);
            account.deposit(1000);

            assert.equal(1500, account.getBalance());
        });
    });

    describe('Withdraw Test : withdraw()', () => {
        it('If withdraw amount is equal to zero, then it will generate RangeError exception', () => {
            let account = new Account(44);
            account.deposit(500);

            assert.throws(() => account.withdraw(0), RangeError, 'Withdraw amount has to be greater than zero');
        });

        it('If withdraw amount is less than zero, then it will generate RangeError exception', () => {
            let account = new Account(44);
            account.deposit(500);

            assert.throws(() => account.withdraw(-120), RangeError,'Withdraw amount has to be greater than zero');
        });

        it('If the total balance is less than the withdrawing amount, then it will generate Error exception', () => {
            let account = new Account(44);
            account.deposit(500);

            assert.throws(() => account.withdraw(1200), Error, 'Insufficient funds');
        });

        it('If withdraw amount is legit, then it will subtract the amount from the total balance.', () => {
            let account = new Account(0);
            account.deposit(500);
            account.withdraw(100);

            assert.equal(400, account.getBalance());
        });
    });

    describe('ToString Test : toString()', () => {
        it('returns the detail of an account with current balance and the account number', () => {
            let account = new Account(34342);
            account.deposit(500);
            account.withdraw(100);
            account.deposit(100);
            account.withdraw(400);

            assert.equal('Account 34342: balance 100', account.toString());
        });
    });
});

/* -------------------------------------- SavingsAccount Test -------------------------------------- */
describe('SavingsAccount Class Test', () => {
    describe("Getter Test : getInterest()", () => {
        it("returns the interest of a savings account", () => {
            let account = new SavingsAccount(44123, 10);
            assert.equal(10, account.getInterest());
        });
    });

    describe("Setter Test : setInterest()", () => {
        it("sets the interest rate of a savings account", () => {
            let account = new SavingsAccount(44123, 10);
            account.setInterest(11);
            assert.equal(11, account.getInterest());
        });
    });

    describe("Add Interest Test : addInterest()", () => {
        it("If current balance is zero, then generate RangeError exception", () => {
            let account = new SavingsAccount(44123, 10);

            assert.throws(() => account.addInterest(), RangeError, 'Balance amount must be greater than zero');
        });

        it("If current balance is greater than zero, then it will add interest to the current total balance.", () => {
            let account = new SavingsAccount(44123, 10);
            account.deposit(5000);
            account.addInterest();

            assert.equal(5500, account.getBalance());
        });
    });

    describe('ToString Test : toString()', () => {
        it('returns the detail of a savings account with current balance and the account number', () => {
            let account = new SavingsAccount(44123, 10);
            account.deposit(500);
            account.withdraw(100);
            account.deposit(100);
            account.withdraw(400);

            account.addInterest();

            assert.equal('SavingsAccount 44123: balance 110: interest 10', account.toString());
        });
    });
});

/* -------------------------------------- CheckingAccount Test -------------------------------------- */
describe('CheckingAccount Class Test', () => {
    describe("Getter Test : getOverdraftLimit()", () => {
        it("returns the overdraft limit of a checkings account", () => {
            let account = new CheckingAccount(44123, 1500);
            assert.equal(1500, account.getOverdraftLimit());
        });
    });

    describe("Setter Test : setOverdraftLimit()", () => {
        it("sets the overdraft limit of a checkings account", () => {
            let account = new CheckingAccount(44123, 1500);
            account.setOverdraftLimit(2000);
            assert.equal(2000, account.getOverdraftLimit());
        });
    });

    describe("WithDraw Test : withdraw()", () => {
        it("If the withdrawing amount is more than the sum of current balance and overdraft limit, " +
            "then it will generate RangeError exception", () => {
            let account = new CheckingAccount(44123, 1500);
            account.deposit(2000);

            assert.throws(() => account.withdraw(6000), RangeError, 'Withdraw amount has crossed the over draft limit');
        });

        it("If the withdrawing amount is less than the sum of current balance and overdraft limit," +
            " then it will withdraw the requested amount.", () => {
            let account = new CheckingAccount(44123, 1500);
            account.deposit(5000);
            account.withdraw(6000);

            assert.equal(-1000, account.getBalance());
        });
    });

    describe('ToString Test : toString()', () => {
        it('returns the detail of a checking account with current balance and the account number', () => {
            let account = new CheckingAccount(44123, 1500);
            account.deposit(5000);
            account.withdraw(6000);

            assert.equal('CheckingAccount 44123: balance -1000: overdraft limit 1500', account.toString());
        });
    });
});

/* -------------------------------------- Bank Test -------------------------------------- */
describe('Bank Class Test', () => {
    describe("Add Account Test : addAccount()", () => {
        it("adds a new account to the account list and returns the total number of accounts in that list", () => {
            let bank = new Bank();
            bank.addAccount();
            assert.equal(2, bank.addAccount());
        });
    });

    describe("Add Savings Account Test : addSavingsAccount()", () => {
        it("adds a new savings account to the account list and returns the total number of accounts in that list", () => {
            let bank = new Bank();
            bank.addSavingsAccount(10);
            assert.equal(2, bank.addSavingsAccount(19));
        });
    });

    describe("Add Checking Account Test : addCheckingAccount()", () => {
        it("adds a new checking account to the account list and returns the total number of accounts in that list", () => {
            let bank = new Bank();
            bank.addCheckingAccount(1500);
            assert.equal(2, bank.addCheckingAccount(5000));
        });
    });

    describe("Close Account Test : closeAccount()", () => {
        it("removes/closes account from the list", () => {
            let bank = new Bank();
            bank.addAccount();
            bank.addSavingsAccount(12);
            bank.addSavingsAccount(11);
            bank.addCheckingAccount(1234);
            bank.addCheckingAccount(3243);

            bank.closeAccount(9);

            assert.deepEqual([{"_number":7,"_balance":0},{"_number":8,"_balance":0,"_interest":12},
                {"_number":10,"_balance":0,"_overdraftLimit":1234},{"_number":11,"_balance":0,"_overdraftLimit":3243}],
                bank.accounts
            );
        });
    });

    describe("Account Report Test : accountReport()", () => {
        it("generates the report of an account", () => {
            let bank = new Bank();
            bank.addAccount();
            bank.addSavingsAccount(12);
            bank.addSavingsAccount(11);
            bank.addCheckingAccount(1234);
            bank.addCheckingAccount(3243);

            assert.equal("Account 12: balance 0\n" +
                "SavingsAccount 13: balance 0: interest 12\n" +
                "SavingsAccount 14: balance 0: interest 11\n" +
                "CheckingAccount 15: balance 0: overdraft limit 1234\n" +
                "CheckingAccount 16: balance 0: overdraft limit 3243",
                bank.accountReport()
            );
        });
    });

    describe("Bank : endOfMonth()", () => {
        it("returns a string of output of endOfMonth() function from all the objects", () => {
            let bank = new Bank();
            bank.addAccount();
            bank.addSavingsAccount(12);
            bank.accounts[bank.accounts.length-1].deposit(1000);
            bank.addCheckingAccount(10000);
            bank.accounts[bank.accounts.length-1].withdraw(2000);

            assert.equal("\n,Interest added SavingsAccount 18: balance: 1120 interest: 12\n" +
                ",Warning, low balance CheckingAccount 19: balance: -2000 overdraft limit: 10000\n",
                bank.endOfMonth()
            );
        });
    });
});