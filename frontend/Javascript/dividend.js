function divide(dividend, divisor) {
    let sign = (dividend < 0) === (divisor < 0) ? 1 : -1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let quotient = 0;
    while (dividend >= divisor) {
        dividend -= divisor;
        ++quotient;
    }
    if(sign==-1) quotient=-quotient;
    return quotient;
}
let a = 10, b = 3;
console.log(divide(a,b));