class BankAccount {
    balance = 0;
    constructor(balance){
        this.balance = balance;
    }

    deposit(balance){
        this.balance += balance;
    }

    withdraw(balance){
        this.balance -= balance;
    }

    view() {
        console.log (this.balance);
    }
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();