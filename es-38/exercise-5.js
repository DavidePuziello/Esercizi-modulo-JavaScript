class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class BankAccountVip extends BankAccount {
  perc = 3;
  interests = 1000;

  constructor(initialAmount) {
    super(initialAmount)
  }

  deposit(amount) {
    if (amount >= this.interests)
    super.deposit(this.calcInterests(amount))
    else {
      super.deposit(amount)
    }
  }

  calcInterests(amount) {
    const calcolo = (amount * this.perc) / 100;
    return amount + calcolo
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();