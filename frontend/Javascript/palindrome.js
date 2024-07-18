let isPalindrome = function(number){
    let rem, temp, final = 0;
    temp = number;
    while (number > 0){
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;
    }
    if ( final == temp){
        return true;
    }
    else{
        return false;
    }
};
console.log(isPalindrome(121));