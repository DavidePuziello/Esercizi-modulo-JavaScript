/* function sum(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
} */

function sum(...num) {
    let tot = 0;
    for (let numbers of num) tot += numbers;
    return tot;
}

console.log(sum(1, 2, 3, 4, 5));