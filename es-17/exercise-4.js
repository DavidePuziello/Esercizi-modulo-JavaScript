function calculate() {
  let result = 0;
  return {
    add: function (x){
      result += x;
      return this; 
    },
    multiply: function (x){
      result *= x;
      return this;
    },
    sub: function (x) {
      result -= x;
      return this;
    }, 
    divide: function(x) {
      result /= x;
      return this;
    },
    printResult: function() {
      console.log(result);
    }
  }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7